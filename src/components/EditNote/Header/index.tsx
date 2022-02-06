import { useNotes } from '../../../hooks/useNotes';
import { OptionsDropdown } from './OptionsDropdown';
import * as S from './styles';

export function Header() {
  const notes = useNotes();
  const { current } = notes;

  if (!current) return null;

  return (
    <S.Header>
      <S.Title>{current.title}</S.Title>
      <OptionsDropdown />
    </S.Header>
  );
}
