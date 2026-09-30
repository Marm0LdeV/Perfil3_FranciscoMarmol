import { useState, useEffect } from 'react';

// Custom Hook para el consumo de la API mediante promesas (async/await y fetch)
export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al conectar con la API');
      }
      const result = await response.json();
      
      // Adaptamos los datos si vienen dentro de 'items' (como en Dragon Ball) o directamente como array
      const items = result.items || result.results || (Array.isArray(result) ? result : []);
      setData(items);
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
