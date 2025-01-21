import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header className="header">
      <h2 className="name">Tanner Flake</h2>
      <Navigation />
    </header>
  );
}

export default Header;
