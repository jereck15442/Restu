import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Apple, CheckCircle, ArrowRight } from 'lucide-react';

export default function PaymentMethod() {
  const [selected, setSelected] = useState('card');
  const navigate = useNavigate();

  const methods = [
    {
      id: 'card',
      icon: <CreditCard size={28} className="text-blue-600" />,
      title: 'Credit/Debit Card',
      subtitle: 'Visa •••• 4242',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'paypal',
      icon: <Wallet size={28} className="text-blue-600" />,
      title: 'PayPal',
      subtitle: 'paypal@email.com',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'apple',
      icon: <Apple size={28} className="text-purple-600" />,
      title: 'Apple Pay',
      subtitle: '•••• 4242',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-primary">Select Payment Method</h1>
          <p className="text-text-secondary mt-2">Choose how you'd like to pay</p>
        </div>

        <div className="space-y-3">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelected(method.id)}
              className={`w-full flex items-center justify-between p-5 bg-surface border rounded-2xl transition-all ${
                selected === method.id
                  ? 'border-primary bg-primary-light shadow-sm'
                  : 'border-border text-text-secondary hover:border-primary'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center`}>
                  {method.icon}
                </div>
                <div>
                  <span className="font-semibold text-text-primary">{method.title}</span>
                  <p className="text-sm text-text-hint">{method.subtitle}</p>
                </div>
              </div>
              {selected === method.id && <CheckCircle size={20} className="text-primary" />}
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/order-placed')}
            className="w-full btn btn-primary btn-lg"
          >
            <ArrowRight size={20} className="mr-2" />
            Confirm payment
          </button>
          <p className="text-xs text-text-hint mt-4">
            Your payment is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
}