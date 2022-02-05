import * as S from './styles';
import { useNotes } from '../../../hooks/useNotes';

export function Sidebar() {
  const notes = useNotes();

  function handleCreateNoteClick() {
    notes.create();
  }

  return (
    <S.Wrapper>
      <S.Title>My Notes</S.Title>
      <S.Separator />
      <S.NoteList>
        {notes.items.map((note) => (
          <S.NoteItem key={note.id}>{note.title}</S.NoteItem>
        ))}
        <S.NewNoteButton onClick={handleCreateNoteClick}>
          + Add a note
        </S.NewNoteButton>
      </S.NoteList>
    </S.Wrapper>
  );
}
