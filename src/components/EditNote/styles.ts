import { styled } from '../../styles/stitches.config';
import TextareaAutosize from 'react-textarea-autosize';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { EDIT_NOTE_HEADER_HEIGHT } from './Header/styles';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const ScrollContainer = styled(ScrollAreaPrimitive.Root, {
  height: `calc(100vh - ${EDIT_NOTE_HEADER_HEIGHT})`,
  overflow: 'hidden',
});

export const Content = styled(ScrollAreaPrimitive.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  marginX: 'auto',
  padding: '1rem 0 5rem',
  maxWidth: '80rem',
  height: '100%',
});

const TextArea = styled(TextareaAutosize, {
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
  lineHeight: '2.4rem',
});
