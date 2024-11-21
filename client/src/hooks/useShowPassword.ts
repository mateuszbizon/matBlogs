import { useState } from 'react'

function useShowPassword() {
    const [passwordShow, setPasswordShow] = useState(false)

    function togglePasswordShow() {
        setPasswordShow(prev => !prev)
    }

  return {
    togglePasswordShow,
    passwordShow,
  }
}

export default useShowPassword