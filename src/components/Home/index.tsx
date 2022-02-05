import { CreateNote } from './CreateNote';
import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <S.Sidebar />
      <S.Content>
        <S.Title>Notes App</S.Title>
        <CreateNote />
      </S.Content>
    </S.Wrapper>
  );
}
