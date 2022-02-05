import './styles/global.ts';
import { Home } from './components/Home';
import { NotesProvider } from './context/NotesContext';

export function App() {
  return (
    <NotesProvider>
      <Home />
    </NotesProvider>
  );
}
