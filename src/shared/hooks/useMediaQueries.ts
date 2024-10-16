import {useMediaQuery} from './useMediaQuery';

export function useMediaQueries(): {
  md: boolean;
  sm: boolean;
} {
  const sm = useMediaQuery('(width < 768px)');
  const md = useMediaQuery('(width < 1024px)');

  return {md, sm};
}
