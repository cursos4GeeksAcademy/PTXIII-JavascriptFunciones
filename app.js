console.log("Ejecutando ciclo while")
let limite =0
while(true){
  console.log("Hola");
  if(limite==10){
    break;
  }
  limite ++;
}
console.log("Ejecutando ciclo for")
//inicio; condicion; avance
for(let i=5;i<1000;i*=5){
  console.log(i);
}

console.log("Ejecutando for in ")
let estudiante = { //esto es un objeto
  nombre: "Andrea",
  edad: 30,
  estudios: "4Geeks Academy",
  stack : ['html', 'css', 'js', 'expressJS', 'Typescript', 'TypeORM']
}
for(key in estudiante){
  //quiero solamente imprimir el arreglo stack en la posicion 0 ('HTML')
  if(key=='stack'){
    console.log(estudiante[key][0])
  }

}
console.log("Funciones :D ")
// parametros, argumentos
function SII(Documento) {
    //envia datos al SII
    /*
    aca hago cosas magicas en muchas lineas de codigo y le manda info al SII
    */
    console.log(Documento + " enviadas :D");
  }
// parametros, argumentos
console.log("Ejecutando una funcion estándar", SII("Facturas"))

let variable = function (){
    console.log("Hola desde una funcion anonima almacenada en una variable")
}
const variable2 =  ()=>{
    console.log("Hola desde una funcion flecha almacenada en una constante")
}
console.log("las siguientes funciones se almacenan en variables o constantes...")
variable()
variable2()