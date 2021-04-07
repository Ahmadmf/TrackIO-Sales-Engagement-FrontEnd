import React from 'react';
import './App.css';
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Campaign from "./pages/campaign"
import Welcome from "./components/starter/welcome";
import MailBox from "./components/starter/connectMailbox";
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
              <Route exact path={"/"}>
                  <Home />
              </Route>
              <Route exact path={"/sign_up"}>
                  <SignUp />
              </Route>
              <Route exact path={"/app/dashboard"}>
                  <Campaign />
              </Route>
              <Route exact path={"/app/welcome"}>
                    <Welcome />
              </Route>
              <Route exact path={"/app/mailBox"}>
                    <MailBox />
              </Route>
              
            </Switch>
        </BrowserRouter>
    );
  }
}


export default App;