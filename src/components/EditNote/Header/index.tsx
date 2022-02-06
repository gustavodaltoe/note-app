import { useNotes } from '../../../hooks/useNotes';
import { DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import * as S from './styles';

export function Header() {
  const notes = useNotes();
  const { current } = notes;

  function handleDelete() {
    if (!current) return;
    notes.deleteById(current.id);
  }

  if (!current) return null;

  return (
    <S.Header>
      <S.Title>{current.title}</S.Title>
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
    </S.Header>
  );
}
