export const ColoredMessage = (props) => {
  const {color, children} = props
  const contentStyle = {
    color,
    fontSize: "22px"
  }

  return(
      <p style={contentStyle}>{children}</p>
  )
}