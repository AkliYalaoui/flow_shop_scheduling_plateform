import { Link } from "react-router-dom";
import styles from './Home.module.css';
import {NavBar} from "../components";

const background_style = {
    height:"100vh",
    backgroundImage:"url('bg.jpg')",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center"
};


const Home = () => {
  return (
    <div style={background_style} className={styles.header}>
      <header className='z-50 relative text-white max-w-6xl m-auto'>
        <NavBar/>
        <div className="mt-20">
            <p className="text-5xl" style={{lineHeight:"3.8rem"}}>Flow Shop Scheduling, tester vos instances du fsp avec des algorithmes exactes, heuristiques et metaheuristics.</p>
            <div className="mt-8 flex space-x-4 justify-center">
                <Link to="/algorithmes" className="bg-purple-800 py-2 rounded-full text-xl shadow-xl w-40 text-center">Tester</Link>
                <Link to="/comparaison" className="bg-slate-700 py-2 rounded-full text-xl shadow-xl w-40 text-center">Comparer</Link>
            </div>
        </div>

      </header>
      <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-80'></div>
    </div>
  )
}

export default Home