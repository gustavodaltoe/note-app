import { useNotes } from '../../../hooks/useNotes';
import { OptionsDropdown } from './OptionsDropdown';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import * as S from './styles';

export function Header() {
  const notes = useNotes();
  const { current } = notes;

  function handleToggleShowAsHtml() {
    notes.toggleShowAsHtml();
  }

  if (!current) return null;

  return (
    <S.Header>
      <S.Title>{current.title}</S.Title>
      <S.Menu>
        <S.Tooltip>
          <S.TooltipTrigger>
            <S.MenuButton onClick={handleToggleShowAsHtml}>
              {notes.showAsHtml ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </S.MenuButton>
          </S.TooltipTrigger>
          <S.TooltipContent sideOffset={5}>
            {notes.showAsHtml ? 'Show as MD' : 'Show as HTML'}
            <S.TooltipArrow />
          </S.TooltipContent>
        </S.Tooltip>
        <OptionsDropdown />
      </S.Menu>
    </S.Header>
  );
}
