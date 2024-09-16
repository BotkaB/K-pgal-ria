
import Kep from "./Kep.js";


export default class NagyKepek {
    #lista = [];
    #index = 0;
    #balGomb;
    #jobbGomb;



    constructor(lista, szuloElem) {
        this.#lista = lista;
        // console.log(lista);
        this.szuloElem = szuloElem;
        this.#balGomb = $('.bal-gomb');
        this.#jobbGomb = $('.jobb-gomb');
        this.#balGomb.on('click', () => this.#balraLep());
        this.#jobbGomb.on('click', () => this.#jobbraLep());
        this.#kepKeszit();
        this.#kepCsere();

    }

    #kepKeszit() {
        this.szuloElem.empty();
        new Kep(this.#lista[this.#index], this.szuloElem);
    }



    #kepCsere() {

        $(window).on("kivalaszt", (event) => {
            console.log(event.detail)
            this.#index = this.#lista.findIndex(Kep => Kep.url === event.detail.url && Kep.nev === event.detail.nev)

            console.log(this.#index);
           // this.szuloElem.empty();

            //new Kep(event.detail, this.szuloElem);
            this.#kepKeszit();
        })
    }





    #balraLep() {
        this.#index = (this.#index > 0) ? this.#index - 1 : this.#lista.length - 1;
        this.#kepKeszit();
    }


    #jobbraLep() {
        this.#index = (this.#index < this.#lista.length - 1) ? this.#index + 1 : 0;
        this.#kepKeszit();
    }



}




