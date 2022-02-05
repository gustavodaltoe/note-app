import { styled } from '../../../styles/stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Wrapper = styled('div', {
  width: '30rem',
  borderRight: '1px solid $contrastPrimary',
});

export const Title = styled('h3', {
  textAlign: 'center',
  fontSize: '2rem',
  marginY: '2rem',
});

export const NoteList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
});

export const NoteItem = styled('button', {
  textAlign: 'center',
  width: '100%',
  height: '4rem',
  background: 'transparent',
});

export const NewNoteButton = styled(NoteItem, {
  width: 'fit-content',
  borderRadius: '.4rem',
  padding: '0 2rem',
  margin: 'auto',
  background: '$secondary',
});

export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '&[data-orientation=horizontal]': { height: 1, width: '80%', margin: 'auto' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
