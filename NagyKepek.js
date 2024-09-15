import Kepek from "./Kepek.js";
import Kep from "./Kep.js";
import { kepLista } from "./adatok.js";

export default class NagyKepek {
    #lista = [];
   

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
       // this.szuloElem.empty();
      
        this.#kepCsere();

    }


    #kepCsere() {
        
       new Kep(this.#lista[0], this.szuloElem);
      
        $(window).on("kivalaszt", (event) => {
            console.log(event.detail) 
            this.szuloElem.empty();
           
            new Kep(event.detail, this.szuloElem);
        })



    }




}




