import React from 'react'

function ErrorMessage({children}) {
  return (
    <div
    style={{
        
        textAlign: "center",
        color: "white"
    }}
    >
        {children}
    </div>
  )
}

export default ErrorMessage