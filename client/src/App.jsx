import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Users />}> </Route>
            <Route path='/create' element={<CreateUsers />}> </Route>
            <Route path='/update/:id' element={<UpdateUsers/>}> </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
