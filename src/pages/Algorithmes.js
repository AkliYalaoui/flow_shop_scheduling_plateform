import {NavBar} from "../components";
import { Link } from "react-router-dom";

const Algorithmes = () => {
  return (
    
    <div>
        <div className="shadow mb-16">
        <NavBar/>
        </div>

        <section className="max-w-5xl m-auto grid grid-cols-4 gap-4 p-10">
            <Link to="/branch-and-bound">
                <article className="h-56 w-56 rounded shadow bg-purple-800 text-white p-4">
                    <h3 className="text-center text-2xl">Branch And Bound</h3>
                    <p className="text-sm mt-4 text-justify">Un algorithme par séparation et évaluation, une méthode exacte qui fournit une solution optimale.</p>
                </article>
            </Link>
            <Link to="/neh">
                <article className="h-56 w-56 rounded shadow bg-red-800 text-white p-4">
                    <h3 className="text-center text-2xl">Heuristique <br/>NEH</h3>
                    <p className="text-sm mt-4 text-justify">Une heuristique qui consiste à trouver une solution initiale puis à l'améliorer par n(n+ l)/2— 1 permutations</p>
                </article>
            </Link>
            <Link to="/palmer">
                <article className="h-56 w-56 rounded shadow bg-green-800 text-white p-4">
                    <h3 className="text-center text-2xl">Heuristique Palmer</h3>
                    <p className="text-sm mt-4 text-justify">Une des premières heuristiques développées l'a été par Palmer (1965). Il s'agit d'une extension de la règle SPT</p>
                </article>
            </Link>
            <Link to="/cds">
                <article className="h-56 w-56 rounded shadow bg-yellow-800 text-white p-4">
                    <h3 className="text-center text-2xl">Heuristique <br/> CDS</h3>
                    <p className="text-sm mt-4 text-justify">Une heuristique qui consiste à générer <var>m - 1</var> solutions en appliquant l'algorithme de Johnson sur 2 machines fictives.</p>
                </article>
            </Link>
            <Link to="/tabu">
                <article className="h-56 w-56 rounded shadow bg-orange-800 text-white p-4">
                    <h3 className="text-center text-2xl">Metaheuristique Tabu</h3>
                    <p className="text-sm mt-4 text-justify">La recherche tabou est une métaheuristique d'optimisation présentée par Fred W. Glover en 1986.</p>
                </article>
            </Link>
            <Link to="/ag">
                <article className="h-56 w-56 rounded shadow bg-slate-800 text-white p-4">
                    <h3 className="text-center text-2xl">Metaheuristique AG</h3>
                    <p className="text-sm mt-4 text-justify">Les algorithmes génétiques appartiennent à la famille des algorithmes évolutionnistes.</p>
                </article>
            </Link>
            <Link to="/gvns">
                <article className="h-56 w-56 rounded shadow bg-teal-800 text-white p-4">
                    <h3 className="text-center text-2xl">Metaheuristique GVNS</h3>
                    <p className="text-sm mt-4 text-justify">General Variable Neighborhood Search (GVNS) metaheuristic</p>
                </article>
            </Link>
            <Link to="/HyperHeuristic">
                <article className="h-56 w-56 rounded shadow bg-emerald-800 text-white p-4">
                    <h3 className="text-center text-2xl">HyperHeuristic</h3>
                    <p className="text-sm mt-4 text-justify">Une hyper-heuristique perturbatrice de selection avec apprentissage offline.</p>
                </article>
            </Link>
        </section>
    </div>
  )
}

export default Algorithmes