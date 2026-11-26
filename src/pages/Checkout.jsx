import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const order = {
    items: [
      { name: 'Margherita Pizza', qty: 2, price: 14.99 },
      { name: 'Tiramisu', qty: 1, price: 7.99 },
    ],
    subtotal: 37.97,
    delivery: 3.99,
    tax: 3.36,
    total: 45.32,
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const steps = ['Delivery Details', 'Payment Method', 'Confirm Order'];

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-4xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-text-secondary">Step {step} of 3</span>
            <span className="text-sm text-text-hint">{steps[step - 1]}</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-1 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${(s <= step ? 100 : 0)}%`,
                    backgroundColor: s <= step ? '#d03d10' : '#e0e0e0',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <div className="card p-6">
                <h3 className="font-semibold text-text-primary mb-4">Delivery Details</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint">👤</span>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint">✉️</span>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint">𓂃</span>
                    <input
                      type="text"
                      placeholder="Delivery address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-input pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="card p-6">
                <h3 className="font-semibold text-text-primary mb-4">Payment Method</h3>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full flex items-center justify-between p-4 bg-surface border rounded-xl transition-colors ${
                      paymentMethod === 'card' ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <CreditCard size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-text-primary">Credit/Debit Card</span>
                        <p className="text-xs text-text-hint">Visa •••• 4242</p>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <CheckCircle size={20} className="text-primary" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`w-full flex items-center justify-between p-4 bg-surface border rounded-xl transition-colors ${
                      paymentMethod === 'paypal' ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                        <span className="text-green-600">P</span>
                      </div>
                      <div>
                        <span className="font-medium text-text-primary">PayPal</span>
                        <p className="text-xs text-text-hint">paypal@email.com</p>
                      </div>
                    </div>
                    {paymentMethod === 'paypal' && <CheckCircle size={20} className="text-primary" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`w-full flex items-center justify-between p-4 bg-surface border rounded-xl transition-colors ${
                      paymentMethod === 'apple' ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <span className="text-purple-600">A</span>
                      </div>
                      <div>
                        <span className="font-medium text-text-primary">Apple Pay</span>
                        <p className="text-xs text-text-hint">•••• 4242</p>
                      </div>
                    </div>
                    {paymentMethod === 'apple' && <CheckCircle size={20} className="text-primary" />}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card p-6 text-center">
                <h3 className="font-semibold text-text-primary mb-4">Confirm Order</h3>
                <div className="space-y-4 mb-6">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-text-secondary">{item.name} × {item.qty}</span>
                      <span className="font-medium">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 flex justify-between text-sm text-text-secondary">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-secondary">
                    <span>Delivery</span>
                    <span>+${order.delivery.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-secondary">
                    <span>Tax</span>
                    <span>+${order.tax.toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mb-6 flex justify-between text-lg font-bold text-text-primary">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-text-hint mb-6">
                  Your order will be delivered within 35-45 minutes.
                </p>
                <button
                  onClick={() => navigate('/order-placed')}
                  className="w-full btn btn-primary btn-lg"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Place order - ${order.total.toFixed(2)}
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-text-primary mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <span className="font-medium text-text-primary">{item.name}</span>
                      <span className="text-xs text-text-hint block">× {item.qty}</span>
                    </div>
                    <span className="font-medium">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Delivery</span>
                  <span>+${order.delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax</span>
                  <span>+${order.tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-border pt-4 mb-6 flex justify-between text-xl font-bold text-text-primary">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className="w-full btn btn-ghost"
                >
                  Back
                </button>
                <button
                  onClick={step === 3 ? () => navigate('/order-placed') : nextStep}
                  className="w-full btn btn-primary"
                >
                  {step === 3 ? 'Place Order' : (<><ArrowRight size={20} className="mr-2" /> Continue</>)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}