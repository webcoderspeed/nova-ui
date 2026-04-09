import { createRoot } from 'react-dom/client';
import { Playground } from './Playground';
import '../css/index.css';

createRoot(document.getElementById('root') as HTMLElement).render(<Playground />);
