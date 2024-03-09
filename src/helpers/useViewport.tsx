import { useMediaQuery } from 'react-responsive';

export const useViewport = () => {
  const isMobileSize = useMediaQuery({ query: '(max-width: 576px)' });
  const isTabletSize = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletLaptopSize = useMediaQuery({ query: '(max-width: 992px)' });
  const isLaptopSize = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1200px)' });

  return {
    isTabletSize,
    isMobileSize,
    isTabletLaptopSize,
    isLaptopSize,
    isDesktopSize,
  };
};
