   import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import { render } from '@testing-library/react';
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import { Provider } from "react-redux";
// import store from "./store";

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div classname="container">
//           <NavbarBrand href='/'>Trackio </NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:null,
    }
  };
  render() {
    return(
        <BrowserRouter>
            <Switch>
              <Route path={"/"}>
                  <Home />
              </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}


export default App;
