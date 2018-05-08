import React from 'react';


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

  }
}

export default LoginContainer;