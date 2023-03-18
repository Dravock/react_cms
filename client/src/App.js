// OTHER STUFF
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// IMPORT DER PAGES JS DATEIN
import Content_Page from './Pages/Content_Page';
import Login from './Pages/Login';
import Main from './Pages/Main';
import SignUp from './Pages/SignUp';

// START CODE
function App() {
  return (<>
    <BrowserRouter basename='/react-cms'>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/show-content' element={<Content_Page />} />
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
