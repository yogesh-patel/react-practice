import React from 'react';
import LoginComponent from "../../views/Login/index";


class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId:'',
      password:''
    }
  }

  onUserIdChanged(e) {
    this.setState({userId:e.target.value});
  }

  onPasswordChanged(e){
    this.setState({password:e.target.value});
  }

  render(){
    return <LoginComponent/>
  }
}

export default LoginContainer;