import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/languageContext';
import data from '../../data';

const Header = () => {
  const {isEnglish, toggleLanguage} = useLanguage()
  // const headData = data[]
    const [isEng, setIsEng] = useState(false);

    // useEffect(()=>{
    //   if(!isEng) to('en')
    //     else setLanguage('hi')
    // },[isEnglish])

    const handleToggle = () => {
      setIsEng(!isEng);
      toggleLanguage()
    };
  return (<>
  
  <nav className="navbar bg-body-tertiary shadow mb-3 sticky-top ">
  <div className="container-fluid d-flex justify-content-between">
    <Link to={"/"}
          className="text-decoration-none text-body sub-heading  border-0" >
            Multiply </Link>
            <Link to={"/guide"}
          className="text-decoration-none text-body body-font  border-0" >
            {data[7]['guide'][isEnglish?'en':'hi']} </Link>
            <Link to={"/calculator"}
          className="text-decoration-none text-body body-font  border-0" >
            {data[8]['calculator'][isEnglish?'en':'hi']} </Link>
            <Link to={"/forum"}
          className="text-decoration-none text-body body-font  border-0" >
            {data[0]['forum'][isEnglish?'en':'hi']} </Link>
            <Link to={"/video"}
          className="text-decoration-none text-body body-font  border-0" >
             {data[1]['abtUs'][isEnglish?'en':'hi']} </Link>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">{data[2]['search'][isEnglish?'en':'hi']}</button>
     
      </form>
      <div className='d-flex align-items-center gap-3 sub-body-font'>
      <label className="form-check-label " style={{fontSize:"1.2rem"}} htmlFor="flexSwitchCheckChecked">
      {data[3]['eng'][isEnglish?'en':'hi']}
      </label>
      <div className="form-check form-switch sub-heading">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isEng}
          onChange={handleToggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        {data[4]['hin'][isEnglish?'en':'hi']}
        </label>
      </div>
      </div>
      <Link to="/login">
       <button type="button" className="btn btn-warning">{data[5]['log'][isEnglish?'en':'hi']}</button>
       </Link>
     
    </div>
    </nav>


</>
  );
}

export default Header;
