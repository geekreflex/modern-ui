import Intro from './intro/pages';
import GPT3 from './gpt/pages';
import Restaurant from './restaurant/pages';
import { Routes, Route } from 'react-router-dom';
import GoIntro from './intro/components/GoIntro';

function App() {
  return (
    <div>
      <GoIntro />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/gpt3" element={<GPT3 />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
