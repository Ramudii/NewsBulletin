
import logo from '../assets/logo.png';
const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#b30000", color: "white" }} data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
        News <span className="badge bg-light text-dark fs-4">Bulletin</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
      <ul className="nav nav-pills">
  <li className="nav-item">
    <div 
      className="nav-link text-white px-3 py-2 mx-1 rounded-pill" 
      style={{ backgroundColor: "#1a1a2e", cursor: "pointer" }} 
      onClick={() => setCategory("technology")}
    >
      Technology
    </div>
  </li>
  <li className="nav-item">
    <div 
      className="nav-link text-white px-3 py-2 mx-1 rounded-pill" 
      style={{ backgroundColor: "#1a1a2e", cursor: "pointer" }} 
      onClick={() => setCategory("business")}
    >
      Business
    </div>
  </li>
  <li className="nav-item">
    <div 
      className="nav-link text-white px-3 py-2 mx-1 rounded-pill" 
      style={{ backgroundColor: "#1a1a2e", cursor: "pointer" }} 
      onClick={() => setCategory("health")}
    >
      Health
    </div>
  </li>
  <li className="nav-item">
    <div 
      className="nav-link text-white px-3 py-2 mx-1 rounded-pill" 
      style={{ backgroundColor: "#1a1a2e", cursor: "pointer" }} 
      onClick={() => setCategory("sports")}
    >
      Sports
    </div>
  </li>
  <li className="nav-item">
    <div 
      className="nav-link text-white px-3 py-2 mx-1 rounded-pill" 
      style={{ backgroundColor: "#1a1a2e", cursor: "pointer" }} 
      onClick={() => setCategory("entertainment")}
    >
      Entertainment
    </div>
  </li>
</ul>

      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar