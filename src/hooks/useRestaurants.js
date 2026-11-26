import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      // Mock data - replace with supabase query when backend is ready
      const mockRestaurants = [
        {
          id: '1',
          name: 'Luigi\'s Italian Trattoria',
          category: 'Italian',
          rating: 4.8,
          deliveryTime: '25-35 min',
          address: '123 Main St, Downtown',
          imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
          menu: [
            { id: 'm1', name: 'Margherita Pizza', price: 14.99, description: 'Fresh mozzarella, tomato, basil' },
            { id: 'm2', name: 'Spaghetti Carbonara', price: 16.99, description: 'Eggs, pecorino, pancetta' },
            { id: 'm3', name: 'Tiramisu', price: 7.99, description: 'Coffee-soaked ladyfingers, mascarpone' },
          ],
        },
        {
          id: '2',
          name: 'Sakura Sushi',
          category: 'Japanese',
          rating: 4.9,
          deliveryTime: '30-40 min',
          address: '456 Oak Ave, Midtown',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
          menu: [
            { id: 'm1', name: 'Salmon Roll', price: 12.99, description: 'Fresh salmon, avocado, cucumber' },
            { id: 'm2', name: 'Tuna Sashimi', price: 18.99, description: 'Premium bluefin tuna' },
            { id: 'm3', name: 'Miso Soup', price: 4.99, description: 'Traditional miso with tofu' },
          ],
        },
        {
          id: '3',
          name: 'Burger Shack',
          category: 'American',
          rating: 4.5,
          deliveryTime: '20-30 min',
          address: '789 Pine St, Uptown',
          imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
          menu: [
            { id: 'm1', name: 'Classic Cheeseburger', price: 11.99, description: 'Beef patty, cheddar, lettuce' },
            { id: 'm2', name: 'Crispy Fries', price: 4.99, description: 'Golden crispy fries' },
            { id: 'm3', name: 'Milkshake', price: 5.99, description: 'Vanilla or chocolate' },
          ],
        },
        {
          id: '4',
          name: 'Taco Fiesta',
          category: 'Mexican',
          rating: 4.6,
          deliveryTime: '25-35 min',
          address: '321 Cedar St, Downtown',
          imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
          menu: [
            { id: 'm1', name: 'Carne Asada Tacos', price: 13.99, description: 'Grilled steak, cilantro, onion' },
            { id: 'm2', name: 'Guacamole', price: 8.99, description: 'Fresh avocado, lime, cilantro' },
            { id: 'm3', name: 'Churros', price: 6.99, description: 'Cinnamon sugar churros' },
          ],
        },
        {
          id: '5',
          name: 'Curry House',
          category: 'Indian',
          rating: 4.7,
          deliveryTime: '35-45 min',
          address: '555 Maple Rd, Midtown',
          imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          menu: [
            { id: 'm1', name: 'Butter Chicken', price: 15.99, description: 'Tomato cream sauce, basmati rice' },
            { id: 'm2', name: 'Vegetable Samosa', price: 6.99, description: 'Crispy pastry, spiced potatoes' },
            { id: 'm3', name: 'Garlic Naan', price: 3.99, description: 'Fresh baked flatbread' },
          ],
        },
        {
          id: '6',
          name: 'Green Bowl',
          category: 'Healthy',
          rating: 4.4,
          deliveryTime: '20-30 min',
          address: '888 Birch Ln, Uptown',
          imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
          menu: [
            { id: 'm1', name: 'Quinoa Bowl', price: 12.99, description: 'Quinoa, roasted veggies, tahini' },
            { id: 'm2', name: 'Acai Bowl', price: 9.99, description: 'Acai, granola, fresh berries' },
            { id: 'm3', name: 'Green Smoothie', price: 6.99, description: 'Spinach, banana, almond milk' },
          ],
        },
      ];
      setRestaurants(mockRestaurants);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { restaurants, loading, error };
}