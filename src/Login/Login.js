import React, { Component } from 'react';
import history from '../history';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          signShow: true,
          signupName: '',
          signupEmail:'',
          signupPassword:'',
        };
    }
    signSubmit = (event) =>{
        console.log(event,'login success');
        history.push('/VideoPage');
    }
    signUpSubmit =() =>{
        this.setState( {
            signShow:false,
        })
    }
    
    saveSubmit = (x) =>{
        console.log(x,"sssss");
        // this.setState({value: event.target.value});
    }

    handleChange = (event) =>{  
        this.setState({signupName: event.target.value ,
            signupEmail: event.target.value ,
            signupPassword: event.target.value
        });
        // console.log("11",this.state.signupName);
        // this.setState({signupEmail: x.target.signupEmail});
        // console.log(x.target.value);
    }

  render() {
      const signShow = this.state.signShow;
       const {signupName,signupEmail,signupPassword } = this.state;

      const json = {signupName
                   ,signupEmail
                   ,signupPassword}

      if(signShow === true) {
    return (
      <div>

  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <input type="button" value="Submit" onClick={this.signSubmit}/>
  <div>To sign up<input type="button" value="Sign up" onClick={this.signUpSubmit}/></div>

      </div>
    );
}
else {
    return (
        <div>

        
        <label>
            Username:
            <input type="text" name="signupName" signupName={this.state.signupName} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="signupEmail" signupEmail={this.state.signupEmail} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="signupPassword" signupPassword={this.state.signupPassword} onChange={this.handleChange}/>
          </label>
          <input type="button" value="Submit" onClick={this.saveSubmit}/>
          <p>
              {JSON.stringify(json)}
          </p>
        
              </div>
    )
}
  }
}

export default Login;
