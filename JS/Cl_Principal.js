import Cl_Hija from "./Cl_Hija.js";

export default class Cl_Principal { 
constructor(){
const instanciaHija = new Cl_Hija("1", "2");

console.log(`atribA: ${instanciaHija.atribA}, atribB: ${instanciaHija.atribB}`);
}
}