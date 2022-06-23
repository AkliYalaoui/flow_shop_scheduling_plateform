import { NavBar } from "../components";
import adel from "../assets/adel.webp";
import islem from "../assets/islem_1.jpg";
import akli from "../assets/akli.webp";
import moh from "../assets/moh.jpg";
import sarah from "../assets/abchiche.jpg";
import ayoub from "../assets/ayoub.jpg";

const About = () => {
  return (
    <div className="mb-20">
      <div className="shadow mb-20">
        <NavBar />
      </div>
      <section className="max-w-4xl m-auto mb-12">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Flow Shop de Permutation
        </h2>
        <div className="space-y-3 text-gray-700 text-lg">
          <p>
            Le flow-shop est un problème d'ordonnancement de n tâches non
            identiques sur m machines, avec les contraintes suivantes :
          </p>
          <ul className="list-disc pl-10">
            <li>Toutes les tâches doivent passer sur toutes les machines.</li>
            <li>Une machine ne peut traiter qu'une tâche à la fois .</li>
          </ul>
          <p>
            Le flow shop de permutation concerne le cas où toutes les tâches
            passent dans le même ordre sur toutes les machines.
          </p>
          <p>Chaque tâche a une durée d'exécution sur chaque machine.</p>
          <p>
            Une instance du problème se présente comme une matrice à m lignes et
            n colonnes M=(d<sub>ij</sub>) où d<sub>ij</sub> désigne le temps
            d'exécution de la tâche j sur la machine i.
          </p>
          <p>Les fonctions objectif sont généralement :</p>
          <ul className="list-disc pl-10">
            <li>
              C<sub>max</sub> date de fin de la dernière tâche sur la machine m
              ou le temps total passé à exécuter toutes les tâches.
            </li>
          </ul>
          <p>
            Voici un exemple d'une instance de problème à 4 taches sur 3
            machines :
          </p>
          <table className="m-auto">
            <tbody>
              <tr>
                <td className="p-2">5</td>
                <td className="p-2">8</td>
                <td className="p-2">7</td>
                <td className="p-2">3</td>
              </tr>
              <tr>
                <td className="p-2">6</td>
                <td className="p-2">7</td>
                <td className="p-2">2</td>
                <td className="p-2">5</td>
              </tr>
              <tr>
                <td className="p-2">4</td>
                <td className="p-2">8</td>
                <td className="p-2">7</td>
                <td className="p-2">9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="max-w-4xl m-auto">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Les Membres de l'équipe
        </h2>
        <section className="grid grid-cols-3 gap-8">
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={sarah} alt="sarah" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Sarah Abchiche (CE)</h3>
            <p className="text-base opacity-80 px-4">
              Travaille sur NEH, Gvns et branch and bound
            </p>
          </article>
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={adel} alt="adel" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Adel Boulouad</h3>
            <p className="text-base opacity-80 px-4 pb-4">
              Travaille sur Palmer, Recherche Tabu et branch and bound
            </p>
          </article>
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={islem} alt="islem" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Mohammedislem karabernou</h3>
            <p className="text-base opacity-80 px-4">
              Travaille sur NEH, Gvns et branch and bound
            </p>
          </article>
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={akli} alt="akli" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Akli Yalaoui</h3>
            <p className="text-base opacity-80 px-4">
              Travaille sur Palmer, Recherche Tabu et branch and bound
            </p>
          </article>
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={moh} alt="moh" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Mohammed Djilani</h3>
            <p className="text-base opacity-80 px-4">
              Travaille sur Cds, algorithme génétique et branch and bound
            </p>
          </article>
          <article className="space-y-2 shadow-md border-b-4 border-purple-800 text-center rounded">
            <img src={ayoub} alt="ayooub" className="object-cover m-auto w-40 h-40" />
            <h3 className="font-bold px-4">Ayoub Belouadah</h3>
            <p className="text-base opacity-80 px-4 pb-4">
              Travaille sur Cds, algorithme génétique et branch and bound
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
