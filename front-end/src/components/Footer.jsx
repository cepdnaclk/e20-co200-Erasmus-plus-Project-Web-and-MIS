import peraLogo from '../assets/pera.png'; /* import pera logo from assets folder */
import {Link, Outlet} from 'react-router-dom'; /* To link the Main navigation links to the respective pages */

function Footer() {

    return (
        <footer className="footer"> 
            <div className="footer-nav">
                <div classname = "footer-logo">
                <img className="pera-logo" src={peraLogo} alt="pera logo" /> {/* UoP logo */}
                {/* Content which comes under (Uni Name, Project, Project Number) UoP logo */}
                <p className= "logo-content"><p>University of Peradeniya</p> 
                <p>ERASMUS+ CYCLE Project</p>
                <p>Project Number: GAP-101128627</p></p>
                </div>

                <nav>
                    {/* Topics Followed by the respective links */}

                    <h6>Main Navigation</h6>
                    
                    <ul>
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/project overview'>Log in</Link></li>
                        <li><Link to = '/project overview'>Project Overview</Link></li>
                        <li><Link to = '/contact'>Contact</Link></li>
                    </ul>
                </nav>

                <nav>
                    <h6>Quick Links</h6>
                    <ul>
                        <li><a href="https://erasmus-plus.ec.europa.eu/projects/search/details/101128627">Erasmus+ CYCLE</a></li>
                        <li><a href="http://www.pgis.pdn.ac.lk/">Postgraduate Institute of Science</a></li>
                        <li><a href="https://www.ce.pdn.ac.lk/">Department of Computer Engineering</a></li>
                        <li><a href="https://sci.pdn.ac.lk/scs/">Department of Statics & Computer Science</a></li>
                        <li><a href="https://inro.pdn.ac.lk/">International Relations Office</a></li>
                        <li><a href="https://www.ugc.ac.lk/">University Grants Commission</a></li>
                    </ul>
                </nav>

                <nav>
                    <h6>Contact</h6>
                    <ul>
                        <li>Manager: <a href="https://people.ce.pdn.ac.lk/staff/academic/upul/">Dr. Upul Jayasinghe</a></li>
                        <li>Tel: <a href="tel:+94760416590">+94 76 0416 590</a></li>
                        <li>Email: <a href="mailto:eftu@eng.pdn.ac.lk">eftu@eng.pdn.ac.lk</a></li>

                        <li> Coordinator: <a href="https://sci.pdn.ac.lk/scs/staff/Erunika-Dayaratna">Dr. Erunika Dayaratna</a></li>
                        <li>Tel: <a href="tel:+94766986500">+94 76 698 6500</a></li>
                        <li>Email: <a href="mailto:dayaratna@sci.pdn.ac.lk">dayaratna@sci.pdn.ac.lk</a></li>
                    </ul>
                </nav>
                
            </div>
            {/* Copyright for the website */}
            <p className = "footer-websiteName">Erasmus+ CYCLE Project &copy; {new Date().getFullYear()} - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
