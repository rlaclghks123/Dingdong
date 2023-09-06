import { useState, useEffect, RefObject } from 'react';

const useInfinityScroll = (targetRef: RefObject<HTMLDivElement | null>, callback: any) => {
  const [loading, setLoading] = useState(true);

  const getNextData = () => {
    setTimeout(() => {
      setLoading(true);
      callback();
    }, 1000);
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) getNextData();
      },

      { threshold: 0.5 }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer && observer.disconnect();
  }, [loading]);
  return { loading, setLoading };
};
export default useInfinityScroll;
