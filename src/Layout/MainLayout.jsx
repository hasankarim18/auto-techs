
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
          <Navbar />
          <Outlet />  
          <Footer />
        </>
    );
};

export default MainLayout;