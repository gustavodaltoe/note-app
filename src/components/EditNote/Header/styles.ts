import { styled } from '../../../styles/stitches.config';

export const EDIT_NOTE_HEADER_HEIGHT = '4.2rem';

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  height: EDIT_NOTE_HEADER_HEIGHT,
});

export const Title = styled('h4', {
  fontSize: '1.8rem',
  fontWeight: 'normal',
  maxWidth: '26rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
