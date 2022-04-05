let greeting = process.argv[2];

tellMeSomething(greeting).then(something => { //always tied to promise.resolve
    console.log(something);
}).catch(err => console.log(`Error: ${err}`));// always tied to promise.reject +


function tellMeSomething(message) {
    console.log(message);
    if (message) {
        return Promise.resolve(`Here i am telling you something`);
    }
    return Promise.reject('You didnt say anything');  //throwing an error
}








