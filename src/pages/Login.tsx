import React from 'react'
import styled from 'styled-components'

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

    render(){
        return(
            <h1>{this.state.page}</h1>
        )
    }
}

export default Login