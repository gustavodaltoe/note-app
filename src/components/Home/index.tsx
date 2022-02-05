import { useNotes } from '../../hooks/useNotes';
import { CreateNote } from './CreateNote';
import * as S from './styles';

export function Home() {
  const notes = useNotes();

  return (
    <S.Wrapper>
      <S.Sidebar>
        {notes.items.map((note) => (
          <p key={note.id}>{note.title}</p>
        ))}
      </S.Sidebar>
      <S.Content>
        <S.Title>Notes App</S.Title>
        <CreateNote />
      </S.Content>
    </S.Wrapper>
  );
}
