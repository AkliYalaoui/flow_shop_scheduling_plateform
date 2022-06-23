import { Chart } from "react-google-charts";
import {GiStarShuriken} from "react-icons/gi"

const AlgorithmeResult = ({ body, res,title }) => {

  const data = [
    [
      { type: "string", id: "Position" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    ...res.data
];


  return (
    <div className="space-y-4">

      <p className="flex items-center space-x-2">
        <GiStarShuriken/>
        <span>Votre instance du problème :</span>
      </p>
       <div className="overflow-x-auto">
        <table className="m-auto border-collapse border border-slate-500 overflow-scroll">
          <thead>
              <tr>
              <th className="border border-slate-400 p-2 font-bold bg-slate-700 text-white">{" "}</th>
                {res.jobs_order.map((_,i) => 
                  <th className="border border-slate-400 p-2 font-bold bg-slate-700 text-white" key={i}>{"J" + (i+1)}</th>
                )}
              </tr>
          </thead>
          <tbody>
            {res.instance.map((row,i) => 
            <tr key={i}>
              <td className="border border-slate-400 p-2 font-bold bg-slate-700 text-white">{'M'+(i+1)}</td>
              {row.map((col,j) => 
                <td className="border border-slate-500 p-2" key={j}>{col}</td>
              )}
            </tr>)}
          </tbody>
        </table>
       </div>
      <p className="flex items-center space-x-2">
        <GiStarShuriken/>
        <span>Le temps d'execution du dernier job sur la dernière machine : <span className="font-bold">{res.cmax}</span></span>
      </p>
      <p className="flex items-center space-x-2">
        <GiStarShuriken/>
        <span>Le temps d'execution de l'algorithme du {title} : <span className="font-bold">{Math.round(res.time)} sec</span></span>
      </p>

      <p className="flex items-center space-x-2">
        <GiStarShuriken/>
        <span>Ordre optimal des jobs : </span>
      </p>

      <div>
        {res.jobs_order.map((job,i) => <span key={i} className="p-2 inline-block m-1 bg-slate-700 text-white">{"J"+job}</span>)}
      </div>

      <p className="flex items-center space-x-2">
        <GiStarShuriken/>
        <span>Diagramme de Gantt correspondant : </span>
      </p>
       
       <div>
          <Chart chartType="Timeline" data={data} width="100%" height="800px" />
       </div>
    </div>
  );
};

export default AlgorithmeResult;
