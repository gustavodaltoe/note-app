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
  fontSize: '1.6rem',
  width: '100%',
  height: '100%',
  resize: 'none',
});

export const TitleInput = styled(TextArea, {
  fontSize: '4rem',
  fontWeight: 'bolder',
  margin: '8rem 0 4rem',
});

export const ContentInput = styled(TextArea, {
  flex: 1,
  lineHeight: '2.4rem',
});

export const ContentAsHtml = styled('div', {
  gap: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '& :first-child': {
    marginTop: 0,
  },
  'ul, ol': {
    listStyle: 'revert',
    paddingInlineStart: '18px',
  },
  'ul input': {
    marginLeft: '-18px',
  },
  hr: {
    border: 'revert',
    borderColor: '$primaryContrast',
  },
  code: {
    padding: '.5rem 1rem',
    borderRadius: '.6rem',
    background: '#333',
    lineHeight: '3rem',
  },
  pre: {
    display: 'flex',
    code: {
      width: '100%',
      display: 'block',
    },
  },
  h1: {
    marginY: '2rem',
  },
  h2: {
    marginY: '1.5rem',
  },
  h3: {
    marginY: '1.2rem',
  },
});
