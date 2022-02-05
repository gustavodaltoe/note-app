import { styled } from '../../../styles/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flex: 1,
  marginTop: '-4.8rem', // title height
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Button = styled('button', {
  width: '20rem',
  height: '4.8rem',
  fontSize: '1.6rem',
  border: 'none',
  borderRadius: '0.5rem',
  backgroundColor: '$secondary',
  color: '$contrastSecondary',
  fontWeight: 'bold',
  marginTop: '2rem',
});
