import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Content_Page from './Pages/Content_Page';
import Login from './Pages/Login';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter basename='/react-cms'>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/show-content' element={<Content_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
