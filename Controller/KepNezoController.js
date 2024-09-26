import { kepLista } from "../adatok.js";
import Jatekter from "../View/Jatekter.js";
import KepNezoModell from "../Modell/KepNezoModell.js";

export default class KepNezoController {
    constructor() {
        const divElem = $(".kepek");
        const kivElem = $(".kepnezo.card-container");

        this.KepNezoModell = new KepNezoModell(kepLista, kivElem);
        new Jatekter(kepLista, divElem);



        $(window).on("kivalaszt", (event) => {
            this.KepNezoModell.kepCsere(event.detail);
        });

        $('.bal-gomb').on('click', () => this.KepNezoModell.lep('balra'));
        $('.jobb-gomb').on('click', () => this.KepNezoModell.lep('jobbra'));
    }
}



