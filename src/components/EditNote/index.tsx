import { useEffect, useRef } from 'react';
import { useNotes } from '../../hooks/useNotes';
import { CreateNote } from '../CreateNote';
import { Scrollbar } from '../Scrollbar';
import { Header } from './Header';
import { marked } from 'marked';
import * as S from './styles';

export function EditNote() {
  const notes = useNotes();
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const { current } = notes;
  const isNoteUntitled = current?.title === 'Untitled';

  useEffect(() => {
    if (!current) return;
    if (isNoteUntitled) {
      titleRef.current?.focus();
    }
  }, [current, isNoteUntitled]);

  if (!current) {
    return <CreateNote />;
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.value = e.target.value.replace(/\n/g, '');
    const value = e.target.value;
    notes.update({ ...current, title: value });
  }

  function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    notes.update({ ...current, content: e.target.value });
  }

  return (
    <S.Wrapper>
      <Header />
      <S.ScrollContainer>
        <S.Content>
          <S.TitleInput
            ref={titleRef}
            value={isNoteUntitled ? '' : current.title}
            onChange={handleTitleChange}
            placeholder={current.title}
          />
          {!notes.showAsHtml && (
            <S.ContentInput
              onChange={handleContentChange}
              placeholder="Start typing..."
              value={current.content}
            />
          )}
          {notes.showAsHtml && (
            <S.ContentAsHtml
              dangerouslySetInnerHTML={{
                __html: marked.parse(current.content),
              }}
            />
          )}
        </S.Content>
        <Scrollbar />
      </S.ScrollContainer>
    </S.Wrapper>
  );
}
