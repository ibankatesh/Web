import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/styles/header.css';
import './Assets/styles/carousel.css';
import './Assets/styles/footer.css';


import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Home from './MyComponents/Home';
import Partners from './MyComponents/Partners';
import Whatwedo from './MyComponents/Whatwedo';
import Industries from './MyComponents/Industries';
import Approach from './MyComponents/Approach';

function App() {
  return (
    <div className="AppContainer"> {/* Use the scrollable container */}

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        <Route exact path="/what-we-do" element={<Whatwedo/>} />
        <Route exact path="/indsutries" element={<Industries/>} />
        <Route exact path="/approach" element={<Approach/>} />
        <Route exact path="/our-partners" element={<Partners/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
