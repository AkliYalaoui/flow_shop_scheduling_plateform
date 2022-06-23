import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between items-center  max-w-6xl m-auto">
      <Link to="/" className="text-4xl italic font-semibold">Fsp</Link>
      <ul className="space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/algorithmes">Algorithmes</Link>
        <Link to="/comparaison">Comparaison</Link>
        <Link to="/a-propos">A propos</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
