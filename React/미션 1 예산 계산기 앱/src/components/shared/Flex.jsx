function Flex({ children, direction, justify = 'center', align = 'center', gap }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
  }
  return <div style={containerStyle}>{children}</div>
}

export default Flex
