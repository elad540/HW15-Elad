
const HeaderLogo = ({ onLogout }) => {
  const handleLogout = () => {
        onLogout();
  };

  return (
    <div className="header">
      <button className="logoutBtn" onClick={handleLogout}> Logout </button>
      <h1 className="logo"> Students App </h1>
      <h2 className='header2'> Student List </h2>
    </div>
  );
}

export default HeaderLogo;
