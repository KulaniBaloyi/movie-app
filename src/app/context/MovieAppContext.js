'use client'
import { createContext, useContext, useState } from 'react';

export const MovieAppContext = createContext({});

export function useMovieApp() {
  return useContext(MovieAppContext);
}

export default function MovieAppProvider({ children }) {
  const [page,setPage] = useState(1)
  return (
    <MovieAppContext.Provider value={{page,setPage}}>
      {children}
    </MovieAppContext.Provider>
  );
}
