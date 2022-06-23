import React from "react";
import Loading from "./Loading";

const AlgorithmLauncher = ({formInputHandler,startAlgorithm,error,tabu,ga,loading,hp,body}) => {
  return (
    <div className="max-w-lg m-auto mb-12">
      {loading && <Loading/>}
      <form
        onSubmit={startAlgorithm}
        className="shadow-xl p-4 rounded space-y-4"
      >
      { error && <div className="bg-red-300 text-center text-red-900 font-bold p-2 rounded">
              {error}
      </div> } 
      
        <div className="flex flex-col">
          <label>Instance</label>
          <textarea
            onChange={(e) =>  formInputHandler("ptMatrice",e.target.value)}
            className="p-4 border mt-2 rounded"
            rows={3}
            placeholder="5 8 7 3 
                9 3 4 2
                4 6 5 8"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="machine">Nombre de machines</label>
          <input
            onChange={(e) => formInputHandler("nbMachine",e.target.value)}
            type="number"
            className="p-2 border mt-2 rounded"
            id="machine"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="job">Nombre de jobs</label>
          <input
            onChange={(e) => formInputHandler("nbJob",e.target.value)}
            type="number"
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>
        { tabu && <div className="flex flex-col">
          <label htmlFor="job">Nombre d'iteration</label>
          <input
            onChange={(e) => formInputHandler("niter",e.target.value)}
            type="number"
            value={body.niter}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}
        { tabu && <div className="flex flex-col">
          <label htmlFor="job">Tabue Tenure</label>
          <input
            onChange={(e) => formInputHandler("tabutenure",e.target.value)}
            type="number"
            value={body.tabutenure}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}

        { ga && <div className="flex flex-col">
          <label htmlFor="job">Nombre d'iteration</label>
          <input
            onChange={(e) => formInputHandler("niter",e.target.value)}
            type="number"
            value={body.niter}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}
        { ga && <div className="flex flex-col">
          <label htmlFor="job">Taille de la population</label>
          <input
            onChange={(e) => formInputHandler("npop",e.target.value)}
            type="number"
            value={body.npop}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}
        { ga && <div className="flex flex-col">
          <label htmlFor="job">Nombre de parent à selectionner</label>
          <input
            onChange={(e) => formInputHandler("nparent",e.target.value)}
            type="number"
            className="p-2 border mt-2 rounded"
            value={body.nparent}
            id="job"
          />
        </div>}
        { ga && <div className="flex flex-col">
          <label htmlFor="job">Probabilité du crossover</label>
          <input
            onChange={(e) => formInputHandler("crossover_porb",e.target.value)}
            type="number"
            min="0"
            max="1"
            step="0.1"
            value={body.crossover_porb}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}
        { ga && <div className="flex flex-col">
          <label htmlFor="job">Probabilité de mutation</label>
          <input
            onChange={(e) => formInputHandler("mutation_porb",e.target.value)}
            type="number"
            min="0"
            max="1"
            value={body.mutation_porb}
            step="0.1"
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}

        { ga && <div className="flex flex-col">
          <label htmlFor="job">Methode de selection des parent</label>
          <select  className="p-2 border mt-2 rounded"  onChange={(e) => formInputHandler("method",e.target.value)}>
            <option defaultValue value="tournament">tournament</option>
            <option value="elite">elite</option>
            <option value="roulette">roulette</option>
            <option value="random">random</option>
          </select>
        </div>}
        { hp && <div className="flex flex-col">
          <label htmlFor="job">Nombre d'iteration</label>
          <input
            onChange={(e) => formInputHandler("niter",e.target.value)}
            type="number"
            className="p-2 border mt-2 rounded"
            value={body.niter}
            id="job"
          />
        </div>}
        { hp && <div className="flex flex-col">
          <label htmlFor="job">Nombre des épisodes</label>
          <input
            onChange={(e) => formInputHandler("nepis",e.target.value)}
            type="number"
            value={body.nepis}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}

        { hp && <div className="flex flex-col">
          <label htmlFor="job">Probabilité d'exploitation</label>
          <input
            onChange={(e) => formInputHandler("prob",e.target.value)}
            type="number"
            min="0"
            max="1"
            step="0.1"
            value={body.prob}
            className="p-2 border mt-2 rounded"
            id="job"
          />
        </div>}


        <button className="bg-purple-800 text-white p-2 rounded ml-auto block shadow-lg">
          Lancer
        </button>
      </form>
    </div>
  );
};

export default AlgorithmLauncher;
