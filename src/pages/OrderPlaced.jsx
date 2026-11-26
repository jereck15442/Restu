import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Clock, Home } from 'lucide-react';

export default function OrderPlaced() {
  const navigate = useNavigate();

  const order = {
    id: '#ORD-2024-0892',
    restaurant: 'Luigi\'s Italian Trattoria',
    items: [
      { name: 'Margherita Pizza', qty: 2 },
      { name: 'Tiramisu', qty: 1 },
    ],
    total: 37.97,
    estimatedTime: '35-45 min',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pt-16">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} className="text-white" />
        </div>

        <h1 className="text-3xl font-bold text-text-primary mb-4">Order Placed!</h1>
        <p className="text-text-secondary mb-10">Your order has been confirmed and is being prepared.</p>

        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold text-text-primary">Order {order.id}</span>
            <span className="badge badge-success">Confirmed</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} className="text-text-hint" />
              <div>
                <span className="font-medium text-text-primary">{order.restaurant}</span>
                <p className="text-xs text-text-hint">Italian • {order.estimatedTime}</p>
              </div>
            </div>
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between text-sm text-text-secondary">
                <span>{item.name} × {item.qty}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-bold text-text-primary pt-4 border-t border-border">
            <span>Total</span>
            <span>$${order.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/order-tracking')}
            className="w-full btn btn-primary"
          >
            <Clock size={20} className="mr-2" />
            Track order
          </button>
          <button
            onClick={() => navigate('/home')}
            className="w-full btn btn-outline"
          >
            <Home size={20} className="mr-2" />
            Browse more
          </button>
        </div>
      </div>
    </div>
  );
}