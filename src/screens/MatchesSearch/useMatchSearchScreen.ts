import { useMemo, useState } from 'react';
import { normalizeText } from '../../Utils/normalizeText';
import { matchesMock } from '../../mocks/matches';


export const useMatchSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMatches = useMemo(() => {
    const normalizedTerm = normalizeText(searchTerm.trim());

    return matchesMock.filter((match) => {
      const title = normalizeText(match.title);
      const city = normalizeText(match.city);
      return (
        match.available &&
        (title.includes(normalizedTerm) || city.includes(normalizedTerm))
      );
    });
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredMatches,
  };
};
