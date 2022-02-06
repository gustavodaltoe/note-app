import { useNotes } from '../../hooks/useNotes';
import { CreateNote } from '../CreateNote';
import * as S from './styles';

export function EditNote() {
  const notes = useNotes();
  const { current } = notes;

  if (!current) {
    return <CreateNote />;
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{current.title}</S.Title>
      </S.Header>
      <S.Content>
        <S.TitleInput
          value={current.title}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/\n/g, '');
            const value = e.target.value;
            notes.update({ ...current, title: value });
          }}
        />
        <S.ContentInput
          onChange={(e) => {
            notes.update({ ...current, content: e.target.value });
          }}
          placeholder="Start typing..."
          value={current.content}
        />
      </S.Content>
    </S.Wrapper>
  );
}
