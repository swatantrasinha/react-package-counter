import React,{ReactNode} from 'react'

type ButtonPropsType= {
    children: ReactNode
}
const Button = ({children}: ButtonPropsType) => {
    const buttonStyle= {
        padding: '10px 20px',
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pomnter",
        backgroundColor: "grey",
        color: "white",
        border: "none"
    }
  return (
    <button style={buttonStyle}>
      {children}
    </button>
  )
}

export {Button}
