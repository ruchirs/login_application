import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/Form/TextInput'

interface Props {
    
}

interface State {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmpassword: string,
    formFieldErrors: string[],
    formError: boolean,
    formErrorMsg: string
}

class SignUp extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        formFieldErrors: [],
        formError: false,
        formErrorMsg: ""
    }

    this.inputCheck = this.inputCheck.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  public handleSignUp (e: React.MouseEvent | React.FormEvent) {
    e.preventDefault()
    console.log('this.state', this.state)
    const formData: any = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword
    }
  }

  public inputCheck (e: React.ChangeEvent<HTMLInputElement>): void {
    // this.props.setSignupErr("")
    e.persist()
    let keys = ['firstname', 'lastname', 'email', 'password', 'confirmpassword']
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

  public render () {
   
    return (
        <StyledRegister>
            <div className='signup-card' >
            <form className='pt-0' onSubmit={this.handleSignUp}>
                <span>
                Sign Up
                </span>
                <div className='row mt-4'>
                <div className='col'>
                    <div className='form-label-group'>
                    <TextInput
                        id='firstname'
                        name='firstname'
                        type='text'
                        addClassName='form-control'
                        placeholder='First Name'
                        isRequired
                        onChange={this.inputCheck}
                    />
                    <label htmlFor='password'>First Name</label>
                    </div>
                </div>
                <div className='col pl-0'>
                    <div className='form-label-group'>
                    <TextInput
                        id='lastname'
                        name='lastname'
                        type='text'
                        addClassName='form-control'
                        placeholder='Last Name'
                        isRequired
                        onChange={this.inputCheck}
                    />
                    <label htmlFor='password'>Last Name</label>
                    </div>
                </div>
                </div>
                <div className='form-label-group'>
                <TextInput
                    type='email'
                    id='email'
                    name='email'
                    addClassName='form-control'
                    placeholder='Email address'
                    isRequired
                    onChange={this.inputCheck}
                />
                <label htmlFor='password'>Email</label>
                </div>
                
                <div className='form-label-group'>
                <TextInput
                    type='password'
                    id='password'
                    name='password'
                    addClassName='form-control'
                    placeholder='Password'
                    isRequired
                    onChange={this.inputCheck}
                />
                <label htmlFor='password'>Password</label>
                </div>
                <div className='form-label-group'>
                <TextInput
                    type='password'
                    id='confirmpassword'
                    name='confirmpassword'
                    addClassName='form-control'
                    placeholder='Confirm Password'
                    isRequired
                    onChange={this.inputCheck}
                />
                <label htmlFor='password'>Confirm Password</label>
                </div>
                <button className='btn btn-primary' type='submit' onClick={this.handleSignUp}>SignUp</button>
            </form>
            
            </div>
        </StyledRegister>  
        )
  }
}

const StyledRegister = styled.div`
padding-top: 10px;

@media (max-width: 767px) {
    max-width: 345px;
    margin: 0 auto;
  }

@media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  
    & .signup-card {
        min-width: 375px;
        padding: 30px;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
      }
}
`

export default SignUp
