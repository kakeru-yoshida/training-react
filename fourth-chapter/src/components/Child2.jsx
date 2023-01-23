import { memo } from "react";

const style = {
  height: "51px",
  backgroundColor: "linghtgray",
}

export const Child2 = memo(() => {
  console.log("Child2レンダリング")

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  )
})