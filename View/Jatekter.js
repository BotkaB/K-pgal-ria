import Kep from "./Kep.js";

export default class Jatekter {
    #lista = [];
    #szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.#kepMegjelenit();

    }

    #kepMegjelenit() {
        this.#lista.forEach((kep) => {

            new Kep(kep, this.#szuloElem);
            console.log(this.#szuloElem)
        });

    }

}