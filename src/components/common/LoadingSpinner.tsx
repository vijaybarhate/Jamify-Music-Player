import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-brand/30 border-t-brand rounded-full"
        />
      </div>
    </div>
  );
};

export const SkeletonCard: React.FC = () => (
  <div className="p-3 rounded-lg">
    <div className="aspect-square bg-surface-light rounded-lg mb-3 animate-pulse" />
    <div className="space-y-2">
      <div className="h-4 bg-surface-light w-3/4 rounded" />
      <div className="h-3 bg-surface-light w-1/2 rounded" />
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default LoadingSpinner;