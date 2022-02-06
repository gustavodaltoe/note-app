import { createContext, ReactNode, useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { v4 as uuidv4 } from 'uuid';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

type NotesProviderProps = {
  children: ReactNode;
};

export type NotesData = {
  items: Note[];
  current?: Note;
  create: () => Note;
  update: (note: Partial<Note>) => void;
  navigate: (id: string) => void;
  deleteById: (id: string) => void;
};
export const NotesContext = createContext<NotesData>({} as NotesData);

export function NotesProvider({ children }: NotesProviderProps) {
  const [current, setCurrent] = useState<Note>();
  const [notes, setNotes] = usePersistedState<Note[]>('notes', []);

  function create(): Note {
    const dateNow = new Date();
    const note: Note = {
      id: uuidv4(),
      title: 'Untitled',
      content: '',
      createdAt: dateNow,
      updatedAt: dateNow,
    };
    setNotes([...notes, note]);
    setCurrent(note);
    return note;
  }

  function navigate(id: string): void {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    setCurrent(note);
  }

  function update(note: Partial<Note>): void {
    const now = new Date();
    setCurrent((prevCurrent) => {
      if (!prevCurrent) return;
      const updatedNote = {
        ...prevCurrent,
        ...note,
        updatedAt: now,
      };
      setNotes((prevNotes) => {
        return prevNotes.map((prevNote) =>
          prevNote.id === prevCurrent.id ? updatedNote : prevNote,
        );
      });
      return updatedNote;
    });
  }

  function deleteById(id: string): void {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    if (current?.id === id) {
      setCurrent(undefined);
    }
  }

  return (
    <NotesContext.Provider
      value={{ items: notes, current, create, update, navigate, deleteById }}
    >
      {children}
    </NotesContext.Provider>
  );
}
