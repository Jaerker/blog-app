import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="w-100 p-4 d-flex justify-content-center pb-4">
      <Login />
    </div>
  );
}

export default App;
