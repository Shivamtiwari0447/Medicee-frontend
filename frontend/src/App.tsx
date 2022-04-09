// import './App.css';
import React,{useEffect,Component,createContext,useReducer,useContext} from 'react';
// import Signup from './component/signup';
// import Signin from './component/signin';
// import Forget from './component/forget_psswrd';
import Router from './component/router';

export const UserContext = createContext(T);

class App extends Component{
  render(){
    return(
      <div>
      <Router />
    </div>
    )
  }
}

export default App;
function T(T: any) {
  throw new Error('Function not implemented.');
}

