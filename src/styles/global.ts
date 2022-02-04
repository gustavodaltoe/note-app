import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    outline: 'none',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    transition: 'background-color 0.25s ease 0s',
    background: '#E5E5E5',
  },
  'ul, ol': {
    listStyle: 'none',
  },
  'body, input, textarea, button': {
    font: "400 1.6rem 'Roboto', sans-serif",
  },
  button: {
    cursor: 'pointer',
  },
  img: {
    display: 'block',
  },
});

globalStyles();
