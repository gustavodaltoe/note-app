import * as S from './styles';
import { useNotes } from '../../hooks/useNotes';
import { Scrollbar, ScrollThumb } from '../Scrollbar';

export function Sidebar() {
  const notes = useNotes();

  function handleCreateNoteClick() {
    notes.create();
  }

  function handleNoteClick(id: string) {
    notes.navigate(id);
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>My Notes</S.Title>
        <S.Separator />
        <S.NoteList>
          {notes.items.map((note) => (
            <S.NoteItem key={note.id} onClick={() => handleNoteClick(note.id)}>
              {note.title}
            </S.NoteItem>
          ))}
          <S.NewNoteButton onClick={handleCreateNoteClick}>
            + Add a note
          </S.NewNoteButton>
        </S.NoteList>
      </S.Content>
      <Scrollbar orientation="vertical">
        <ScrollThumb />
      </Scrollbar>
    </S.Wrapper>
  );
}
