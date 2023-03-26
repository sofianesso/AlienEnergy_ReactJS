import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Countdown() {
  const history = useHistory();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      history.push('/'); // Replace with your target page
    }

    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div>
      <p>You will be redirected in {count} seconds.</p>
    </div>
  );
}

export default Countdown;
