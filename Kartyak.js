import Kartya from "./Kartya.js";

export default class Kartyak{
    #lista=[];
constructor(lista,szuloElem){
    this.#lista=lista;
    this.szuloElem=szuloElem;
    this.szuloElem.empty();
    this.#kepMegjelenit();

}

#kepMegjelenit(){
   this.#lista.forEach((kep) => {
      
        new Kartya(kep,this.szuloElem);
      });

}

}