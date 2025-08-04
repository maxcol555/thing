import React from 'react';

interface ActionPlanCardProps {
  number: string;
  title: string;
  description: string;
}

const ActionPlanCard: React.FC<ActionPlanCardProps> = ({ number, title, description }) => {
  const colors = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-teal-500',
      'from-yellow-400 to-orange-500',
      'from-pink-400 to-red-500'
  ];
  const colorClass = colors[(parseInt(number) - 1) % colors.length];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 group">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} text-white font-bold text-xl shadow-md transition-transform duration-300 group-hover:scale-110`}>
          {number}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mt-1 text-gray-500 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActionPlanCard;