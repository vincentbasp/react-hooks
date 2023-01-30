import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Exo1 } from './exo1/Exo1';
import { Exo2 } from './exo2/Exo2';
import { Exo3 } from './exo3/Exo3';
import { Exo4 } from './exo4/Exo4';
import { Exo5 } from './exo5/Exo5';
import { Exo6 } from './exo6/Exo6';
import { Exo7 } from './exo7/Exo7';
import { Exo8 } from './exo8/Exo8';
import { Exo9 } from './exo9/Exo9';
import { Exo10 } from './exo10/Exo10';

import './app.css'

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
        <Route index element={ <Exo1/> } />
          <Route path="exo1" element={ <Exo1/> } />
          <Route path="exo2" element={ <Exo2/> } />
          <Route path="exo3" element={ <Exo3/> } />
          <Route path="exo4" element={ <Exo4/> } />
          <Route path="exo5" element={ <Exo5/> } />
          <Route path="exo6" element={ <Exo6/> } />
          <Route path="exo7" element={ <Exo7/> } />
          <Route path="exo8" element={ <Exo8/> } />
          <Route path="exo9" element={ <Exo9/> } />
          <Route path="exo10" element={ <Exo10/> } />
        </Route>
      </Routes>
    </div>
  );
}
