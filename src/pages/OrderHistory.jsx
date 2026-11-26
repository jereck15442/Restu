export default function OrderHistory() {
  const orders = [
    {
      id: '#ORD-2024-0892',
      restaurant: 'Luigi\'s Italian Trattoria',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
      date: 'Nov 20, 2024',
      status: 'Delivered',
      total: 45.32,
      items: 3,
      statusColor: 'text-success',
    },
    {
      id: '#ORD-2024-0881',
      restaurant: 'Sakura Sushi',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
      date: 'Nov 18, 2024',
      status: 'Delivered',
      total: 32.50,
      items: 2,
      statusColor: 'text-success',
    },
    {
      id: '#ORD-2024-0870',
      restaurant: 'Burger Shack',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
      date: 'Nov 15, 2024',
      status: 'Cancelled',
      total: 0,
      items: 1,
      statusColor: 'text-error',
    },
    {
      id: '#ORD-2024-0855',
      restaurant: 'Taco Fiesta',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
      date: 'Nov 12, 2024',
      status: 'Delivered',
      total: 28.75,
      items: 4,
      statusColor: 'text-success',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16 pb-8">
      <div className="page-container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Order History</h1>
          <p className="text-text-secondary">{orders.length} orders</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="card p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={order.image} alt={order.restaurant} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <span className="font-medium text-text-primary">{order.restaurant}</span>
                  <p className="text-sm text-text-hint">{order.date} • {order.items} items</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`font-semibold text-text-primary block`}>${order.total.toFixed(2)}</span>
                <span className={`text-xs font-medium ${order.statusColor}`}>{order.status}</span>
                <span className="text-xs text-text-hint block mt-1">Order {order.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}