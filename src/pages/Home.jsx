import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantCard from '../components/ui/RestaurantCard';
import CategoryChip from '../components/ui/CategoryChip';

const categories = ['All', 'Italian', 'Japanese', 'American', 'Mexican', 'Indian', 'Healthy'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurants, loading } = useRestaurants();
  const navigate = useNavigate();

  const filtered = selectedCategory === 'All'
    ? restaurants
    : restaurants.filter(r => r.category === selectedCategory);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="spinner" style={{ width: 48, height: 48 }} />
          <p className="text-text-secondary">Loading restaurants...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Find great food</h1>
            <p className="text-text-secondary mt-1">What are you craving today?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">U</div>
          </div>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSearch} role="search" className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
            <input
              type="search"
              placeholder="Search restaurants, dishes..."
              aria-label="Search restaurants and dishes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10"
            />
          </form>
        </div>

        <div className="overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex gap-3">
            {categories.map((cat) => (
              <CategoryChip
                key={cat}
                category={cat}
                isActive={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">No restaurants found</h3>
              <p className="text-text-secondary">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}