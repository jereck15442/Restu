import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingCart, Bell, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
  };

  const menuItems = [
    { icon: User, label: 'Account Settings', path: '/profile' },
    { icon: ShoppingCart, label: 'Order History', path: '/order-history' },
    { icon: Bell, label: 'Notifications', path: '/push-notifications' },
    { icon: MapPin, label: 'Delivery Addresses', path: '/set-location' },
    { icon: Settings, label: 'Notification Settings', path: '/push-notifications' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-lg">
        <div className="card p-6 mb-8 text-center">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h2 className="text-2xl font-bold text-text-primary">{user.name}</h2>
          <p className="text-text-secondary">{user.email}</p>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="card p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <span className="font-medium text-text-primary">{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-text-hint group-hover:text-primary" />
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <button onClick={handleSignOut} className="w-full btn btn-outline text-error py-4">
            <LogOut size={20} className="mr-2" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}