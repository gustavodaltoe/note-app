import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export function useNotes() {
  const context = useContext(NotesContext);
  return context;
}
