import { NavLink, Routes, Route } from "react-router-dom";
import Home from './navPages';
import AboutUs from './navPages/aboutus';
import ContactUs from './navPages/contactus';
import SignUp from './navPages/signup';
import SignIn from './navPages/signin';

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
                {/* <NavLink to="/home"> */}
                <NavLink to="/home">
                    Home
                </NavLink>
                {/* <NavLink to="/aboutus"> */}
                <NavLink to="/aboutus">
                    About Us
                </NavLink>

                 {/* <NavLink to="/contactus"> */}
                 <NavLink to="/contactus">
                     Contact Us
                 </NavLink>

                 {/* <NavLink to="/signin"> */}
                 <NavLink to="/signin">
                     Sign In
                 </NavLink>

             </nav>
                 <Routes>
                     <Route path="/home" element={ <Home />} />
                     <Route path="/aboutus" element={<AboutUs />} />
                     <Route path="/contactus" element={<ContactUs />} />
                     <Route path="/signin" element={<SignIn />} />
                     <Route path="/signup" element={<SignUp />} />
                 </Routes>
         </div>
    )
}

export default NavBar