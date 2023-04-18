// exporting day date & month
// module.exports.getDate = getDate;
// function getDate() {

//     return day
// }

const DateAndDay = () => {
    let today = new Date()
    let options = { weekday: "long", day: "numeric", month: "long" }
    let day = today.toLocaleDateString("en-IN", options)

    return (
        <div>
            {day}
        </div>
    )

}
export default DateAndDay

// 2nd function to export day only
// module.exports.getDay = getDay;
// function getDay() {
//     let today = new Date()

//     let options = { weekday: "long" }

//     let day = today.toLocaleDateString("hi-IN", options)
//     return day
// }

