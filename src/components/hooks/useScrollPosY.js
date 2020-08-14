import { useLayoutEffect } from 'react';

/**
 * Retrieve scroll vertical position
 * @hook useScrollPosY
 * @param {function} effect - function to execute each time that the user is scrolling
 * by receiving the current scroll vertical position
 * @param {array} deps - array of dependecies that are bounded to this hook
 */

const useScrollPosY = (effect, deps) => {
  useLayoutEffect(() => {
    const handleScroll = () => {
      effect({ posY: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [effect, deps]);
};

export default useScrollPosY;
