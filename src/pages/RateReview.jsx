import { useState } from 'react';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function RateReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const restaurant = {
    name: 'Luigi\'s Italian Trattoria',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
  };

  const stars = [5, 4, 3, 2, 1];

  const submitReview = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 pt-16">
        <div className="w-full max-w-md text-center">
          <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Thank you!</h1>
          <p className="text-text-secondary mb-10">Your review helps others discover great restaurants.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full btn btn-outline"
          >
            <ArrowRight size={20} className="mr-2" />
            Rate another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container max-w-lg">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Rate {restaurant.name}</h1>
              <p className="text-text-secondary">How was your experience?</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {stars.map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`w-10 h-10 flex items-center justify-center text-2xl transition-colors ${
                  rating >= star ? 'text-accent' : 'text-text-hint hover:text-accent'
                }`}
              >
                <Star size={24} />
              </button>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="form-group">
              <label className="form-label">Write a review</label>
              <textarea
                placeholder="Share your thoughts about the food, service, and atmosphere..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="form-input p-4 min-h-[150px] resize-none"
              />
            </div>

            <div className="form-group">
              <label className="form-label">What did you order?</label>
              <input
                type="text"
                placeholder="e.g., Margherita Pizza, Tiramisu"
                className="form-input"
              />
            </div>

            <button
              onClick={submitReview}
              disabled={rating === 0}
              className={`w-full btn btn-lg ${rating > 0 ? 'btn-primary' : 'btn-outline'}`}
            >
              {rating > 0 ? <ArrowRight size={20} className="mr-2" /> : ''}
              Submit review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}