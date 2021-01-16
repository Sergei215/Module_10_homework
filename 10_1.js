let a=prompt('Введите значение')

let b=+a

console.log(b)
console.log(typeof(b))

if (isNaN(b)) {
  console.log("Упс, кажется, вы ошиблись")
} else {
  let d = (b%2 == 0) ? "Четный" : "Не четный"
  console.log(d)
}