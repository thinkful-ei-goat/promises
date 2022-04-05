let completed = false;
let opSys = process.argv[2];

function turnOnComputer(os) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            completed = true;
            if (os === 'Windows') {
                resolve(completed);
            } else {
                reject('You should get Windows');
            }
        }, 2500);
    });
}

console.log("Turning on your computer...");

turnOnComputer(opSys).then(completed => {
    if (completed) {
        console.log("Your computer is on!");
    } else {
        console.log("Something went wrong!");
    }
}).catch(err=>console.log(err))
