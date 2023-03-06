import classes from './Card.module.css'
const Card = (props) => {
    const cardClasses = `${classes.card} w-48 my-40`;

    return (
        // <div className={cardClasses}>{props.children}</ div>
        <div className={cardClasses}>{props.children}</ div>
    )
}
export default Card