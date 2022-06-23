import {useState} from "react";
import {NavBar,AlgorithmLauncher } from "../components";
import { Chart } from "react-google-charts";

const baseURL = process.env.REACT_APP_API_URL + "/comparaison-heuristics";

const Comparaison = () => {

  const [hideForm, setHideForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [body,setBody] = useState({
    ptMatrice : '',
    nbMachine : '',
    nbJob : ''
  });
  const [res,setRes] = useState([]);

  const formInputHandler = (attr,val) =>{
    setBody(prev => ({...prev,[attr]:val}));
  };
  const startCompare = (e) => {
    e.preventDefault();
    setError(null);
    if( !body.ptMatrice || !body.nbMachine || !body.nbJob){
      return;
    }

    if(body.ptMatrice.length === 0 || body.nbJob.length === 0 || body.nbMachine.length === 0){
      return;
    }

    setLoading(true);
    fetch(baseURL,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(data => {
      setLoading(false);
      console.log(data);
      if(data.error){
        setHideForm(false);
        setError(data.error);
      }else{
        setError(null);
        setHideForm(true);
        setRes(data);
      };

    }).catch(err => {
      setLoading(false);
      setError("Oups, Une erreur s'est produite lors du traitement de votre requete");
      console.error(err);
    })

  };
  const options = {
    series: {
      0: { axis: 'makespan' },
      1: { axis: 'execution_time' }
  },
  axes: {
      y: {
          distance: { label: 'seconds' },
          execution_time: { side: 'right', label: 'seconds' }
      }
  }
  }

  return (
    <div>
      <div className="shadow mb-16">
        <NavBar />
      </div>
      <section className="max-w-4xl m-auto">
        {!hideForm && <AlgorithmLauncher loading={loading} error={error} formInputHandler={formInputHandler} startAlgorithm={startCompare}/>}
        {hideForm && <div>
          <h2 className="text-center font-bold text-3xl text-gray-600 mb-12">Comparaison entre les différentes heuristiques</h2>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={[["Heuristic","Makespan","Time"],...res]}
            options={options}
          />
          </div>}
      </section>
    </div>
  )
}

export default Comparaison