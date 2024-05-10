function InputContainer({ children }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: '16px',
  }
  return <div style={containerStyle}>{children}</div>
}

export default InputContainer
