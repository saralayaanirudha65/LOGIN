
import './App.css';
import Register from './Auth/Register';
import {Routes,Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
<Register/>
<ToastContainer />

      
    </div>
  );
}

export default App;
