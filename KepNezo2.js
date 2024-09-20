import NagyKep from "./NagyKep.js";

export default class KepNezo2 {
    #lista = [];
    #index = 0;
   //#balGomb=;
   //#jobbGomb=;
    #nagyKep;

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
      //  this.#balGomb = $('.bal-gomb');
      //  this.#jobbGomb = $('.jobb-gomb');
        this.#nagyKep = new NagyKep(this.szuloElem);
      //  this.#balGomb.on('click', () => this.#lep('balra'));
      //  this.#jobbGomb.on('click', () => this.#lep('jobbra'));
        this.#nagyKep.kepKeszit(this.#lista[this.#index]);
       // this.#kepCsere();
  
    }

    /*

    #kepCsere() {
        $(window).on("kivalaszt", (event) => {
            console.log(event.detail);
            this.#index = this.#lista.findIndex(Kep => Kep.url === event.detail.url );
            console.log(this.#index);
            this.#nagyKep.kepKeszit(this.#lista[this.#index]);
        });
    }
        */

    kepCsere(atadottKep){
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
        this.#nagyKep.kepKeszit(this.#lista[this.#index]);
    }
}