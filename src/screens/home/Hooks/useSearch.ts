import { useState, useMemo } from 'react';
import { useUser } from '../../../store/context/userContext';
import { matchesMock } from '../../../mocks/matches';
import { normalizeText } from '../../../Utils/normalizeText';


export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useUser();
  const filteredMatches = useMemo(() => {
    const term = normalizeText(searchTerm);

    return matchesMock.filter(match => {
      const title = normalizeText(match.title);
      const city = normalizeText(match.city);
      const userCity = normalizeText(user?.city ?? '');

      return (
        (title.includes(term) || city.includes(term)) &&
        (user?.city ? city === userCity : true)
      );
    });
  }, [searchTerm, user?.city]);

  const matchesNovato = matchesMock.filter((m) => m.level === 'novato');
  const matchesIntermedio = matchesMock.filter((m) => m.level === 'intermedio');
  const matchesAvanzado = matchesMock.filter((m) => m.level === 'avanzado');

  return {
    searchTerm,
    setSearchTerm,
    filteredMatches,
    matchesNovato,
    matchesIntermedio,
    matchesAvanzado,
  };
};
