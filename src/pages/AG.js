import { useState } from "react";
import { AlgorithmeResult, AlgorithmLauncher, NavBar } from "../components";

const baseURL = process.env.REACT_APP_API_URL + "/metaheuristic-ga";

const AG = () => {
  const [hideForm, setHideForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [body,setBody] = useState({
    ptMatrice : '',
    nbMachine : '',
    nbJob : '',
    niter : 50,
    npop : 10,
    crossover_porb : 0.8,
    mutation_porb : 0.2,
    method : 'tournament',
    nparent : 5,
  });
  const [res,setRes] = useState({
    jobs_order : null,
    instance : null,
    cmax : null,
    time : null,
    data : null
  });

  const formInputHandler = (attr,val) =>{
    setBody(prev => ({...prev,[attr]:val}));
  };
  const resHandler = (attr,val) =>{
    setRes(prev => ({...prev,[attr]:val}));
  };
  const startGa = (e) => {
    e.preventDefault();
    setError(null);
    console.log(body);
    if( !body.ptMatrice || !body.nbMachine || !body.nbJob || !body.npop || !body.niter || !body.crossover_porb || !body.mutation_porb || !body.method || !body.nparent){
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
        resHandler("jobs_order",data["jobs_order"]);
        resHandler("instance",data["instance"]);
        resHandler("cmax",data["cmax"]);
        resHandler("time",data["time"]);
        resHandler("data",data["data"]);
      };

    }).catch(err => {
      setLoading(false);
      setError("Oups, Une erreur s'est produite lors du traitement de votre requete");
      console.error(err);
    })

  };

  return (
    <div>
      <div className="shadow mb-24">
        <NavBar />
      </div>
      <section className="max-w-4xl m-auto">
        {!hideForm && <AlgorithmLauncher loading={loading} ga={true} error={error} formInputHandler={formInputHandler} startAlgorithm={startGa} body={body} />}
        {
          hideForm && <AlgorithmeResult body={body} res={res} title="GA" />
        }
      </section>
    </div>
  )
}

export default AG