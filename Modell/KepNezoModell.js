import NagyKep from "../View/NagyKep.js";

export default class KepNezoModell {
    #lista = [];
    #index = 0;
    #nagyKep;

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;

        this.#nagyKep = new NagyKep(this.szuloElem);

        this.#nagyKep.kepKeszit(this.#lista[this.#index]);

    }



    kepCsere(atadottKep) {
        this.#index = this.#lista.findIndex(kep => kep.url === atadottKep.url);
        console.log(this.#index);
        this.#nagyKep.kepKeszit(this.#lista[this.#index]);
    }

    lep(irany) {
        if (irany === 'balra') {
            this.#index = (this.#index > 0) ? this.#index - 1 : this.#lista.length - 1;
        } else if (irany === 'jobbra') {
            this.#index = (this.#index < this.#lista.length - 1) ? this.#index + 1 : 0;
        }
        return this.#nagyKep.kepKeszit(this.#lista[this.#index]);
    }



}
