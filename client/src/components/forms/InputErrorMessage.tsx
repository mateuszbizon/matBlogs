import React from 'react'
import { FieldError } from 'react-hook-form'

type InputErrorMessageProps = {
    errors?: FieldError
}

function InputErrorMessage({ errors }: InputErrorMessageProps) {
  return (
    <span className={`input-error-message ${errors && "input-error-message-show"}`}>
        {errors ? errors.message : "error"}
    </span>
  )
}

export default InputErrorMessage