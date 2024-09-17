
import Kep from "./Kep.js";


export default class KepNezo {
    #lista = [];
    #index = 0;
    #balGomb;
    #jobbGomb;

    #aktualisKep = null;



    constructor(lista, szuloElem) {
        this.#lista = lista;
        // console.log(lista);
        this.szuloElem = szuloElem;
        this.#balGomb = $('.bal-gomb');
        this.#jobbGomb = $('.jobb-gomb');
       // this.#balGomb.on('click', () => this.#balraLep());
        //this.#jobbGomb.on('click', () => this.#jobbraLep());
        this.#balGomb.on('click', () => this.#lep('balra'));
        this.#jobbGomb.on('click', () => this.#lep('jobbra'));
        this.#kepKeszit();
        this.#kepCsere();

    }

    #kepKeszit() {
        /*
                this.szuloElem.empty();
                new Kep(this.#lista[this.#index], this.szuloElem);
        */
        const ujKep = this.#lista[this.#index];
        if (this.#aktualisKep !== ujKep) { 
            this.szuloElem.empty();
            new Kep(ujKep, this.szuloElem);
            this.#aktualisKep = ujKep; 
        }
    }



    #kepCsere() {

        $(window).on("kivalaszt", (event) => {
            console.log(event.detail)

            this.#index = this.#lista.findIndex(Kep => Kep.url === event.detail.url && Kep.nev === event.detail.nev)
            console.log(this.#index);
            this.#kepKeszit();



        })
    }




/*
    #balraLep() {

        this.#index = (this.#index > 0) ? this.#index - 1 : this.#lista.length - 1;
        this.#kepKeszit();

    }


    #jobbraLep() {

        this.#index = (this.#index < this.#lista.length - 1) ? this.#index + 1 : 0;
        this.#kepKeszit();

    }
*/

#lep(irany) {
    if (irany === 'balra') {
        this.#index = (this.#index > 0) ? this.#index - 1 : this.#lista.length - 1;
    } else if (irany === 'jobbra') {
        this.#index = (this.#index < this.#lista.length - 1) ? this.#index + 1 : 0;
    }
    this.#kepKeszit();
}


}




