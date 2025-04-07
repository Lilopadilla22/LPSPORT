import { useState, useMemo } from 'react';
import { useUser } from '../../../store/context/userContext';
import { matchesMock } from '../../../mocks/matches';
import { normalizeText } from '../../../Utils/normalizeText';


export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useUser();

  const filteredMatches = useMemo(() => {
    const term = normalizeText(searchTerm).trim();

    return matchesMock.filter(match => {
      const title = normalizeText(match.title);
      const city = normalizeText(match.city);

      return title.includes(term) || city.includes(term);
    });
  }, [searchTerm]);

  const matchesRecomendados = useMemo(() => {
    const userLevel = user?.level;

    if (!userLevel) {return [];}

    return matchesMock.filter((match) => match.level === userLevel);
  }, [user?.level]);

  const matchesDisponibles = useMemo(() => {
    return matchesMock.filter((match) => match.available);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    filteredMatches,
    matchesRecomendados,
    matchesDisponibles,
  };
};
