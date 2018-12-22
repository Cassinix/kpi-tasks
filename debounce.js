function dbtime(func, delay) {
    let time = new Date().getTime();

    return function (...args) {
      let callTime = new Date().getTime();

      if (callTime - time > delay) {
        func.apply(this, args);
        time = new Date().getTime();
      };

    };
  };


  function debounce(func, delay) {
    let timeout = null;

    return function (...args) {
      const later = () => {
        func.apply(this, args);
        timeout = null;
      }

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(later, delay);
    };
  };

  const fn = (i) => {console.log(i);};

  const debouncedfn = debounce(fn, 50);
  //const debouncedfn = dbtime(fn, 50);

  debouncedfn(0);

  let i = 1;
  while (i < 100) {
    i++;
    let j = 0;
    while (j < 10000) {
      debouncedfn(i);
      j++;
    }
  };

  setTimeout( function() { debouncedfn(101) }, 200);
  setTimeout( function() { debouncedfn(102) }, 500);
