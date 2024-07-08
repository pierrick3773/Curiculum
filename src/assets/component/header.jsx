import './header.css'; 
const Header = () => {
  const email = 'pviarde@gmail.com';

  return (
    <>
      <div className="header-container">
        <div className="info">
          <h1>Pierrick Viarde</h1> 
          <p >07.69.04.73.07</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </>
  );
};

export default Header;
