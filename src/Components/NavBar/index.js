import { NavLink, Routes, Route } from "react-router-dom";
import Home from './NavBar/navPages';
import AboutUs from './NavBar/navPages/aboutus';
import ContactUs from './NavBar/navPages/contactus';
import SignUp from './NavBar/navPages/signup';
import SignIn from './NavBar/navPages/signin';

// const nav = styled(div)`
//     color: #b47153;
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     cursor: pointer;
//     &:hover {
//     color: #fff;
// }
// `


function NavBar() {
    return (
        <div className="nav">
            <nav>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/aboutus">
                    About Us
                </NavLink>

                <NavLink to="/contactus">
                    Contact Us
                </NavLink>

                <NavLink to="/signin">
                    Sign In
                </NavLink>

            </nav>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path=".signup" element={<SignUp />} />
                </Routes>
        </div>
    )
}

export default NavBar