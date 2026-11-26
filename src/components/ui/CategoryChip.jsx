export default function CategoryChip({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive
          ? 'bg-primary text-white'
          : 'bg-surface border border-border text-text-secondary hover:border-primary'
      }`}
    >
      {category}
    </button>
  );
}