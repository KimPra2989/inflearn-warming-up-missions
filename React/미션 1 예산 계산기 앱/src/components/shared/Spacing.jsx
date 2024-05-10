function Spacing({ direction = 'column', size }) {
  const boxStyle = {
    [direction == 'column' ? 'height' : 'width']: size,
  }
  if (direction == 'row') {
    boxStyle.display = 'inline-block'
  }
  return <div style={boxStyle}></div>
}

export default Spacing
