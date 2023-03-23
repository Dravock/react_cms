// IMPORTS FOR WEBSITE DESIGN
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FooterElement from './components/Footer_component/Footer_element'
import HeroBanner from './components/HeroBanner/HeroBanner';
import background from './includes/img/jpeg/AdobeStock_569605271.jpeg'

// IMPORT DER PAGES JS DATEIN
import ContentPage from './Pages/public/Content_Page';
import Dashboard from './Pages/private/Dashboard';
import Login from './Pages/public/Login';
import Main from './Pages/public/Main';
import SignUp from './Pages/public/SignUp';
import AboutUs from './Pages/public/AboutUs';
import Services from './Pages/public/Services';
import Pricing from './Pages/public/Pricing';
import ContactUs from './Pages/public/Contact_Us';




// START CODE
function App() {
return (
  <>
    <BrowserRouter basename='/react-cms'>
      <Header />
      <HeroBanner backgroundURL={background} height={600}/>
      <FooterElement />





      {/* REACT ROUTER ROUTES */}
      <Routes>
          {/* PUBLIC PAGES */}
          <Route path='/' element={<Main />} />
          <Route path='/show-content' element={<ContentPage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact-us' element={<ContactUs />} />
          
          

          {/* NAVBAR LINKS */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          
          
          {/* Private Pages */}
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>)}

export default App;
