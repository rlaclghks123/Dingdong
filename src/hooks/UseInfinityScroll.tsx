import { useState, useEffect, RefObject } from 'react';

const UseInfinityScroll = (targetRef: RefObject<HTMLDivElement | null>, callback: any) => {
  const [loading, setLoading] = useState(true);

  const getNextData = () => {
    setTimeout(() => {
      setLoading(true);
      callback();
    }, 1500);
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) getNextData();
      },

      { threshold: 1 }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer && observer.disconnect();
  }, [loading]);
  return { loading, setLoading };
};
export default UseInfinityScroll;
