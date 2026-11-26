import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ArrowRight } from 'lucide-react';

export default function SetLocation() {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const mockSuggestions = [
      '123 Main St, Downtown',
      '456 Oak Ave, Midtown',
      '789 Pine St, Uptown',
    ];
    setSuggestions(mockSuggestions);
  };

  const selectLocation = (addr) => {
    setAddress(addr);
    setSuggestions([]);
  };

  const continueToNext = () => {
    navigate('/enable-notifications');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MapPin size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Set your location</h2>
          <p className="text-text-secondary mt-2">Where would you like to order from?</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="form-group relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input pl-10"
              required
            />
          </div>

          <button type="submit" className="w-full btn btn-primary">
            <Search size={20} className="mr-2" />
            Search area
          </button>
        </form>

        {suggestions.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold text-text-primary mb-3">Nearby areas</p>
            <div className="space-y-2">
              {suggestions.map((addr, i) => (
                <button
                  key={i}
                  onClick={() => selectLocation(addr)}
                  className="w-full flex items-center justify-between p-3 bg-surface border border-border rounded-lg text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-text-primary">{addr}</span>
                  <ArrowRight size={16} className="text-text-hint" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-text-secondary">Using current location?</p>
          <button onClick={continueToNext} className="text-primary font-semibold hover:underline mt-2 block">
            Continue with detected location
          </button>
        </div>
      </div>
    </div>
  );
}