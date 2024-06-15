import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/languageContext';
import data from '../../data';

const Header = () => {
  const {language, setLanguage} = useLanguage()
  // const headData = data[]
  console.log(language)
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(()=>{
      if(!isEnglish) setLanguage('en')
        else setLanguage('hi')
    },[isEnglish])

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
            {data[7]['guide'][language]} </Link>
            <Link to={"/calculator"}
          className="text-decoration-none text-body body-font  border-0" >
            {data[8]['calculator'][language]} </Link>
            <Link to={"/forum"}
          className="text-decoration-none text-body body-font  border-0" >
            {data[0]['forum'][language]} </Link>
            <Link to={"/about-us"}
          className="text-decoration-none text-body body-font  border-0" >
             {data[1]['abtUs'][language]} </Link>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">{data[2]['search'][language]}</button>
     
      </form>
      <div className='d-flex align-items-center gap-3 sub-body-font'>
      <label className="form-check-label " style={{fontSize:"1.2rem"}} htmlFor="flexSwitchCheckChecked">
      {data[3]['eng'][language]}
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
        {data[4]['hin'][language]}
        </label>
      </div>
      </div>
      <Link to="/login">
       <button type="button" className="btn btn-warning">{data[5]['log'][language]}</button>
       </Link>
     
    </div>
    </nav>


</>
  );
}

export default Header;
