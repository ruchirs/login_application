import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

interface Props {
    
}

interface State {
    
}

class Dashboard extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
        
    }
  }

  

  public render () {
   
    return (
        <StyledDashboard>
            <Header />

            <StyledContent>
                <div>
                    <h1>Welcome, this is your dashboard.</h1>
                </div>
            </StyledContent>
        </StyledDashboard>  
        )
  }
}

const StyledDashboard = styled.div`
height: 100vh;
width: 100vw;
`

const StyledContent = styled.div`
    
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding 5rem 1rem;
`

export default Dashboard
