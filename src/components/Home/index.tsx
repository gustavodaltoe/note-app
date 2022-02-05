import * as S from './styles';
import { CreateNote } from './CreateNote';
import { Sidebar } from './Sidebar';

export function Home() {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>
        <S.Title>Notes App</S.Title>
        <CreateNote />
      </S.Content>
    </S.Wrapper>
  );
}
