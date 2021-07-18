import { Link } from 'react-router-dom';


const Navbar = () => {
  const Logo = `☁   Cloud image`;

  return (
    <nav className="navbar">
      <h1 id="Logo"> {Logo} </h1>
      {/* <h1>Cloud image</h1> */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <a href="/favorite">Help</a>
        <Link to="/Home_CN">简体中文</Link> 

      </div>
    </nav>
  );
}
 
export default Navbar;