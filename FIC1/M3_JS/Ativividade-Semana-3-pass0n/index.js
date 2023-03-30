let p = 0
let i = 0
for (n = 1; n <= 20; n++) {
  let q = n * n
  console.log(q)
  if (n % 2 == 0) {
    p+=q
  } else {
    i+=q
  }
}
console.log("Soma total de pares:", p)
console.log("Soma total de ímpares:", i)
