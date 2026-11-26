import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Star, Clock } from 'lucide-react';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantCard from '../components/ui/RestaurantCard';

const categories = ['All', 'Italian', 'Japanese', 'American', 'Mexican', 'Indian', 'Healthy'];
const ratings = [4, 4.5, 5];
const deliveryTimes = ['Under 20 min', 'Under 30 min', 'Under 45 min', 'Under 60 min'];

export default function SearchFilter() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [search, setSearch] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [maxDelivery, setMaxDelivery] = useState('Under 60 min');
  const { restaurants, loading } = useRestaurants();

  useEffect(() => {
    setSearch(queryParam);
  }, [queryParam]);

  const maxMinutes = Number(maxDelivery.match(/\d+/)?.[0] ?? 60);

  const filtered = restaurants.filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchRating = r.rating >= minRating;
    const deliveryUpperBound = Number(r.deliveryTime.match(/-(\d+)/)?.[1] ?? 999);
    const matchDelivery = deliveryUpperBound <= maxMinutes;
    return matchSearch && matchCategory && matchRating && matchDelivery;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="spinner" style={{ width: 48, height: 48 }} />
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Search & Filter</h1>
            <p className="text-text-secondary">{filtered.length} results found</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-5">
              <h3 className="font-semibold text-text-primary mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-text-primary mb-4">Minimum Rating</h3>
              <div className="space-y-3">
                {ratings.map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`flex items-center gap-3 py-2 rounded-lg text-sm transition-colors ${
                      minRating === r
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    <Star size={18} className="text-accent" />
                    <span>{r} +</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-text-primary mb-4">Max Delivery Time</h3>
              <div className="space-y-2">
                {deliveryTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setMaxDelivery(time)}
                    className={`w-full text-left py-2 rounded-lg text-sm transition-colors ${
                      maxDelivery === time
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    <Clock size={18} className="mr-2" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="mb-6">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
                <input
                  type="search"
                  placeholder="Search restaurants, dishes..."
                  aria-label="Search restaurants"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-3 empty-state">
                  <div className="empty-state-icon">🔍</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No results found</h3>
                  <p className="text-text-secondary">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}