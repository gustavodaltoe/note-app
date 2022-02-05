import { createContext, ReactNode } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { v4 as uuidv4 } from 'uuid';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
type CreateNoteParams = Pick<Note, 'title' | 'content'>;

type NotesProviderProps = {
  children: ReactNode;
};

export type NotesData = {
  items: Note[];
  create: (params: CreateNoteParams) => Note;
};
export const NotesContext = createContext<NotesData>({} as NotesData);

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = usePersistedState<Note[]>('notes', []);

  function create({ title, content }: CreateNoteParams): Note {
    const dateNow = new Date();
    const note: Note = {
      id: uuidv4(),
      title,
      content,
      createdAt: dateNow,
      updatedAt: dateNow,
    };
    setNotes([...notes, note]);
    return note;
  }

  return (
    <NotesContext.Provider value={{ items: notes, create }}>
      {children}
    </NotesContext.Provider>
  );
}
