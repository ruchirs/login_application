import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/Form/TextInput'

interface Props {
    
}

interface State {
    page: string
}

class SignUp extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
      page: 'SignUp'
    }
  }

  public handleSignUp () {

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
                        placeholder='First name'
                        isRequired
                    />
                    </div>
                </div>
                <div className='col pl-0'>
                    <div className='form-label-group'>
                    <TextInput
                        id='lastname'
                        name='lastname'
                        type='text'
                        addClassName='form-control'
                        placeholder='Last name'
                        isRequired
                    />
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
                />
                </div>
                
                <div className='form-label-group'>
                <TextInput
                    type='password'
                    id='password'
                    name='password'
                    addClassName='form-control'
                    placeholder='Password'
                    isRequired
                />
                </div>
                <div className='form-label-group'>
                <TextInput
                    type='password'
                    id='confirmpassword'
                    name='confirmpassword'
                    addClassName='form-control'
                    placeholder='Confirm Password'
                    isRequired
                />
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
