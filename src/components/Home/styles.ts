import { styled } from '../../styles/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  minHeight: '100vh',
});

export const Sidebar = styled('div', {
  width: '30rem',
  borderRight: '1px solid $contrastPrimary',
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignContent: 'top',
  maxWidth: 1600,
  margin: 'auto',
  minHeight: '100vh',
});

export const Title = styled('h1', {
  textAlign: 'center',
  fontSize: '4rem',
  marginTop: '2rem',
});
