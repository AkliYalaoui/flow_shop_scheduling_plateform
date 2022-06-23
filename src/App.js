import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Home,Algorithmes,BrandAndBound,Palmer,Neh,Cds,AG,Tabu,Gvns,Comparaison,About,HyperHeuristic} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/algorithmes' element={<Algorithmes />}/>
        <Route path='/comparaison' element={<Comparaison />}/>
        <Route path='/a-propos' element={<About />}/>
        <Route path="/branch-and-bound" element={<BrandAndBound/>} />
        <Route path="/palmer" element={<Palmer/>} />
        <Route path="/neh" element={<Neh/>} />
        <Route path="/cds" element={<Cds/>} />
        <Route path="/ag" element={<AG/>} />
        <Route path="/tabu" element={<Tabu/>} />
        <Route path="/gvns" element={<Gvns/>} />
        <Route path="/hyperheuristic" element={<HyperHeuristic/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App