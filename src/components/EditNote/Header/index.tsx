import { useNotes } from '../../../hooks/useNotes';
import * as S from './styles';

export function Header() {
  const { current } = useNotes();

  if (!current) return null;

  return (
    <S.Header>
      <S.Title>{current.title}</S.Title>
    </S.Header>
  );
}
