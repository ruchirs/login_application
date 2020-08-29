import React from 'react'

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

  public render () {
   
    return (
        <h1>{this.state.page}</h1>    
        )
  }
}

export default SignUp
