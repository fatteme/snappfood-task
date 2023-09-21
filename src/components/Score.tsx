import { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Score({ value }: { value: number }) {
  const color = useMemo(() => {
    if (value >= 4) {
      return { bg: '#00ff00', text: '#1d6e2d' };
    } else if (value >= 2) {
      return { bg: '#ffff00', text: '#918f06' };
    } else {
      return { bg: '#ff0000', text: '#910d06' };
    }
  }, [value]);

  return (
    <section
      className="flex items-center p-1 rounded"
      style={{ backgroundColor: color.bg, color: color.text }}>
      <FontAwesomeIcon icon={faStar} />
      <span className="pl-1">{value}</span>
    </section>
  );
}
