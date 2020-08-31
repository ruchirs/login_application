import React from 'react'
import styled from 'styled-components'

interface Props {

}

interface State {
    userInfo: {
        firstName: ''
    }
}

class Header extends React.Component<Props, State>{

    public constructor (props: Props){
        super(props)
        this.state = {
            userInfo: {
                firstName: ''
            }
        }
    }

    render() {
        return(
            <StyledHeader>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ul-style">
                    <li className="nav-item active">
                        <a className="nav-link" href="/dashboard">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/submission">Submission</a>
                    </li>
                    <li className="nav-item logout">
                        <a className="nav-link" href="/login">Logout</a>
                    </li>
                    </ul>
                </div>
            </nav>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div`
    .logout {
        margin-left: auto;
    }

    .ul-style {
        width: 100%;
    }
`

export default Header