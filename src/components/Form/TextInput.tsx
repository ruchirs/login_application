import React from 'react'
import styled from 'styled-components'

interface TextInputProps {
  colSize?: string
  id: string
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
  fieldError?: boolean
  fieldWarning?: boolean
  isRequired?: boolean
  addClassName?: string
}

class TextInput extends React.Component<TextInputProps> {
  public render () {
    const {
      colSize,
      id,
      name,
      onChange,
      placeholder,
      type,
      fieldError,
      fieldWarning,
      isRequired,
      addClassName
    } = this.props

    let colClass = colSize
      ? 'col-sm-' + colSize
      : 'col-sm-12'
    let moreClasses = addClassName ? addClassName : ''
    return (
      <StyledTextInput
        type={type}
        id={id}
        name={name}
        className={'form-control ' + colClass + ' ' + moreClasses + ' ' + (fieldError ? 'error-style' : '') + ' ' + (fieldWarning ? 'warning-style' : '')}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
      />
    )
  }
}

const StyledTextInput = styled.input`
  &.error-style {
    border: 1px solid red;
  }
  &.warning-style {
    border: 1px solid var(--warning);
  }
  &:focus {
    outline: #2DC3CA auto 5px;
  }
`

export default TextInput