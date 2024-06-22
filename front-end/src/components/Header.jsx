import React, {useState, useEffect} from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';  // //Add page routing using router dom

import Switch from "react-switch";

import cylcleLogo from '../assets/CYCLE-logo.png';
import erasmusLogo from '../assets/erasmus-plus-logo.jpg';

import profilePic from '../assets/ProPic_UJ.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBell, faAngleRight, faUser, faFile,faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import style from '../pageStyling/Login.module.css';


function Header(){
    // Constants for hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Constants for login button
    const [isVisible, setIsVisible] = useState(true);

    // Get the current location
    const location = useLocation();

    // set hamburger menu to close when a link is clicked
    const handleLinkClick = () => {
        setMenuOpen(false);
        setIsVisible(false);
    }
    
    //Const for edit mode
    const [isEditMode, setIsEditMode] = useState(false);
    //Change the vie mode and the edit mode when the switch handle is toggled
    //Implement the edit mode of the website
    const handleToggle = (checked) => {
        setIsEditMode(checked);
    };

    //For logout 
    const [logout, setLogout] = useState(false);

    const [showChat, setShowChat] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showAccount, setShowAccount] = useState(false);

    return(
        <header>
            {/* Top Navigation Bar for Administration  */}
            <nav class= "adminNavBar">                
                <div>
                    <ul className="adminNavBarLeft">
                        <li><Link to = '/admin/dashboard'>DASHBOARD</Link></li>
                        <li><Link to = '/admin/project management'>PROJECT MANAGEMENT</Link></li>
                        <li><Link to = '/admin/repository'>REPOSITORY</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="adminNavBarRight">                  
                                                
                        <span id="switchLabel">{isEditMode ? "Edit Mode" : "View Mode"}</span>
                        <li><Switch 
                                    onChange={handleToggle} 
                                    checked={isEditMode} 
                                    offColor="#888"
                                    onColor="#324e94"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    activeBoxShadow ={null}
                                    height={18}
                                    width={30}                                    
                            />                       
                        
                        </li>                                            
                        <li onClick={() => setShowChat(!showChat)}><FontAwesomeIcon icon={faMessage}/></li>
                        <li onClick={() => setShowNotifications(!showNotifications)}><FontAwesomeIcon icon={faBell}/></li>
                        <li onClick={() => setShowAccount(!showAccount)}><img src={profilePic}></img></li>
                    </ul>                              
                </div>                 
                            
            </nav>

            {/* User Account Dropdown Menu */}
            <div class= {showAccount ? "userAccount-Open" : "userAccount-Close"}>
                        
                <div className="userAccountInfo">
                    <img src={profilePic}></img>
                    <h3>Dr. Upul Jayasinghe</h3>
                </div>
                
                <hr></hr>
                <a herf="#" className="userAccountContent">                                
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <p>Profile</p>    
                    <span><FontAwesomeIcon icon={faAngleRight}/></span>                         
                </a>
                <a herf="#" className="userAccountContent"> 
                    <FontAwesomeIcon icon={faFile} className="icon"/>                            
                    <p>My Files</p>    
                    <span><FontAwesomeIcon icon={faAngleRight}/></span>                         
                </a>
                <a herf="#" className="userAccountContent"> 
                    <FontAwesomeIcon icon={faCalendarDays} className="icon"/>                            
                    <p>Calender</p>    
                    <span><FontAwesomeIcon icon={faAngleRight}/></span>                         
                </a>
                <hr></hr>
                <a herf="#" className="userAccountContent" id="logoutText" onClick={() => setLogout(!logout)}>                              
                    <p>Logout</p>                        
                </a>                           
                        
            </div>

            {/* Side Bar - Notifications */}
            <div class= {showNotifications ? "sideBar-Open" : "sideBar-Close"}>
                        
                <div className="siderBarTitle">
                    <h3>Notifications</h3>
                </div>
                <hr></hr>                       
                        
            </div>

            {/* Side Bar - chatBox */}
            <div class= {showChat ? "sideBar-Open" : "sideBar-Close"}>
                        
                <div className="siderBarTitle">
                    <h3>Messages</h3>
                </div>
                <hr></hr>                       
                        
            </div>

    // Update the visibility of the login button based on the current location
    useEffect(() => {
        if (location.pathname === '/login') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    })

    return(
        <header>
            <div>
            {isVisible && <button className={style["Login-button"]}><Link to = '/login' onClick={handleLinkClick}>LOGIN</Link></button>}
            </div>

            <div className='logo-block'>
            {/* Erasmus logo */}
            <a href = "https://erasmus-plus.ec.europa.eu/"><img src={erasmusLogo} alt="Erasmus+ Logo" className="Erasmus-plus-Logo"></img></a>

            {/* Main heading */}
            <h1><span style={{ color:'rgb(50, 78, 148)'}}>ERASMUS+</span> <span style={{ color:'rgba(44, 110, 11, 0.634)'}}>CYCLE</span></h1>

            {/* Cycle logo */}
            <img src={cylcleLogo} alt="Cycle Logo" className="Cycle-Logo"></img>
            </div>

            {/* Sub heading */}
            <h2><span style={{ color:'rgb(50, 78, 148)'}}>CYberseCurityLEarning: Master's degree in Cybersecurity</span></h2>

            {/* Navigation bar */}
            <nav className = "headerNavBar">
                <Link to = '/'></Link>

                {/* Hamburger menu */}
                <div className='menu' onClick={() => 
                    setMenuOpen(!menuOpen)
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className= {menuOpen ? "open" : ""}>
                    <li><Link to = '/' onClick={handleLinkClick}>HOME</Link></li>
                    <li className = "headerDropDown">
                    <Link to = '#'>PROJECT OVERVIEW &nbsp; &nbsp; &#x25BC;</Link>
                        <div className = "dropdown-content">
                            <Link to = '/project overview/overview' onClick={handleLinkClick}>Overview</Link>
                            <Link to = '/project overview/workplan' onClick={handleLinkClick}>Cycle Workplan</Link>
                            <Link to = '/project overview/deliverables' onClick={handleLinkClick}>Deliverables</Link>
                        </div>
                        </li>
                    <li><Link to = '/team' onClick={handleLinkClick}>TEAM</Link></li>
                    <li className = "headerDropDown">
                    <Link to = '#'>NEWS & EVENTS &nbsp; &nbsp; &#x25BC;</Link>
                        <div className = "dropdown-content">
                            <Link to = '/news & events/news' onClick={handleLinkClick}>News & Events</Link>
                            <Link to = '/news & events/gallery' onClick={handleLinkClick}>Gallery</Link>
                        </div>
                    </li>
                    <li><Link to = '/downloads' onClick={handleLinkClick}>DOWNLOADS</Link></li>
                    <li><Link to = '/contact' onClick={handleLinkClick}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header