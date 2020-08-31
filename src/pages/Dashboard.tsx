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
        </StyledDashboard>  
        )
  }
}

const StyledDashboard = styled.div`

`

export default Dashboard
