console.clear();

const parallel = (tasks, done) => {
    const results = [];
    if (!tasks || !tasks.length) {
        done(results);
    }
    
    let pending = tasks.length;
    const runner = (key) => (result) => {
        results[key] = result;
      // we hope it is run only once
      if(pending-- <= 1) {
          done(results)
      }
    }
    tasks.forEach(function (task, i) {
      task(runner(i))
    })
};

const fn = i => cb => setTimeout(() => {
      console.log(i);
    cb(i);
}, 1000)

parallel([
    fn(1),
  fn(2),
  fn(3)
], (result) => {
    console.log('done', result)
})
