/* eslint-disable react/prop-types */
export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍥</span>
        <h1>WeeBoo</h1>
        <span role="img">🍥</span>
      </div>
      {children}
    </nav>
  );
}
