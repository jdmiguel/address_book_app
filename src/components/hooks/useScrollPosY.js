import { useLayoutEffect } from 'react';

/**
 * Retrieve scroll vertical position
 * @hook useScrollPosY
 * @param {function} effect - function to execute each time that the user is scrolling
 * by receiving the current scroll vertical position
 * @param {array} deps - array of dependecies that are bounded to this hook
 * @param {number} delay - delay to enhance performance
 */

const useScrollPosY = (effect, deps, delay) => {
  useLayoutEffect(() => {
    let throttleTimeout = null;

    const callBack = () => {
      effect({ posY: window.scrollY });
      throttleTimeout = null;
    };

    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, delay);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, [effect, deps]);
};

export default useScrollPosY;
