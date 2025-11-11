import type { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  number: string;
  label: string;
}

export default function StatsCard({ icon, number, label }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
