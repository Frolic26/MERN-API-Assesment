import './App.css';
import Footer from './components/comments.js';
import {BrowserRouter , Route, Switch, useHistory} from "react-router-dom"
import Post from "./components/post";


function App() {
  return (
    <div className="App">
      
      <Post/>
      <Footer />
    </div>
  );
}

export default App;
