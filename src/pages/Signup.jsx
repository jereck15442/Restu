import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { error: err } = await signUp(email, password, name);
      if (err) {
        setError(err.message);
        setLoading(false);
      } else {
        navigate('/set-location');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during sign up');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center gap-2 justify-center mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <span className="text-xl font-bold text-primary">Restu</span>
          </Link>
          <h2 className="text-2xl font-bold text-text-primary">Create account</h2>
          <p className="text-text-secondary mt-2">Join Restu today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="form-label">Full name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input pl-10"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input pl-10"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input pl-10"
                required
              />
            </div>
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary btn-lg"
          >
            {loading ? <ArrowRight size={20} className="animate-spin" /> : 'Create account'}
          </button>
        </form>

        <p className="text-center text-text-secondary mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}