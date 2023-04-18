import classes from './ExploreSmall.module.css'
const ExploreSmall = ({children}) => {
  return (
   <div className={classes.n1}>
    <div className={classes.n2}>
      <h1 className={classes.te}>Find Images</h1>
      {children}
    </div>
    
   </div>

  )
}
export default ExploreSmall