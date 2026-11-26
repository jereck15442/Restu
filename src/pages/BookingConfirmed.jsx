import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star, Home } from 'lucide-react';

export default function BookingConfirmed() {
  const navigate = useNavigate();

  const reservation = {
    restaurant: 'Luigi\'s Italian Trattoria',
    date: 'Tomorrow, 7:00 PM',
    partySize: 4,
    address: '123 Main St, Downtown',
    confirmation: 'REST-2024-0892',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pt-16">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} className="text-white" />
        </div>

        <h1 className="text-3xl font-bold text-text-primary mb-4">Reservation Confirmed!</h1>
        <p className="text-text-secondary mb-10">Your table is booked. We can't wait to host you.</p>

        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-text-secondary">Restaurant</span>
            <span className="font-medium text-text-primary">{reservation.restaurant}</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-text-secondary">Date & Time</span>
            <span className="font-medium text-text-primary">{reservation.date}</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-text-secondary">Party Size</span>
            <span className="font-medium text-text-primary">{reservation.partySize} guests</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-text-secondary">Address</span>
            <span className="font-medium text-text-primary">{reservation.address}</span>
          </div>
          <div className="pt-4 border-t border-border">
            <span className="text-text-hint text-sm">Confirmation: #{reservation.confirmation}</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/home')}
            className="w-full btn btn-primary"
          >
            <Home size={20} className="mr-2" />
            Browse more restaurants
          </button>
          <button
            onClick={() => navigate('/rate-review')}
            className="w-full btn btn-outline"
          >
            <Star size={20} className="mr-2" />
            Rate your experience
          </button>
        </div>
      </div>
    </div>
  );
}