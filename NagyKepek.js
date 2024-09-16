import Kepek from "./Kepek.js";
import Kep from "./Kep.js";
import { kepLista } from "./adatok.js";

export default class NagyKepek {
    #lista = [];
    #index = 0;



    constructor(lista, szuloElem) {
        this.#lista = lista;
        // console.log(lista);
        this.szuloElem = szuloElem;

        // console.log(this.#index);
        this.#kepCsere();
    }


    #kepCsere() {

        new Kep(this.#lista[0], this.szuloElem);

        $(window).on("kivalaszt", (event) => {
            console.log(event.detail)
            this.#index = this.#lista.findIndex(Kep => Kep.url === event.detail.url && Kep.nev === event.detail.nev)

            console.log(this.#index);
            this.szuloElem.empty();

            new Kep(event.detail, this.szuloElem);
        })
    }

}




