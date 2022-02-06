import { DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import { useNotes } from '../../../../hooks/useNotes';
import * as S from './styles';

export function OptionsDropdown() {
  const notes = useNotes();

  function handleDelete() {
    if (!notes.current) return;
    notes.deleteById(notes.current.id);
  }

  return (
    <S.DropdownMenu>
      <S.DropdownMenuTrigger asChild>
        <S.DropdownMenuButton>
          <DotsHorizontalIcon style={{ width: 22, height: 22 }} />
        </S.DropdownMenuButton>
      </S.DropdownMenuTrigger>
      <S.DropdownMenuContent sideOffset={2} alignOffset={0}>
        <S.DropdownItem onClick={handleDelete}>
          <TrashIcon style={{ marginRight: 2 }} />
          Delete
        </S.DropdownItem>
      </S.DropdownMenuContent>
    </S.DropdownMenu>
  );
}
