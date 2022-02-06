import { useNotes } from '../../hooks/useNotes';
import { CreateNote } from '../CreateNote';
import * as S from './styles';

export function EditNote() {
  const notes = useNotes();
  const { current } = notes;
  if (!current) {
    return <CreateNote />;
  }
  const isNoteUntitled = current.title === 'Untitled';

  function handleTitleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.value = e.target.value.replace(/\n/g, '');
    const value = e.target.value;
    notes.update({ ...current, title: value });
  }

  function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    notes.update({ ...current, content: e.target.value });
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{current.title}</S.Title>
      </S.Header>
      <S.Content>
        <S.TitleInput
          value={isNoteUntitled ? '' : current.title}
          onChange={handleTitleChange}
          placeholder={current.title}
        />
        <S.ContentInput
          onChange={handleContentChange}
          placeholder="Start typing..."
          value={current.content}
        />
      </S.Content>
    </S.Wrapper>
  );
}
