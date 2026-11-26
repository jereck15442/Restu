import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Star, Clock, MapPin, Phone, Mail, ArrowRight, Plus, Minus, ShoppingCart, ChevronLeft } from 'lucide-react';
import useRestaurants from '../hooks/useRestaurants';

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurants } = useRestaurants();
  const restaurant = restaurants.find(r => r.id === id);
  const [cart, setCart] = useState({});

  if (!restaurant) return <div className="min-h-screen flex items-center justify-center">Restaurant not found</div>;

  const addItem = (itemId) => setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

  const removeItem = (itemId) => setCart(prev => {
    const next = { ...prev };
    if (next[itemId] > 1) next[itemId] -= 1;
    else delete next[itemId];
    return next;
  });

  const cartItems = Object.entries(cart);
  const subtotal = cartItems.reduce((sum, [id, qty]) => {
    const item = restaurant.menu.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="page-container">
        <nav className="flex items-center gap-2 mb-6">
          <button onClick={() => navigate(-1)} aria-label="Go back" className="text-text-secondary hover:text-primary">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold text-text-primary">{restaurant.name}</h1>
        </nav>

        <div className="relative">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-3xl"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="badge badge-primary">{restaurant.category}</span>
            <span className="badge badge-success">Delivery available</span>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full backdrop-blur">
            <Star size={18} className="text-accent" />
            <span className="font-semibold text-text-primary">{restaurant.rating}</span>
            <span className="text-text-hint text-xs">• {restaurant.deliveryTime}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">{restaurant.name}</h2>
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} className="text-accent" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="text-text-hint text-sm">({(Math.floor(Math.random() * 500) + 100)} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
                <MapPin size={16} />
                <span>{restaurant.address}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm mb-6">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-text-primary mb-4">Menu</h3>
              <div className="space-y-4">
                {restaurant.menu.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-surface border border-border rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">{item.name}</h4>
                      <p className="text-text-hint text-sm mt-1">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-text-primary">${item.price.toFixed(2)}</span>
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <button
                          onClick={() => removeItem(item.id)}
                          disabled={!cart[item.id]}
                          className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium">{cart[item.id] || 0}</span>
                        <button
                          onClick={() => addItem(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary-light"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>

          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-text-primary mb-4">Order Summary</h3>
              {cartItems.length === 0 ? (
                <div className="text-center py-6 text-text-hint">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {cartItems.map(([itemId, qty]) => {
                    const item = restaurant.menu.find(m => m.id === itemId);
                    return (
                      <div key={itemId} className="flex justify-between text-sm">
                        <span className="text-text-secondary">{item.name} × {qty}</span>
                        <span className="font-medium text-text-primary">${(item.price * qty).toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="border-t border-border pt-4 mb-6 flex justify-between text-lg font-bold">
                <span className="text-text-primary">Total</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                disabled={cartItems.length === 0}
                className={`w-full btn btn-lg ${cartItems.length > 0 ? 'btn-primary' : 'btn-outline'}`}
              >
                <ShoppingCart size={20} className="mr-2" />
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
