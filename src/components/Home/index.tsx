import * as S from './styles';
import { Sidebar } from '../Sidebar';
import { EditNote } from '../EditNote';

export function Home() {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>
        <EditNote />
      </S.Content>
    </S.Wrapper>
  );
}
