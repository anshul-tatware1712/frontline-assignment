import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

export default function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className={`${bgColor} rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
