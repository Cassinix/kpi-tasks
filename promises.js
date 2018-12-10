function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log('resolved');
    }, ms);
  });
  
 const promise = delay(2000);
 promise.then(() => console.log(1));
 promise.then(() => console.log(2));
 promise.then(() => console.log(3));
  
