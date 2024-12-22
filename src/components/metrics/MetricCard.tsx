import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <div className="text-center p-4">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
}