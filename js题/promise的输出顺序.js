new Promise((resolve, reject) => {
  console.log(1)
  resolve()
})
.then(() => {
  console.log(2)
  new Promise((resolve, reject) => {
      console.log(3)
      resolve()
  })
    .then(() => {
      console.log(4)
      new Promise((resolve, reject) => {
          console.log(5)
          resolve();
        })
        .then(() => {
          console.log(7)
        })
        .then(() => {
          console.log(9)
        })
    })
    .then(() => {
      console.log(8)
    })
})
.then(() => {
  console.log(6)
})
// 1 2 3 4 5 6 7 8 9