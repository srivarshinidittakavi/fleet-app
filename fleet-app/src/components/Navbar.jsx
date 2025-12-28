import React from 'react';
import{useAuth} from'../context/AuthContect.jsx';
import{useNavigate} from 'react-router-dom';
function Navbar(){
    const{logout}=useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate('/login',{replace:true});

    };
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <strong>Admin Dashboard</strong>

            </div>
            <div className="navbar-right">
                <buttpn className="btn"onClick={handleLogout}>Logout</buttpn>

            </div>
        </nav>
    );
}
export default Navbar;