import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Motorbike, CheckCircle, Home, ShoppingBag } from 'lucide-react';

const stages = [
  { id: 'confirmed', title: 'Order Confirmed', icon: CheckCircle },
  { id: 'preparing', title: 'Preparing', icon: Clock },
  { id: 'out-for-delivery', title: 'Out for Delivery', icon: Motorbike },
  { id: 'delivered', title: 'Delivered', icon: CheckCircle },
];

const stageMessages = [
  'Your order has been confirmed.',
  'Your meal is being freshly prepared.',
  'Your rider is on the way.',
  'Your order has been delivered. Enjoy your meal.',
];

export default function OrderTracking() {
  const [stageIndex, setStageIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setStageIndex(2), 3000);
    return () => clearTimeout(timer);
  }, []);

  const activeStage = stages[stageIndex];
  const isDelivered = stageIndex === stages.length - 1;
  const progress = (stageIndex / (stages.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-primary">Track Your Order</h1>
          <p className="text-text-secondary mt-2">Your food is on the way!</p>
        </div>

        {/* Order Progress */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 h-0.5 bg-border">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="relative grid grid-cols-4 gap-1">
              {stages.map((stage, index) => {
                const isComplete = index < stageIndex || (index === stageIndex && isDelivered);
                const isActive = index === stageIndex && !isComplete;

                return (
                  <div key={stage.id} className="flex flex-col items-center gap-2 text-center">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center border-2 shadow-sm ${
                        isActive
                          ? 'bg-primary border-primary'
                          : isComplete
                            ? 'bg-success border-success'
                            : 'bg-white border-border'
                      }`}
                    >
                      <stage.icon size={22} className={isActive || isComplete ? 'text-white' : 'text-text-hint'} />
                    </div>
                    <span
                      className={`text-xs leading-tight px-1 ${
                        index === stageIndex ? 'font-semibold text-text-primary' : 'text-text-secondary'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Stage */}
        <div className="card p-8 text-center mb-8">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDelivered ? 'bg-success' : 'bg-primary'
            }`}
          >
            <activeStage.icon size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">{activeStage.title}</h2>
          <p className="text-text-secondary">{stageMessages[stageIndex]}</p>
        </div>

        {/* Order Details */}
        <div className="card p-6 mb-8">
          <h3 className="font-semibold text-text-primary mb-4">Order Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <ShoppingBag size={20} className="text-text-hint" />
              <div className="flex-1">
                <span className="font-medium text-text-primary">Luigi's Italian Trattoria</span>
                <p className="text-sm text-text-hint">Italian • 35-45 min delivery</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>Margherita Pizza × 2</span>
              <span>$29.98</span>
            </div>
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>Tiramisu × 1</span>
              <span>$7.99</span>
            </div>
          </div>
          <div className="border-t border-border pt-4 mt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">$41.32</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/home')}
            className="btn btn-outline"
          >
            <Home size={20} className="mr-2" />
            Browse more restaurants
          </button>
        </div>
      </div>
    </div>
  );
}