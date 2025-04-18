import { useMemo } from 'react';
import { useFilterStore } from '../../store/context/filterStore';
import { normalizeText } from '../../Utils/normalizeText';
import { matchesMock } from '../../mocks/matches';
import { useUserStore } from '../../store/context/userStore';


export const useMatchmakingScreen = () => {
  const user = useUserStore(state => state.user);
  const { city, setCity } = useFilterStore();

  const filteredMatches = useMemo(() => {
    const userLevel = user?.level;
    const term = normalizeText((city ?? '').trim());

    if (!userLevel) { return []; }

    return matchesMock.filter((match) => {
      const matchLevel = match.level;
      const matchCity = normalizeText(match.city.trim());

      const levelMatches = matchLevel === userLevel;
      const cityMatches = term ? matchCity.includes(term) : true;

      return levelMatches && cityMatches;
    });
  }, [user?.level, city]);

  return {
    filteredMatches,
    city,
    setCity,
  };
};
