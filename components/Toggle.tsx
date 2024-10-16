const Toggle = ({ enabled, label, onChange }) => {
  return (
    <div className="flex items-center justify-center w-full self-end">
      <label htmlFor="toggle" className="flex items-center cursor-pointer py-2">
        <div className="relative">
          {/* Toggle Line */}
          <div className={`w-10 h-6 bg-gray-400 rounded-full shadow-inner ${enabled ? 'toggle-background' : ''}`}></div>
          {/* Toggle Circle */}
          <div className={`absolute w-6 h-6 bg-white rounded-full shadow toggle-circle transition-all duration-300 ease-in-out ${enabled ? 'translate-x-4' : ''}`} onClick={onChange}></div>
        </div>
        <span className="ml-3 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Toggle;