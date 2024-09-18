export default class Kep {
    #kep = {}
    constructor(kep, szuloElem) {

        this.#kep = kep;
        this.szuloElem = szuloElem;


        this.#egyKepKiiras();
        // this.fenykep = $(".kivalaszt:last")
        //   console.log(this.fenykep);
        this.fenykep = this.szuloElem.find(".kivalaszt:last");
        this.#esemenyKezelo();

    }

    #esemenyKezelo() {


        this.fenykep.on("click", () => {



            const e = new CustomEvent("kivalaszt", { detail: this.#kep })

            console.log(this.#kep);
            window.dispatchEvent(e)
        });
    }
    #egyKepKiiras() {

        this.szuloElem.append(`<div class="card"> 
                            <div class="card-body">
                                <h3 class="kivalaszt card-title"><img src="${this.#kep.url}" alt="${this.#kep.nev}"></h3>
                                <p class="card-text"> ${this.#kep.cim}</p>
                                <p class="card-text"> ${this.#kep.leiras}</p>
                           
                              
                            </div>
                        </div>`);
    }
}