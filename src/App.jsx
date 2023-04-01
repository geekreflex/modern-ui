import Intro from './intro/pages';
import GPT3 from './gpt/pages';
import Restaurant from './restaurant/pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/gpt3" element={<GPT3 />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
