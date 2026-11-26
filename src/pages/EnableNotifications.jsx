import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCircle, ArrowRight } from 'lucide-react';

export default function EnableNotifications() {
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const toggleNotifications = () => setEnabled(!enabled);

  const continueToApp = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${enabled ? 'bg-success' : 'bg-primary-light'}`}>
            <Bell size={32} className={`${enabled ? 'text-white' : 'text-primary'}`} />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Enable notifications</h2>
          <p className="text-text-secondary mt-4">
            Get notified about your order status, special offers, and promotions.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <Bell size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Order updates</h3>
                <p className="text-sm text-text-hint">Track your orders in real time</p>
              </div>
            </div>
            <button
              onClick={toggleNotifications}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 ${
                  enabled ? 'right-1' : 'left-1'
                } w-5 h-5 bg-white rounded-full shadow-sm transition-transform`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg opacity-50 pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Bell size={20} className="text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-text-secondary">Promotional offers</h3>
                <p className="text-sm text-text-hint">Special discounts & deals</p>
              </div>
            </div>
          </div>
        </div>

        {enabled && (
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-lg mb-10">
            <CheckCircle size={20} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">Notifications enabled</span>
          </div>
        )}

        <button
          onClick={continueToApp}
          disabled={!enabled}
          className={`w-full btn btn-lg ${enabled ? 'btn-primary' : 'btn-outline'}`}
        >
          {enabled ? <ArrowRight size={20} className="mr-2" /> : ''}
          Continue to app
        </button>
      </div>
    </div>
  );
}