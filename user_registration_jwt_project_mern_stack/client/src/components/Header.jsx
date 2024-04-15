import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Header.css";

function Header({ title }) {
  return (
    <div>
        <div>
            
        </div>
    <div className='header d-flex justify-content-around align-items-center flex-wrap'>
      <div className=''>
        <Link to="/" className='text-dark text-decoration-none fs-3'>{title}</Link>
      </div>

      <div className='d-flex align-items-center justify-content-between'>
        <Link to="/home"    className='text-dark ms-2 me-2'>Home</Link>
        <Link to="/about"   className='text-dark ms-2 me-2'>About</Link>
        <Link to="/contact" className='text-dark ms-2 me-2'>Contact</Link>
        <Link to="/user" className='text-dark ms-2 me-2'>User-Profile</Link>
        <Link to="/users" className='text-dark ms-2 me-2'>All Users</Link>
      </div>

      <div>
        <Link to="/login"    className='text-dark ms-2 me-2'>Login</Link>
        <Link to="/register" className='text-dark ms-2 me-2'>Signup</Link>
      </div>
    </div>
    </div>

  );
}

// Set default props
Header.defaultProps = {
  title: "Ecoders"
};

// Set prop types
Header.propTypes = {
  title: PropTypes.string
};

export default Header;
