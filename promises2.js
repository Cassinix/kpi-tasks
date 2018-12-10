let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // Всё выполнено
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
