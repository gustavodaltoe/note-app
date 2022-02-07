import { DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import { useNotes } from '../../../../hooks/useNotes';
import dayjs from 'dayjs';
import * as S from './styles';
import { MenuButton } from '../styles';

export function OptionsDropdown() {
  const notes = useNotes();

  function handleDelete() {
    if (!notes.current) return;
    notes.deleteById(notes.current.id);
  }

  const updatedAt = dayjs(notes.current?.updatedAt);
  const wasUpdatedToday = updatedAt.isSame(new Date(), 'day');
  const updatedAtFormatted = wasUpdatedToday
    ? updatedAt.format('[Today at] h:mm A')
    : updatedAt.format('YYYY/MM/DD');

  return (
    <S.DropdownMenu>
      <S.DropdownMenuTrigger asChild>
        <MenuButton>
          <DotsHorizontalIcon />
        </MenuButton>
      </S.DropdownMenuTrigger>
      <S.DropdownMenuContent sideOffset={2} alignOffset={0}>
        <S.DropdownItem onClick={handleDelete}>
          <TrashIcon style={{ marginRight: 2 }} />
          Delete
        </S.DropdownItem>
        <S.DropdownMenuSeparator />
        <S.DropdownItem info={true}>
          Created: {dayjs(notes.current?.createdAt).format('YYYY/MM/DD')}
        </S.DropdownItem>
        <S.DropdownItem info={true}>
          Edited: {updatedAtFormatted}
        </S.DropdownItem>
      </S.DropdownMenuContent>
    </S.DropdownMenu>
  );
}
