import { styled } from '../../styles/stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export const Wrapper = styled(ScrollAreaPrimitive.Root, {
  width: '30rem',
  height: '100vh',
  borderRight: '1px solid $contrastPrimary',
  overflow: 'hidden',
});

export const Content = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
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
  maxWidth: '26rem',
  margin: 'auto',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const NewNoteButton = styled(NoteItem, {
  width: 'fit-content',
  borderRadius: '.4rem',
  padding: '0 2rem',
  margin: '1rem auto',
  background: '$secondary',
});

export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '&[data-orientation=horizontal]': { height: 1, width: '80%', margin: 'auto' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
