import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import profileIcon from '../assets/icon/profile-icon.png'

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
   const { userInfo } = this.state
    return (
        <StyledSubmission>
            <Header />

            <StyledInformation>

            <div className="container">
            <div className="profile-card">
                <div className="card-header">
                    <img className="profile-image" src={profileIcon} alt="profile image" />
                    <div className="profile-name">{userInfo.firstname + " " + userInfo.lastname}</div>
                    <div className="profile-email">{userInfo.email}</div>
                    
                    <div className="divider">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="card-body">
                    <div className="contacts">
                        <div className="title">Uploaded Image</div>
                        <div className="imgPreview">
                            {userInfo ? <img className='img-styles' alt='preview' src={userInfo.file as string} /> : 'Please upload an Image for Preview'}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

            </StyledInformation>

        </StyledSubmission>  
        )
  }
}

const StyledInformation = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Nunito';
}

body {
    background-color: #EEE;
}

.container {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.profile-card {
    position: relative;
    width: 500px;
    background-color: #FFF;
    border-radius: .5rem;
    overflow: hidden;
    transition: all .25s ease;

    &:hover {
        box-shadow: 0px 5px 20px rgba(0, 0, 0, .15);
    }

    .card-header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2rem;
        color: #FFF;
        background: linear-gradient(105deg,#0A6DDF,#059AA2);
        border-bottom: none;

        .profile-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
            border: 5px solid #FFF;
        }

        .profile-name {
            margin-top: .5rem;
            font-size: 2rem;
            font-weight: 700;
        }

        .profile-email {
            font-size: 1.05rem;
            color: #DDD;
        }
        
        .divider {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
        
            svg {
                position: relative;
                display: block;
                width: calc(150% + 1.5px);
                height: 50px;
                
                path {
                    fill: #FFFFFF;
                }
            }
        }
    }

    .card-body {
            padding: 1.25rem 0rem;
        .title {
            color: #666;
            margin-bottom: 1rem;
            text-align: center;
            font-size: 1.05rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
}

.contact-icon {
    width: 100%;
    height: 100%;

    path {
        fill: #FFF;
    }
}

.img-styles {
    width: 100%;
    height: 100%
}

@media (min-width: 768px) {
    position: absolute;
    padding-top: 20%;;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}


@media (max-width: 767px) {
.imgPreview {
  text-align: center;
  margin: 5px 0px;
  height: 200px;
  width: 320px;
}
}
`

const StyledSubmission = styled.div`


`

export default Submission
