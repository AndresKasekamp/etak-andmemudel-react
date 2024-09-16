import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const HomeLink = () => {
  return (
    <Link to="/">
      <HomeIcon fontSize='large' sx={{ color: 'white' }} />
    </Link>
  );
};

export default HomeLink;