//        ****    done

// one way to do it
const arg1 = process.argv[2];
const arg2 = process.argv[3];
if (arg1 === arg2) {
    console.log(true);
} else {
    console.log(false);
}

// another way
// console.log(arg1 === arg2 ? true : false);

// another way
// console.log(arg1 === arg2);


// const compareArgsArrow = (arg1, arg2) => {
//     if (arg1 === arg2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// // returns array of CLI arguments
// console.log(process.argv);

// // arguments pased from the CLI are accessed by index
// console.log(process.argv[1]);