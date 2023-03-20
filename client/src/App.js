// OTHER STUFF
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// IMPORT DER PAGES JS DATEIN
import Content_Page from './Pages/public/Content_Page';
import Dashboard from './Pages/private/Dashboard';
import Login from './Pages/public/Login';
import Main from './Pages/public/Main';
import SignUp from './Pages/public/SignUp';
import AboutUs from './Pages/public/AboutUs';
import Services from './Pages/public/Services';
import Pricing from './Pages/public/Pricing';
import Contact_Us from './Pages/public/Contact_Us';


// START CODE
function App() {
return (
  <>
    <BrowserRouter basename='/react-cms'>
      <Routes>
          {/* PUBLIC PAGES */}
          <Route path='/' element={<Main />} />
          <Route path='/show-content' element={<Content_Page />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact-us' element={<Contact_Us />} />
          
          

          {/* NAVBAR LINKS */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          
          
          {/* Private Pages */}
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>)}

export default App;
