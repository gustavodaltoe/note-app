import { styled } from '../../../styles/stitches.config';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

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
  maxWidth: '26rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '#000',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  cursor: 'pointer',

  '&:focus': {
    backgroundColor: '$secondary',
    color: '$secondaryContrast',
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuButton = styled('button', {
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
});
export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});
