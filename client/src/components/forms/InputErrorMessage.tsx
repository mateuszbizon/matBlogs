import React from 'react'
import { FieldError } from 'react-hook-form'

type InputErrorMessageProps = {
    errors?: FieldError
}

function InputErrorMessage({ errors }: InputErrorMessageProps) {
  return (
    <span className={`mt-1 text-error ${errors ? "visible" : "invisible"}`}>
        {errors ? errors.message : "error"}
    </span>
  )
}

export default InputErrorMessage