import Homepage from './Components/Homepage';
import ABtest from './Components/ABtest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
function App() {
  return (
<>
<Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/ABtest" element={<ABtest />} />
      
      </Routes>
    </Router>

 
 </>
  ) 
}

export default App;