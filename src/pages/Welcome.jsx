import { Link, useNavigate } from 'react-router-dom';
import { Star, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function Welcome() {
  const navigate = useNavigate();

  const features = [
    { icon: Star, label: 'Top-rated restaurants' },
    { icon: CheckCircle, label: 'Fast delivery tracking' },
    { icon: MapPin, label: 'Set your location' },
    { icon: Clock, label: 'Real-time order updates' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8">
        <span className="text-white text-3xl font-bold">R</span>
      </div>
      <h1 className="text-4xl font-bold text-text-primary mb-4 text-center">Welcome to Restu</h1>
      <p className="text-text-secondary text-lg text-center mb-10 max-w-md">
        Discover the best restaurants near you. Order food, reserve tables, and track deliveries in real time.
      </p>

      <div className="space-y-4 mb-12 max-w-md w-full">
        {features.map((feature) => (
          <div key={feature.label} className="flex items-center gap-3 text-text-secondary">
            <feature.icon size={20} className="text-primary" />
            <span>{feature.label}</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md space-y-3">
        <button
          onClick={() => navigate('/home')}
          className="w-full btn btn-primary btn-lg"
        >
          Browse restaurants
        </button>
        <Link to="/login" className="w-full btn btn-ghost btn-lg">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
}
