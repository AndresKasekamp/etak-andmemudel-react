import EtakAppBar from './navbar/AppBar';
import { Outlet } from 'react-router-dom';

const NavBarWrapper = () => {
  return (
    <div>
      <EtakAppBar />
      <Outlet />
    </div>
  );
}

export default NavBarWrapper