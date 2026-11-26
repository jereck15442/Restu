import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import Card from '../common/Card';

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <Card className="hover:shadow-md transition-shadow">
        <Card.Image src={restaurant.imageUrl} alt={restaurant.name} />
        <Card.Content>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-text-primary">{restaurant.name}</h3>
            <span className="badge badge-primary">{restaurant.category}</span>
          </div>
          <div className="flex items-center gap-1 mb-3 text-sm text-text-secondary">
            <Star size={14} className="text-accent" />
            <span>{restaurant.rating}</span>
            <span className="mx-1">•</span>
            <Clock size={14} />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-text-secondary">
            <MapPin size={14} />
            <span>{restaurant.address}</span>
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
}
