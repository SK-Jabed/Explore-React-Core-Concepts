// export default function Todo({task, isDone}) {
//     task = "I will sleep";
//     return (
//         <li>Task: {task}</li>
//     )
// }


// Conditional Rendering - Option: 1 (if, else conditions)
// export default function Todo({task, isDone}) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work on: {task}</li>
//     }
//     // task = "I will sleep";
//     // return (
//     //     <li>Task: {task}</li>
//     // )
// }


// Conditional Rendering - Option: 2 (only if condition)
// export default function Todo({task, isDone}) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }


// Conditional Rendering - Option: 3 (Ternary)
// export default function Todo({task, isDone}) {
//     return (
//         <li>{isDone ? "Finished" : "Work on"} : {task}</li>
//     )   
// }


// Conditional Rendering - Option: 4 (&&)
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone && ":Done"}</li>
//     )   
// }


// Conditional Rendering - Option: 5 (||)
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone || ":Do It"}</li>
//     )   
// }


// Conditional Rendering - Option: 6 (using variable)
export default function Todo({task, isDone}) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        listItem = <li>Work On: {task}</li> 
    }
    return listItem;
}