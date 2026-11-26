import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';

// Pages
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SetLocation from './pages/SetLocation';
import EnableNotifications from './pages/EnableNotifications';
import Home from './pages/Home';
import SearchFilter from './pages/SearchFilter';
import RestaurantDetail from './pages/RestaurantDetail';
import ReserveTable from './pages/ReserveTable';
import BookingConfirmed from './pages/BookingConfirmed';
import Checkout from './pages/Checkout';
import PaymentMethod from './pages/PaymentMethod';
import OrderPlaced from './pages/OrderPlaced';
import OrderTracking from './pages/OrderTracking';
import PushNotifications from './pages/PushNotifications';
import RateReview from './pages/RateReview';
import UserProfile from './pages/UserProfile';
import OrderHistory from './pages/OrderHistory';

// Components
import Navbar from './components/layout/Navbar';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Auth / Onboarding */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/set-location" element={<SetLocation />} />
              <Route path="/enable-notifications" element={<EnableNotifications />} />

              {/* Core App */}
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<SearchFilter />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />

              {/* Order / Reservation Flow */}
              <Route path="/reserve/:id" element={<ReserveTable />} />
              <Route path="/booking-confirmed" element={<BookingConfirmed />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<PaymentMethod />} />
              <Route path="/order-placed" element={<OrderPlaced />} />
              <Route path="/order-tracking" element={<OrderTracking />} />

              {/* Profile & Settings */}
              <Route path="/push-notifications" element={<PushNotifications />} />
              <Route path="/rate-review" element={<RateReview />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/order-history" element={<OrderHistory />} />

              {/* Redirects */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;