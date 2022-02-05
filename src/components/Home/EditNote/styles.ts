import { styled } from '../../../styles/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  margin: '3rem auto',
  maxWidth: '80rem',
  width: '100%',
});

const TextArea = styled('textarea', {
  background: 'transparent',
  marginTop: '2rem',
  fontSize: '1.6rem',
  width: '100%',
  height: '100%',
  resize: 'none',
});

export const TitleInput = styled(TextArea, {
  fontSize: '4rem',
  fontWeight: 'bolder',
  marginTop: '8rem',
});

export const ContentInput = styled(TextArea, {
  flex: 1,
});
