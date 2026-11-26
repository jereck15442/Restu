import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Bell } from 'lucide-react';

const publicPaths = ['/', '/login', '/signup', '/set-location', '/enable-notifications'];

export default function Navbar() {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isPublic = publicPaths.includes(location.pathname);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="page-container flex items-center justify-between h-16">
        <Link to="/home" className="flex items-center gap-2" aria-label="Restu home">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">Restu</span>
        </Link>

        <form onSubmit={handleSearch} role="search" className="hidden md:block">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants..."
              aria-label="Search restaurants"
              className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-border rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </form>

        <div className="flex items-center gap-1">
          <Link
            to="/search"
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Search restaurants"
          >
            <Search size={22} />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/order-tracking"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Track order"
            >
              <ShoppingCart size={22} />
            </Link>
            <Link
              to="/profile"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Profile"
            >
              <User size={22} />
            </Link>
          </div>

          {isPublic ? (
            location.pathname === '/login' ? (
              <Link
                to="/signup"
                className="ml-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Create account
              </Link>
            ) : (
              <Link
                to="/login"
                className="ml-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Sign in
              </Link>
            )
          ) : (
            <Link
              to="/push-notifications"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Notification settings"
            >
              <Bell size={22} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
