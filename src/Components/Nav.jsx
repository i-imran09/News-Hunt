

const Nav = (props) => {
  const handleSelect = (lang) => {
    props.setLang(lang);  // Change language in App.jsx via props
  };
  return (
    <nav  className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="dark">
    <div  className="container-sm">
      <a  className="navbar-brand"><span className="badge bg-light text-dark fs-4">NewsHunt</span></a>
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarNav">
        <ul  className="navbar-nav">
          <li  className="nav-item">
            <div  className="nav-link"  onClick={()=>props.setCategary("business")}><i className="bi bi-briefcase m-1"></i>Business</div>
          </li>
          <li  className="nav-item">
            <div  className="nav-link" onClick={()=>props.setCategary("entertainment")}><i className="bi bi-tv m-1"></i>Entertainment</div>
          </li>
          <li  className="nav-item">
            <div  className="nav-link" onClick={()=>props.setCategary("general")}><i className="bi bi-person m-1"></i>General</div>
          </li>
          <li  className="nav-item">
            <div  className="nav-link" onClick={()=>props.setCategary("health")}><i className="bi bi-hospital m-1"></i>Health</div>
          </li>
          <li  className="nav-item">
            <div  className="nav-link" onClick={()=>props.setCategary("science")}><i className="bi bi-flask m-1"></i>Science</div>
          </li>
          <li  className="nav-item">
            <button  className="nav-link" onClick={()=>props.setCategary("sports")}><i className="bi bi-controller m-1"></i>sports</button>
          </li>
          <li  className="nav-item">
            <button className="nav-link " onClick={()=>props.setCategary("technology")}><i className="bi bi-robot m-1"></i>technology</button>
          </li>
       {/* Bootstrap Language Dropdown */}
       <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Language: {props.lang === 'en' ? 'English' : 'Tamil'}
        </button>

        <ul className="dropdown-menu">
          <li>
            <button
              className={`dropdown-item ${props.lang === 'en' ? 'active' : ''}`}
              onClick={() => handleSelect('en')}
            >
              English
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${props.lang === 'ta' ? 'active' : ''}`}
              onClick={() => handleSelect('ta')}
            >
              Tamil
            </button>
          </li>
        </ul>
      </div>




      
        </ul>
      </div>
    </div>
    
  </nav>

  )
}

export default Nav
