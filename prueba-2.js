Object.prototype.toString 
 
//clases 

//1 una clase es una plantilla 
//2 posee atributos y metodos
// un objeto es una instacion de una clase 
// no es posible declarar objetos antes de declarar las clases
//no se aplica el preceso de hostign 
//las clases tiene nombre, atributos y metodos 
class persona{

 //  email = 'valor defaul email';//atrivuto de nuesto objetos 
   static contadorPersona= 0; // atributo de la clase 

   static get MAX_OBJ(){
   return 5;
}

constructor(nombre,apellido){
this._nombre=nombre;
this._apellido=apellido;

if(persona.contadorPersona < persona.MAX_OBJ){
   this.idPersona = ++persona.contadorPersona; 
}
else {
   console.log("se a superado lo maximo de objetos ")
}
}

get nombre(){
   return this._nombre;

}

set nombre(nombre){
   this._nombre=nombre;

}
get apellido(){
   return this._apellido;
}

set apellido(apellido){
   this._apellido=apellido;

}
nombreCompleto() {
return this.idPersona+ ' '+ this._nombre + ' ' + this._apellido    
}

//sobreescribiendo el metodo de la clase padre object
toString(){
   //se aplica polimorfismo
   return this.nombreCompleto();
}
static saludar(){

   console.log('saludos desde metodo static')
}
}


let persona1=new persona( 'juan', 'perez');
persona1.nombre = 'pedro raquel' // manda a remplazar metodo set 
console.log(persona1.nombre) //get nombre
// aplicando herencia de objetos js 
// primero declaramos la clase con la etiqueta extends luego del nombre de la nueva clase 
// despues ponermos el contrutor 

class Empleado extends persona{
   constructor (nombre,apellido,departamento){
       super(nombre,apellido); // super = para poder llamar el conturtro padre de la clase que heredaremos 
       this._departamento=departamento;
}

get departamento(){
   return this._departamento;}
   set salario(departamento){
       
       this.departamento=departamento;
   }
//sobreescribir
nombreCompleto(){
   return this.idPersona+ ' '+ this._nombre + ' ' + this._apellido + ', ' + this._departamento;}

}

let empleado1= new Empleado('ana','diaz','ventas')

; //a esto se le conoce como polimorfismo 



//no es posible llamar un metodo static desde un objeto




console.log (persona1.toString())

console.log(empleado1.toString())



console.log(persona.contadorPersona)




let persona2 =new persona ('deylis','perez');

let persona3 =new persona ('betania','perez');

let persona4 =new persona ('juana','perez');

let persona5 =new persona ('juana','perez');
console.log(persona.contadorPersona)



   //const juan=new persona("juan","perez");
//crear un objeto de la clase persona

//console.log(juan);//imprime el objeto con los datos del constructor

//const carlos = new persona('carlos ', 'lara');
//console.log(carlos)