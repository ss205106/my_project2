import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/MainHeader.css"
import { GiHamburgerMenu } from "react-icons/gi";

const MainHeader = ({goodsTabs}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  const toggleMenu = () => {
    console.log("123  ")
    setMenuOpen(!menuOpen);
};

  useEffect(() => {
    const handleResize = () => {
        if (menuOpen && window.innerWidth > 625) {
            setMenuOpen(false);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [menuOpen]);

    return (
        <div className={scrollPosition < 100 ? "header" :"change_header"}>
          <div id='headerBox'>
            <div className="row">
              <div className='myname'>
                <h3>SungMin</h3>
              </div>
              <ul className="menu SMN_effect-6">
              {Object.keys(goodsTabs).map((key) => (
                  <li>
                      <Link to="#" 
                      data-hover={goodsTabs[key].name}
                      onClick={goodsTabs[key].onMoveToElement}>

                      {goodsTabs[key].name}

                      </Link>
                  </li>
              ))}
              </ul>
              <div  className='icon_hamburger'>
                <GiHamburgerMenu onClick={toggleMenu}/>
              </div>
            </div>
        </div>
        <div  className={menuOpen ? 'menu2 open' : 'menu2'}>
              <ul >
                {Object.keys(goodsTabs).map((key) => (
                    <li>
                        <Link to="#" 
                        data-hover={goodsTabs[key].name}
                        onClick={goodsTabs[key].onMoveToElement}>
                        {goodsTabs[key].name}

                        </Link>
                    </li>
                ))}
                </ul>
              </div>
      </div>
    );
};

export default MainHeader;