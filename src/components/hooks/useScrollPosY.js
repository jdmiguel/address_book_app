import { useLayoutEffect } from 'react';

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
