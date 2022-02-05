import { useNotes } from '../../../hooks/useNotes';
import { CreateNote } from '../CreateNote';

export function EditNote() {
  const notes = useNotes();
  const { current } = notes;

  if (!current) {
    return <CreateNote />;
  }

  return (
    <>
      <h1>{notes.current?.title}</h1>
    </>
  );
}
