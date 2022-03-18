// >>>>> 4 - 1 ----------------------------------------------
var num1 = Number(prompt("Ingrese el primer valor"));
console.log("El primer valor es " + num1);
var num2 = Number(prompt("Ingrese el segundo valor"));
console.log("El segundo valor es " +num2);

if (num1 > num2) {
	console.log("El numero " + num1 + " es mayor que el numero " + num2);
	alert("El numero " + num1 + " es mayor");
};

if (num1 < num2) {
	console.log("El numero " + num1 + " es menor que el numero " + num2);
	alert("El numero " + num2 + " es mayor");
};

if (num1 == num2) {
	console.log("El numero " + num1 + " es igual al numero " + num2);
	alert("Los numeros son iguales");
};


// >>>>> 4 - 2 -----------------------------------------
var numero = 5 //ingrese el numero
var comprobacion = numero%2

if (comprobacion == 1) {
	console.log("El numero " + numero + " es impar.")
}

else {
	console.log("El numero " + numero + " es par.")
};

// >>>>> 4 - 3 -----------------------------------------
var ganeLaCarrera = false

if (ganeLaCarrera == true) {

	console.log("Ganaste")
}
else {
	console.log("Perdiste")
};

// >>>>> 4 - 4 ------------------------------------------
var posicionEnLaCarrera = 6

if (posicionEnLaCarrera == 1) {
	console.log("FELICITACIONES, SALISTE 1ERO")
}
else if (posicionEnLaCarrera == 2) {
	console.log("Te falto poquito para ganar")
}
else if (posicionEnLaCarrera == 3) {
	console.log("Sos un orgullo para tu familia")
}
else if (posicionEnLaCarrera > 3) {
	console.log("Volve a tu casa")
}
else {
	console.log("No tires fruta")
};

//>>>>> 4 - 5 -------------------------------------------
var posicionEnLaCarrera2 = 6

if (posicionEnLaCarrera2 == 1) {
 var resultadoCarrera = "felicitaciones, saliste 1ero"
}
else if (posicionEnLaCarrera2 == 2) {
	var resultadoCarrera = "te falto poquito para ganar"
}
else if (posicionEnLaCarrera2 == 3) {
	var resultadoCarrera = "sos un orgullo para tu familia"
}
else if (posicionEnLaCarrera2 > 3) {
	var resultadoCarrera = "volve a tu casa"
}
else {
	var resultadoCarrera = "no tires fruta"
};

console.log(resultadoCarrera);

// >>>>> 4 - 6 -----------------------------------------
var subTotalFactura = 1000

if (subTotalFactura > 1000) {
	var totalFactura = subTotalFactura - (subTotalFactura / 5)
}
else {
	var totalFactura = subTotalFactura
};

console.log("El subtotal es de $" + subTotalFactura + " y el valor final es de $" + totalFactura);

// >>>>> 4-7 --------------------------------------------
var totalVentas = 1500
var codigoVendedor = 250

if (codigoVendedor < 100) {
	var comision = ((totalVentas / 100) * 30)
}
else if (100 <= codigoVendedor && codigoVendedor <= 200) {
	var comision = ((totalVentas / 100) * 20)
}
else if (codigoVendedor > 200) {
	var comision = ((totalVentas / 100) * 10)
};
console.log("El total de ventas fue de $" + totalVentas + ". El codigo del vendedor es: " + codigoVendedor + " y su comision es de $" + comision);


// >>>>> 4-8 --------------------------------------------
var d = 1

if (d == 1) {
	console.log("Lunes")
}
else if (d == 2) {
	console.log("Martes")
}
else if (d == 3) {
	console.log("Miercoles")
}
else if (d == 4) {
	console.log("Jueves")
}
else if (d == 5) {
	console.log("Viernes")
}
else if (d == 6) {
	console.log("Sabado")
}
else if (d == 7) {
	console.log("Domingo")
};


// >>>>> 4-9 --------------------------------------------
var grupo = 5

if (grupo < 8) {
	var entrada = 1.5
}
else if (grupo >= 8) {
	var entrada = 0.5
};
var totalEntradas = grupo * entrada
console.log("El grupo esta compuesto por " + grupo + " y el valor total de las entradas es de $" + totalEntradas);

// >>>>> 4-10 -------------------------------------------
var subTotalFarmacia = 101

if (subTotalFarmacia <= 100) {
	var totalFarmacia = subTotalFarmacia
}
else if (subTotalFarmacia > 100) {
	var totalFarmacia = ((subTotalFarmacia / 100) * 85)
};
console.log("El total de la compra es de $" + totalFarmacia);