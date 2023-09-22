import { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Score({ value }: ScoreProps) {
  const color = useMemo(() => {
    if (value >= 4.5) {
      return '#305d02';
    } else if (value >= 4) {
      return '#5ba839';
    } else if (value >= 3.5) {
      return '#9acd32';
    } else if (value >= 3) {
      return '#cdd614';
    } else if (value >= 0) {
      return '#ffba00';
    }
    return '#22a958';
  }, [value]);

  const Rate = () => {
    if (value) {
      return (
        <>
          <span>{value}</span>

          <FontAwesomeIcon icon={faStar} size="sm" />
        </>
      );
    }
    return <span>جدید</span>;
  };

  return (
    <section
      className="restaurant_card__score flex items-center rounded"
      style={{ backgroundColor: `${color}14`, color }}>
      <Rate />
    </section>
  );
}

interface ScoreProps {
  value: number;
}
