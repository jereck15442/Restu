export default function TimeSlotSelector({ slots, selected, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            selected === slot
              ? 'bg-primary border-primary text-white'
              : 'bg-surface border-border text-text-secondary hover:border-primary'
          }`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}