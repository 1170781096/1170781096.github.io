import { Link } from 'react-router-dom';


const NavbarCN = () => {
  const Logo = `☁   云图`;

  return (
    <nav className="navbar">
      <h1 id="Logo"> {Logo} </h1>
      {/* <h1>Cloud image</h1> */}
      <div className="links">
        <Link to="/Home_CN">首页</Link>
        <Link to="/explore">探索</Link>
        <a href="/favorite">帮助</a>
        <Link to="/">English</Link> 

      </div>
    </nav>
  );
}
 
export default NavbarCN;