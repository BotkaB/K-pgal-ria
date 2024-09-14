import Kep from "./Kep.js";

export default class Kepek {
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.#kepMegjelenit();

    }

    #kepMegjelenit() {
        this.#lista.forEach((kep) => {

            new Kep(kep, this.szuloElem);
        });

    }

}