import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isEnglish, setIsEnglish] = useState(true);

    const handleToggle = () => {
      setIsEnglish(!isEnglish);
    };
  return (<>
  
  <nav className="navbar bg-body-tertiary shadow mb-3 sticky-top ">
  <div className="container-fluid d-flex justify-content-between">
    <Link to={"/"}
          className="text-decoration-none text-body sub-heading  border-0" >
            Multiply </Link>
            <Link to={"/guide"}
          className="text-decoration-none text-body body-font  border-0" >
            Guide </Link>
            <Link to={"/calculator"}
          className="text-decoration-none text-body body-font  border-0" >
            Calculator </Link>
            <Link to={"/forum"}
          className="text-decoration-none text-body body-font  border-0" >
            Forum </Link>
            <Link to={"/about-us"}
          className="text-decoration-none text-body body-font  border-0" >
            About Us </Link>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
     
      </form>
      <div className='d-flex align-items-center gap-3 sub-body-font'>
      <label className="form-check-label " style={{fontSize:"1.2rem"}} htmlFor="flexSwitchCheckChecked">
        English
      </label>
      <div className="form-check form-switch sub-heading">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isEnglish}
          onChange={handleToggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
         Hindi
        </label>
      </div>
      </div>
      <Link to="/login">
       <button type="button" className="btn btn-warning">Login</button>
       </Link>
     
    </div>
    </nav>


</>
  );
}

export default Header;
