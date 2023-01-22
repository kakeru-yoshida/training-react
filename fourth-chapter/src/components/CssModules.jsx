import classes from "./CssModules.module.scss"

export const CssModules = () => {
  return(
      <div className={classes.container}>
        <p className={classes.title}>CSSの Modulesです</p>
        <button  className={classes.button}>ぼたん</button>
      </div>
  )
}