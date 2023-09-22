import { useMemo } from 'react';

import './SkeletonLoader.scss';

export default function SkeletonLoader({ isLoading }: SkeletonLoaderProps) {
  const containerClassName = useMemo(
    () => (isLoading ? 'skeleton_loader' : 'skeleton_loader--hidden'),
    [isLoading]
  );

  return (
    <section className={`${containerClassName} shadow-lg rounded-md m-4`}>
      <div className="skeleton_loader__image"></div>

      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <h2 className="skeleton_loader__header m-0"></h2>

          <span className="skeleton_loader__space"></span>
        </div>

        <p className="skeleton_loader__text"></p>
      </div>
    </section>
  );
}

interface SkeletonLoaderProps {
  isLoading: boolean;
}
