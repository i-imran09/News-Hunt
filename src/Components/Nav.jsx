
// const Nav = (props) => {
//   const handleSelect = (lang) => {
//     props.setLang(lang);  // Change language in App.jsx via props
//   };
//   return (
//     <nav  className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="dark">
//     <div  className="container-sm">
//       <a  className="navbar-brand"><span className="badge bg-light text-dark fs-4">NewsHunt</span></a>
//       <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span  className="navbar-toggler-icon"></span>
//       </button>
//       <div  className="collapse navbar-collapse" id="navbarNav">
//         <ul  className="navbar-nav">
//           <li  className="nav-item">
//             <div  className="nav-link"  onClick={()=>props.setCategary("business")}><i className="bi bi-briefcase m-1"></i>Business</div>
//           </li>
//           <li  className="nav-item">
//             <div  className="nav-link" onClick={()=>props.setCategary("entertainment")}><i className="bi bi-tv m-1"></i>Entertainment</div>
//           </li>
//           <li  className="nav-item">
//             <div  className="nav-link" onClick={()=>props.setCategary("general")}><i className="bi bi-person m-1"></i>General</div>
//           </li>
//           <li  className="nav-item">
//             <div  className="nav-link" onClick={()=>props.setCategary("health")}><i className="bi bi-hospital m-1"></i>Health</div>
//           </li>
//           <li  className="nav-item">
//             <div  className="nav-link" onClick={()=>props.setCategary("science")}><i className="bi bi-flask m-1"></i>Science</div>
//           </li>
//           <li  className="nav-item">
//             <button  className="nav-link" onClick={()=>props.setCategary("sports")}><i className="bi bi-controller m-1"></i>sports</button>
//           </li>
//           <li  className="nav-item">
//             <button className="nav-link " onClick={()=>props.setCategary("technology")}><i className="bi bi-robot m-1"></i>technology</button>
//           </li>
//        {/* Bootstrap Language Dropdown */}
//        <div className="dropdown">
//         <button
//           className="btn btn-secondary dropdown-toggle"
//           type="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Language: {props.lang === 'en' ? 'English' : 'Tamil'}
//         </button>

//         <ul className="dropdown-menu">
//           <li>
//             <button
//               className={`dropdown-item ${props.lang === 'en' ? 'active' : ''}`}
//               onClick={() => handleSelect('en')}
//             >
//               English
//             </button>
//           </li>
//           <li>
//             <button
//               className={`dropdown-item ${props.lang === 'ta' ? 'active' : ''}`}
//               onClick={() => handleSelect('ta')}
//             >
//               Tamil
//             </button>
//           </li>
//         </ul>
//       </div>




      
//         </ul>
//       </div>
//     </div>
    
//   </nav>

//   )
// }

// export default Nav
const Nav = (props) => {
  const handleSelect = (lang) => {
    props.setLang(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 custom-navbar">
      <div className="container">
        <a className="navbar-brand fs-3 fw-bold">
          <span className="badge bg-primary text-dark px-3 py-2"> NewsHunt</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-categories">
            {[
              { name: "Business", icon: "briefcase" },
              { name: "Entertainment", icon: "tv" },
              { name: "General", icon: "person" },
              { name: "Health", icon: "hospital" },
              { name: "Science", icon: "flask" },
              { name: "Sports", icon: "controller" },
              { name: "Technology", icon: "robot" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => props.setCategary(item.name.toLowerCase())}
                >
                  <i className={`bi bi-${item.icon} me-1`}></i>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language: {props.lang === "en" ? "English" : "Tamil"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className={`dropdown-item ${props.lang === "en" ? "active" : ""}`}
                  onClick={() => handleSelect("en")}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${props.lang === "ta" ? "active" : ""}`}
                  onClick={() => handleSelect("ta")}
                >
                  Tamil
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
