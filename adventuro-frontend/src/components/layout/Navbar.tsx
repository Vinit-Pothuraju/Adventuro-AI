import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          Adventuro
        </Link>

        {authenticated && (
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>

            <Link to="/create-trip" className="hover:text-accent">
              Create Trip
            </Link>

            <Link to="/profile" className="hover:text-accent">
              Profile
            </Link>

            <Link to="/settings" className="hover:text-accent">
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border hover:bg-slate-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
