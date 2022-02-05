import * as S from './styles';
import { useNotes } from '../../../hooks/useNotes';

export function Sidebar() {
  const notes = useNotes();

  return (
    <S.Wrapper>
      <S.Title>My Notes</S.Title>
      <S.Separator />
      <S.NoteList>
        {notes.items.map((note) => (
          <S.NoteItem key={note.id}>{note.title}</S.NoteItem>
        ))}
      </S.NoteList>
    </S.Wrapper>
  );
}
