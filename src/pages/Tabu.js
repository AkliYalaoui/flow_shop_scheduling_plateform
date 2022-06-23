import { useState } from "react";
import { AlgorithmeResult, AlgorithmLauncher, NavBar } from "../components";

const baseURL = process.env.REACT_APP_API_URL + "/metaheuristic-tabu";


const Tabu = () => {
  const [hideForm, setHideForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [body,setBody] = useState({
    ptMatrice : '',
    nbMachine : '',
    nbJob : '',
    tabutenure : 5,
    niter : 50
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
  const startTabu = (e) => {
    e.preventDefault();
    setError(null);
    if( !body.ptMatrice || !body.nbMachine || !body.nbJob || !body.tabutenure || !body.niter){
      return;
    }

    if(body.ptMatrice.length === 0 || body.nbJob.length === 0 || body.nbMachine.length === 0 || body.tabutenure.length === 0 || body.niter.length === 0){
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
        {!hideForm && <AlgorithmLauncher loading={loading} tabu={true} error={error} formInputHandler={formInputHandler} startAlgorithm={startTabu} body={body}/>}
        {
          hideForm && <AlgorithmeResult body={body} res={res} title="Recherche Tabu" />
        }
      </section>
    </div>
  )
}

export default Tabu