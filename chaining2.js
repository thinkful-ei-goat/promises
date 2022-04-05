function myPromise() {
    let arr = ['Mercy', 'Justin', 'Jon', 'Tyla', 'Joey'];
    return Promise.resolve(arr);
}

function promisedPromise() {
    return myPromise().then(data => {
        console.log(data);
        data.push('Elric');
        return data;
    }).then(bob => {
        console.log('Appended data', bob);
        return bob;
    });
}

promisedPromise().then(data=>console.log('returned from promisedPromise',data));