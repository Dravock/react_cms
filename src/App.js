import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter basename='/react-cms'>
      <Routes>
          <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
