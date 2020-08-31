import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

interface Props {
    
}

interface State {
    userInfo: {
        firstname: string
        lastname: string,
        email: string,
        password: string,
        file: string
    }
}

interface UserInformation {
    firstname: ''
    lastname: ''
    password: ''
    confirmpassword: ''
    email: ''
    file: ''
}

class Submission extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
        userInfo: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            file: ''
        }
    }

    this.getUserInfo = this.getUserInfo.bind(this)
  }

  componentDidMount () {
    this.getUserInfo()
  }

  public getUserInfo () {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') as any)
    console.log('userInfo', userInfo)
    if (userInfo) {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                email: userInfo.email,
                password: userInfo.password,
                file: userInfo.file
            }
        })
    }
  }

  

  public render () {
   
    return (
        <StyledSubmission>
            <Header />

            <StyledInformation>

                <div className='submission-style'>
                    <h1>Your Submission:</h1>
                </div>

            </StyledInformation>

        </StyledSubmission>  
        )
  }
}

const StyledInformation = styled.div`
@media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  
    & .submission-style {
        min-width: 375px;
        padding: 30px;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
      }
}
`

const StyledSubmission = styled.div`


`

export default Submission
