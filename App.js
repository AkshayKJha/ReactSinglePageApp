import TopNav from "./components/TopNav.js"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.js";
import Component1 from "./components/Component1.js"
import Component2 from "./components/Component2.js"
import Component3 from "./components/Component3.js"
import Component4 from "./components/Component4.js"
import Component5 from "./components/Component5.js"

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route path="/comp1">
            <Component1 />
           </Route>
           <Route path="/comp2">
            <Component2 />
           </Route>
           <Route path="/comp3">
            <Component3 />
           </Route>
           <Route path="/comp4">
            <Component4 />
           </Route>
           <Route path="/comp5">
            <Component5 />
           </Route>
          </Switch>
         </div>
        </Router>
      );
  }
  
  export default App;
          
        
