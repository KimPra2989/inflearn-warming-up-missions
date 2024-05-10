function Select({ label, color, options, state, setState }) {
  const labelStyle = {
    color,
  }

  const selectStyle = {
    padding: '6px',
    height: '30px',
    width: '80px',
    marginTop: '6px',
    outline: 'none',
  }

  return (
    <div>
      <label htmlFor="category" style={labelStyle}>
        {label}
      </label>
      <select
        style={selectStyle}
        id="category"
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      >
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
