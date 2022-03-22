import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AmisRender from './components/AmisRender';
import './App.css';

const Hello = () => {
  return (
    <div>
      <AmisRender></AmisRender>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
