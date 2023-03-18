// OTHER STUFF
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// IMPORT DER PAGES JS DATEIN
import Content_Page from './Pages/public/Content_Page';
import Dashboard from './Pages/private/Dashboard';
import Login from './Pages/public/Login';
import Main from './Pages/public/Main';
import SignUp from './Pages/public/SignUp';

// START CODE
function App() {
  return (<>
    <BrowserRouter basename='/react-cms'>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/show-content' element={<Content_Page />} />
          
          {/* Logged IN PAGES */}
          <Route path='/dashboard' element={<Dashboard />} />
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
