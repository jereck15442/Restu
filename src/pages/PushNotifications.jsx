import { useState } from 'react';

const initialSettings = [
  { id: 'order', title: 'Order Updates', desc: 'Get notified about your order status changes', enabled: true },
  { id: 'promo', title: 'Promotional Offers', desc: 'Receive special discounts and deals', enabled: false },
  { id: 'new', title: 'New Restaurants', desc: 'Be the first to know about new restaurants nearby', enabled: true },
  { id: 'rating', title: 'Rating Requests', desc: "We'll ask you to rate your recent orders", enabled: false },
];

export default function PushNotifications() {
  const [settings, setSettings] = useState(initialSettings);

  const toggle = (id) => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-lg">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text-primary">Push Notifications</h1>
          <p className="text-text-secondary mt-2">Manage your notification preferences</p>
        </div>

        <div className="space-y-4">
          {settings.map((setting) => (
            <div key={setting.id} className="card p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-text-primary">{setting.title}</h3>
                <p className="text-text-hint text-sm">{setting.desc}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={setting.enabled}
                aria-label={setting.title}
                onClick={() => toggle(setting.id)}
                className={`relative shrink-0 w-14 h-7 rounded-full transition-colors ${
                  setting.enabled ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 ${
                    setting.enabled ? 'right-1' : 'left-1'
                  } w-5 h-5 bg-white rounded-full shadow-sm transition-all`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
