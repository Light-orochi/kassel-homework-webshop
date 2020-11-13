import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 
import User from './model/user';

interface AppState{
   users:User[],
   currentPage:string;
}
class App extends React.Component{

  state : AppState;
  constructor(props:any){
    super(props);
    this.state={
      users:[],
      currentPage:'enter',
    };

     this.enterButtonAction=this.enterButtonAction.bind(this);
  }
 
  enterButtonAction(){
    let email=$('#email').val() as string;
   let user= this.getFormUsers(email);
   if(user){
     this.setState({
       currentPage:'login'
     })
   
  }
  else{
    this.setState({
      currentPage: 'register'
    })
  }
   console.log(email, user)
  }
  getFormUsers(email:string){
    for(const user of this.state.users ){
      if(user.email===email){
        return user;
      }
     
    }
    return null;
  }
   render() {
   let page=<div>unknown</div>
if(this.state.currentPage === 'enter'){
      page=
      <div className="App">
          <div>Wasp warehouse
          </div>
          <div>Enter</div>
        <div className="row justify-content-center ">
        <div className="col-md-2 border rounded p-5 bg-secondary">
          <input id="email" className="form-control mb-2 " name="name" placeholder="your email"/>
          <button className="btn btn-info" onClick={this.enterButtonAction}>ok</button>
          </div>
        </div>
          
        </div>;
}
else if (this.state.currentPage === 'register'){
  page=
  <div className="App">
      <div>Wasp warehouse
      </div>
    <div>{this.state.currentPage}</div>
    <div className="row justify-content-center ">
    <div className="col-md-2 border rounded p-5 bg-dark">
      <input id="email" className="form-control mb-2  bg-infos" name="name" placeholder="your email"/>
      <input id="name" className="form-control mb-2 " name="" placeholder="your name"/>
      <input id="password" className="form-control mb-2 " name="" placeholder="your password"/>
      <button className="btn btn-info">ok</button>
      </div>
    </div>
      
    </div>;

}

    return (page);
  }

} 



export default App;
