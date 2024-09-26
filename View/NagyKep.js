import Kep from "/View/Kep.js";

export default class NagyKep {
    #aktualisKep = null;
    #szuloElem;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
    }

    kepKeszit(kepAdat) {
        if (this.#aktualisKep !== kepAdat) {
            this.#szuloElem.empty();
            new Kep(kepAdat, this.#szuloElem);
            this.#aktualisKep = kepAdat;
        }
    }






}