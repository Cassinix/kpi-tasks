console.clear();

const sequential = (tasks, done) => {
  const results = [];
  if (!tasks || !tasks.length) {
    done(results);
  }

  const length = tasks.length,
  runner = (key) => (result) => {
    results[key] = result;
    key++;
    if (key < length) {
      tasks[key](runner(key));
    } else {
      done(results);
    }
  }

  tasks[0](runner(0))
};

const fn = i => cb => setTimeout(() => {
  console.log(i);
  cb(i);
}, 1000)

sequential([
  fn(1),
  fn(2),
  fn(3)
], (result) => {
  console.log('done', result)
})
