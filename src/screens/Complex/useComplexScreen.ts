import { useState, useMemo } from 'react';
import { normalizeText } from '../../Utils/normalizeText';
import { complexesMock } from '../../mocks/complex';


export const useComplexScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComplexes = useMemo(() => {
    const term = normalizeText(searchTerm).trim();
    return complexesMock.filter((complex) => {
      const name = normalizeText(complex.name);
      const city = normalizeText(complex.city);

      return name.includes(term) || city.includes(term);
    });
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredComplexes,
  };
};
