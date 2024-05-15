function Input({ label, type, placeholder, color, state, setState }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }
  const labelStyle = {
    color,
  }
  const inputStyle = {
    borderWidth: '0 0 1px',
    borderColor: color,
    outline: 'none',
    padding: '6px',
    marginTop: '6px',
    height: '30px',
    boxSizing: 'border-box',
  }

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        id="category"
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      ></input>
    </div>
  )
}

export default Input
