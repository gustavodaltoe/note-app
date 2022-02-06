import { styled } from '../../styles/stitches.config';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 8;

export const Scrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: '$primary',
  transition: 'background 160ms ease-out',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const ScrollThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});
