import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import "./navBar.scss";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../firebase/firebase";

export default function NavBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
}
