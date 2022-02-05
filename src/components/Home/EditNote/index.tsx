import { useNotes } from '../../../hooks/useNotes';
import { CreateNote } from '../CreateNote';
import * as S from './styles';

export function EditNote() {
  const notes = useNotes();
  const { current } = notes;

  if (!current) {
    return <CreateNote />;
  }

  console.log(current);

  return (
    <>
      <S.TitleInput
        type="text"
        name="title"
        onChange={(val) => {
          notes.update({ ...current, title: val.target.value });
        }}
        value={current.title}
      />
    </>
  );
}
