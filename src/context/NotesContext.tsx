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
  showAsHtml: boolean;
  create: () => Note;
  update: (note: Partial<Note>) => void;
  navigate: (id: string) => void;
  deleteById: (id: string) => void;
  toggleShowAsHtml: () => void;
};
export const NotesContext = createContext<NotesData>({} as NotesData);

const UNTITLED_NOTE_TITLE = 'Untitled';

export function NotesProvider({ children }: NotesProviderProps) {
  const [current, setCurrent] = useState<Note>();
  const [showAsHtml, setShowAsHtml] = useState(false);
  const [notes, setNotes] = usePersistedState<Note[]>('notes', []);

  function create(): Note {
    const dateNow = new Date();
    const note: Note = {
      id: uuidv4(),
      title: UNTITLED_NOTE_TITLE,
      content: '',
      createdAt: dateNow,
      updatedAt: dateNow,
    };
    setNotes([...notes, note]);
    setCurrent(note);
    setShowAsHtml(false);
    return note;
  }

  function navigate(id: string): void {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    setShowAsHtml(false);
    setCurrent(note);
  }

  function update(note: Partial<Note>): void {
    const now = new Date();
    if (!note.title?.trim().length) {
      note.title = UNTITLED_NOTE_TITLE;
    }
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

  function toggleShowAsHtml(): void {
    setShowAsHtml(!showAsHtml);
  }

  return (
    <NotesContext.Provider
      value={{
        items: notes,
        current,
        showAsHtml,
        create,
        update,
        navigate,
        deleteById,
        toggleShowAsHtml,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
