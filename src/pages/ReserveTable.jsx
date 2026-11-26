import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, User, MapPin, ArrowRight } from 'lucide-react';
import TimeSlotSelector from '../components/ui/TimeSlotSelector';

export default function ReserveTable() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('2');

  const slots = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time) return;
    navigate('/booking-confirmed');
  };

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-light rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Calendar size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary">Reserve a Table</h1>
          <p className="text-text-secondary mt-2">Pick your date, time, and party size</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="space-y-3">
            <label className="form-label">Time</label>
            <TimeSlotSelector slots={slots} selected={time} onSelect={setTime} />
          </div>

          <div className="space-y-3">
            <label className="form-label">Party size</label>
            <div className="flex gap-3">
              {[2, 4, 6, 8].map((size) => (
                <button
                  key={size}
                  onClick={() => setPartySize(String(size))}
                  className={`flex-1 py-4 rounded-xl border text-sm font-medium transition-all ${
                    partySize === String(size)
                      ? 'bg-primary border-primary text-white'
                      : 'bg-surface border-border text-text-secondary hover:border-primary'
                  }`}
                >
                  {size} {size === 2 ? 'guest' : 'guests'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <label className="form-label">Special requests (optional)</label>
            <textarea
              placeholder="e.g., window seat, high chair..."
              className="w-full form-input p-4 min-h-[120px] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!time}
            className="w-full btn btn-primary btn-lg"
          >
            <ArrowRight size={20} className="mr-2" />
            Confirm reservation
          </button>
        </form>
      </div>
    </div>
  );
}