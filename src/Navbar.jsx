// import React from "react";
// import "./Navbar.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

// //Navigating btn
//  const handleAbout = () => {
//   navigate("/aboutus");
//  }

// //Handling sidebar when lin clicked
// const handleSidebar = () => {
//   document.getElementById("checkBtn").checked = false
// }

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="title" onClick={handleAbout} style={{cursor:"pointer" , marginLeft:"10px"}}>
//           <img src="/logo.png" className="logo" />
//           &nbsp;&nbsp;
//           <h2></h2>
//         </div>
//         <input type="checkbox" id="checkBtn" />
//         <label htmlFor="checkBtn" className="open-sidebar">
//           <lord-icon
//             src="https://cdn.lordicon.com/ipnwkgdy.json"
//             trigger="click"
//           ></lord-icon>
//         </label>
//         <label htmlFor="checkBtn" id="overlay"></label>
//         <div className="links">
//           <label htmlFor="checkBtn" className="close-sidebar">
//             <lord-icon
//               src="https://cdn.lordicon.com/zxvuvcnc.json"
//               trigger="click"
//               className="close-icon"
//             ></lord-icon>
//           </label>
//           <Link to="/" onClick={handleSidebar}>Home</Link>
//           <Link to="/aboutus" onClick={handleSidebar}>AboutUs</Link>
//           <Link to="/environmine/calculation" onClick={handleSidebar}>Emission Calculation</Link>
//           <Link to="/contactus">ContactUs</Link>
//           <Link to="/signup" className="authenticate" onClick={handleSidebar}>SignUp</Link>
//           <Link to="/login" className="authenticate" onClick={handleSidebar}>Login</Link>
//           <Link to="#"  onClick={handleSidebar}>ContactUs</Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="title" style={{ cursor: "pointer", marginLeft: "10px" }}>
//         {/* <img src="/logo.png" className="logo" alt="Logo" /> */}
//         &nbsp;&nbsp;
//         <h2>CARBONMITRA</h2>
//       </Link>
//       <div className="links">
//         <Link to="/">Home</Link>
//         <Link to="/aboutus">About Us</Link>
//         <Link to="/carbonmitra/calculation">Emission Calculation</Link>
//         {/* <Link to="/contactus">Explore</Link> */}
//         <Link to="/askai">Ask AI</Link>
//         {/* <Link to="/contactus">Contact Us</Link> */}
//         {/* <Link to="/signup" className="authenticate">Sign Up</Link> */}
//         <Link to="/login" className="authenticate">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import "./Navbar.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

// //Navigating btn
//  const handleAbout = () => {
//   navigate("/aboutus");
//  }

// //Handling sidebar when lin clicked
// const handleSidebar = () => {
//   document.getElementById("checkBtn").checked = false
// }

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="title" onClick={handleAbout} style={{cursor:"pointer" , marginLeft:"10px"}}>
//           <img src="/logo.png" className="logo" />
//           &nbsp;&nbsp;
//           <h2></h2>
//         </div>
//         <input type="checkbox" id="checkBtn" />
//         <label htmlFor="checkBtn" className="open-sidebar">
//           <lord-icon
//             src="https://cdn.lordicon.com/ipnwkgdy.json"
//             trigger="click"
//           ></lord-icon>
//         </label>
//         <label htmlFor="checkBtn" id="overlay"></label>
//         <div className="links">
//           <label htmlFor="checkBtn" className="close-sidebar">
//             <lord-icon
//               src="https://cdn.lordicon.com/zxvuvcnc.json"
//               trigger="click"
//               className="close-icon"
//             ></lord-icon>
//           </label>
//           <Link to="/" onClick={handleSidebar}>Home</Link>
//           <Link to="/aboutus" onClick={handleSidebar}>AboutUs</Link>
//           <Link to="/environmine/calculation" onClick={handleSidebar}>Emission Calculation</Link>
//           <Link to="/contactus">ContactUs</Link>
//           <Link to="/signup" className="authenticate" onClick={handleSidebar}>SignUp</Link>
//           <Link to="/login" className="authenticate" onClick={handleSidebar}>Login</Link>
//           <Link to="#"  onClick={handleSidebar}>ContactUs</Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title" style={{ cursor: "pointer", marginLeft: "10px" }}>
        {/* <img src="/logo.png" className="logo" alt="Logo" /> */}
        &nbsp;&nbsp;
        <h2>CARBONMITRA</h2>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/carbonmitra/calculation">Emission Calculation</Link>
        {/* <Link to="/contactus">Explore</Link> */}
        <Link to="/askai">Ask AI</Link>
        {/* <Link to="/contactus">Contact Us</Link> */}
        {/* <Link to="/signup" className="authenticate">Sign Up</Link> */}
        <Link to="/login" className="authenticate">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
