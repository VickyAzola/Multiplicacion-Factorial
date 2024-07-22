let numUsuario = parseInt(prompt("ingresa el numero deseado entre 1 y 20: "))

function validarNum(num) {
  if (num >= 1 && num <= 20) {

    const tabla = function (num) {
      let tabla = ""

      for (let i = 1; i <= num; i++) {
        tabla += `<li>${i} X ${num} = ${i*num}</li>`
      }
      return tabla
    }
    
    const factorial = function (num) {
      let liFactorial = ""
      let factor = 1

      for (let i = factor; i <= num; i++) {
        liFactorial += `<li>Factorial de ${i} es: ${factor *= i}</li>`
      }
      return liFactorial
    }
    
    document.write(`
      <h2>Tabla de Multiplicar del ${num}</h2>
      <ul>
        ${tabla(num)}
      </ul>
      <h2>Factorial del número ${num}</h2>
      <ul>
        ${factorial(num)}
      </ul>
    `)

  } else {
    alert("número fuera del rango")
  }
} 

validarNum(numUsuario)

