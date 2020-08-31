import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/Form/TextInput'
import { Link } from 'react-router-dom'
// import logo from '../assets/icon/login-icon.jpg'

interface Props {

}

interface State {
    email: string
    password: string
    formErrors: string[]
    formError: boolean
    formErrorMsg: string
}

class Login extends React.Component <Props, State> {
    
    public constructor (props: Props){
        super(props)
        this.state = {
            email: '',
            password: '',
            formError: false,
            formErrors: [],
            formErrorMsg: ''
        }

        this.verifyUserEmail = this.verifyUserEmail.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    public verifyUserEmail (email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    public handleLogin (e: React.MouseEvent | React.FormEvent) {
        e.preventDefault()
        let userInfo = JSON.parse(localStorage.getItem('userInfo') as any)
        const formData: any = {
        email: this.state.email,
        password: this.state.password
        }

        let errorArr: string[] = []
        Object.keys(formData).map((key: string) => {
            if (!formData[key]) errorArr.push(key)
            return 0;
        })

        if (this.state.formErrors.length) {
            this.setState({ formError: true, formErrorMsg: 'Please complete the missing fields' })
        } else if (!this.verifyUserEmail(this.state.email)) {
            this.setState({ formError: true, formErrorMsg: 'Please complete the missing fields', formErrors: ['email'] })
        } else {
            if ((formData.email === userInfo.email) && (formData.password === userInfo.password)) {
                window.location.href = '/dashboard'
            }
        }
    }

    public inputChange (e: React.ChangeEvent<HTMLInputElement>): void {
        e.persist()
        let keys = ['email', 'password']
        let target = Reflect.get(e, 'target')
        console.log('keys', keys)
        console.log('target', target)

        let stateChange = {}

        keys.forEach(thisKey => {
        if (Reflect.get(target, 'id') === thisKey) {
            Reflect.set(stateChange, thisKey, Reflect.get(target, 'value'))
        }
        })

        this.setState(stateChange)
    }

    render(){
        return(
            <StyledLogin className='Login'>
              <div className='login-card'>
                <form className='pt-0' onSubmit={this.handleLogin}>
                  
                  <div className='form-label-group mt-4'>
                    <TextInput
                      type='email'
                      id='email'
                      name='email'
                      addClassName='form-control'
                      placeholder='Email Address'
                      isRequired
                      onChange={this.inputChange}
                    />
                    <label htmlFor='email'>Email Address</label>
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
                    <label htmlFor='password'>Password</label>
                  </div>
      
                  <button className='btn btn-lg btn-primary btn-block btn-grad mt-3' type='submit' onClick={this.handleLogin}>Login</button>
                </form>
                <div className='forgot-password-link mb-4 mt-3'>
                    <Link className='light-font' to='/resetpassword' >ForgotPassword</Link>
                </div>
                
                <p className='light-font muted no-account mb-0'>Not yet Registered?
                  <Link className='pl-1 signup-link' to='/signup' >Sign Up!</Link>
                </p>


                
              </div>
            </StyledLogin>
        )
    }
}

const StyledLogin = styled.div`
  padding-top: 10px;

  @media (max-width: 767px) {
    max-width: 345px;
    margin: 0 auto;
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
    
    & .login-card {
      min-width: 375px;
      padding: 30px;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: .25rem;
    }
  }
`

export default Login