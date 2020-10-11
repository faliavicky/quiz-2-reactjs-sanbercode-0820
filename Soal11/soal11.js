function filterBooksPromise(colorful, amountOfPage){
    return new Promise (function(resolve, reject){
        var books = [
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemono", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 300, isColorful: false}
        ]
        if (amountOfPage > 0) {
            resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason);
        }
    });

    function ask(){
        books
        .then(function(fulfiled){
            console.log(fulfiled);
        })
        .catch(function(error){
            console.log(error.message);
        })
    }
}



console.log(filterBooksPromise(true, 40));