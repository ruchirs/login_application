import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/Form/TextInput'
import { Link } from 'react-router-dom'

interface Props {
    
}

interface State {
    firstname: string
    lastname: string
    email: string
    password: string
    confirmpassword: string
    formErrors: string[]
    formError: boolean
    formErrorMsg: string
    type: string
    file: string | ArrayBuffer | null
    imagePreviewUrl: string | ArrayBuffer | null
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
        formErrors: [],
        formError: false,
        formErrorMsg: '',
        type: 'password',
        file: '',
        imagePreviewUrl: ''
    }

    this.inputCheck = this.inputCheck.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.verifyUserEmail = this.verifyUserEmail.bind(this)
    this.verifyUserPassword = this.verifyUserPassword.bind(this)
    this.showHide = this.showHide.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  public verifyUserEmail (email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  public verifyUserPassword (password: string) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    return re.test(String(password))
  }

  public handleSignUp (e: React.MouseEvent | React.FormEvent) {
    e.preventDefault()
    console.log('this.state', this.state)
    const userInfo: any = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      file: this.state.imagePreviewUrl
    }

    let errorCount: any[] = []
    Object.keys(userInfo).map((key: string) => {
      if (!userInfo[key]) errorCount.push(key)
      return 0;
    })

    this.setState({ formErrors: errorCount }, () => {
        if (this.state.formErrors.length) {
          this.setState({ formError: true, formErrorMsg: 'Please fill in the missing fields' })
        } else if (!this.verifyUserEmail(this.state.email)) {
          this.setState({ formError: true, formErrorMsg: 'Please enter a valid email address', formErrors: ['email'] })
        } else if (!this.verifyUserPassword(userInfo.password)) {
          this.setState({ formError: true, formErrorMsg: `8 characters, 1 uppercase, number and special character.`, formErrors: ['password'] })
        } else if (userInfo.password !== userInfo.confirmpassword) {
          this.setState({ formError: true, formErrorMsg: 'Passwords do not match. Please re-enter', formErrors: ['confirmpassword'] })
        } else if (userInfo.file === '') {
          this.setState({ formError: true, formErrorMsg: 'Please upload your ID', formErrors: ['file-upload'] })
        } else {
          this.setState({
            formErrorMsg: ''
          })
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          window.location.href = '/dashboard'
        }
      })
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

  public showHide(e: React.MouseEvent<HTMLInputElement>): void{
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })  
  }

  public handleImageChange(e: any) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  public render () {
   const { formErrors, formErrorMsg, imagePreviewUrl } = this.state
    return (
        <StyledRegister>
            <div className='signup-card' >
            <form className='pt-0' onSubmit={this.handleSignUp}>
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
                        fieldError={formErrors.includes('firstname')}
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
                        fieldError={formErrors.includes('lastname')}
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
                    fieldError={formErrors.includes('email')}
                />
                <label htmlFor='password'>Email</label>
                </div>
                
                <div className='form-label-group'>
                <TextInput
                    type={this.state.type}
                    id='password'
                    name='password'
                    addClassName='form-control'
                    placeholder='Password'
                    isRequired
                    onChange={this.inputCheck}
                    fieldError={formErrors.includes('password')}
                />
                { this.state.password && 
                    <span className="password_show" onClick={this.showHide}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
                }
                <label htmlFor='password'>Password</label>
                </div>
                <div className='form-label-group'>
                <TextInput
                    type={this.state.type}
                    id='confirmpassword'
                    name='confirmpassword'
                    addClassName='form-control'
                    placeholder='Confirm Password'
                    isRequired
                    onChange={this.inputCheck}
                    fieldError={formErrors.includes('confirmpassword')}
                />
                <label htmlFor='password'>Confirm Password</label>
                </div>
                <div>
                    <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <div className="imgPreview">
                        {imagePreviewUrl ? <img className='img-styles' alt='preview' src={imagePreviewUrl as string} /> : 'Please upload an Image for Preview'}
                    </div>
                    <label htmlFor='file-upload'></label>
                </div>
                <button className='btn btn-primary btn-lg btn-grad' type='submit' onClick={this.handleSignUp}>SignUp</button>
            </form>
            {
                (formErrorMsg) && <div className='alert alert-danger text-center mt-3 font-style'>{(formErrorMsg)}</div>
            }

            <p className='light-font muted no-account mt-2'>Already have an account?
                <Link className='pl-1 signup-link' to='/login' >Login!</Link>
            </p>
            
            </div>
        </StyledRegister>  
        )
  }
}

const StyledRegister = styled.div`
padding-top: 10px;
.font-style {
    font-size: 12px;
}

.img-styles {
    width: 100%;
    height: 100%
}

.imgPreview {
  text-align: center;
  margin: 5px 0px;
  height: 200px;
  width: 500px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 5px solid gray;
  border-bottom: 5px solid gray;
}

.password_show{
      cursor: pointer;
      position: absolute;
      bottom: 11px;
      height: 16px;
      right: 0;
      color: black;
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: .8em;
    }

@media (max-width: 767px) {
    max-width: 345px;
    margin: 0 auto;

    .imgPreview {
        width: 330px;
        height: 200px;
    }
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
