import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/Form/TextInput'
import { Link } from 'react-router-dom'
// import logo from '../assets/icon/login-icon.jpg'

interface Props {

}

interface State {
    page: string
}

class Login extends React.Component <Props, State> {
    
    public constructor (props: Props){
        super(props)
        this.state = {
            page: 'Login'
        }

    }

    public handleLogin () {

    }

    public inputChange () {

    }

    render(){
        return(
            <StyledLogin className='Login'>
              <div className='login-card'>
                <form className='pt-0' onSubmit={this.handleLogin}>
                  <span style={{display: 'inline-flex'}} className="form-header">
                      User Login
                  </span>
                  
                  <div className='form-label-group mt-4'>
                    <TextInput
                      type='email'
                      id='email'
                      name='email'
                      addClassName='form-control'
                      placeholder='Email address'
                      isRequired
                      onChange={this.inputChange}
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
      
                  <div className='form-label-group mb-1'>
                    <TextInput
                      type='password'
                      id='password'
                      name='password'
                      addClassName='form-control'
                      placeholder='Password'
                      isRequired
                      onChange={this.inputChange}
                    />
                  </div>
      
                  <button className='btn btn-lg btn-primary btn-block btn-grad' type='submit' onClick={this.handleLogin}>LoginSignUp</button>
                </form>
                
                <p className='light-font muted no-account mb-0'>NoLoginAcc
                  <Link className='pl-1 signup-link' to='/signup' >SignUpLink</Link>
                </p>

                <div className='forgot-password-link mb-4 mt-3'>
                    <Link className='light-font' to='/resetpassword' >ForgotPassword</Link>
                  </div>

                
              </div>
            </StyledLogin>
        )
    }
}

const StyledLogin = styled.div`
  padding-top: 10px;

  @media (max-width: 767px) {
    max-width: 345px;
    .language-picker {
      margin: -1px 0px;
    }
  }

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
    
  }
`

export default Login