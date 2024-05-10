import { useState } from 'react'

function Button({ label, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const buttonStyle = {
    display: 'block',
    width: '200px',
    padding: '10px',
    backgroundColor: isHovered ? '#4da6ff' : '#007bff',
    color: '#fff',
    border: 'none',
    borderEadius: '5px',
    cursor: 'pointer',
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      {label}
    </button>
  )
}

export default Button
