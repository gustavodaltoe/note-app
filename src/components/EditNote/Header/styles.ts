import { styled } from '../../../styles/stitches.config';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const EDIT_NOTE_HEADER_HEIGHT = '5rem';

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  height: EDIT_NOTE_HEADER_HEIGHT,
});

export const Title = styled('h4', {
  fontSize: '1.8rem',
  fontWeight: 'normal',
  maxWidth: '30rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const Menu = styled('nav', {
  display: 'flex',
});

export const MenuButton = styled('button', {
  borderRadius: '1rem',
  width: '4rem',
  height: '3rem',
  background: 'transparent',
  transition: '.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '$secondary',
  },
  '& svg': {
    width: 22,
    height: 22,
  },
});

export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: '$primary',
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {
  background: 'transparent',
});
