import { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Score({ value }: ScoreProps) {
  const color = useMemo(() => {
    if (value >= 4.5) {
      return { bg: '#3f7e0014', text: '#305d02' };
    } else if (value >= 4) {
      return { bg: '#5ba82914', text: '#5ba839' };
    } else if (value >= 3.5) {
      return { bg: '#9acd3214', text: '#9acd32' };
    } else if (value >= 3) {
      return { bg: '#cdd61414', text: '#cdd614' };
    } else if (value >= 0) {
      return { bg: '#ffba001', text: '#ffba00' };
    }
    return { bg: '#22a95814', text: '#22a958' };
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
      style={{ backgroundColor: color.bg, color: color.text }}>
      <Rate />
    </section>
  );
}

interface ScoreProps {
  value: number;
}
