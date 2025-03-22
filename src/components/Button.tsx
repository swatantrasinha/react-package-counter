import React,{ReactNode} from 'react'

type ButtonPropsType= {
    children: ReactNode,
    onClick: () => void,
}
const Button = ({children, onClick}: ButtonPropsType) => {
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
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export {Button}
