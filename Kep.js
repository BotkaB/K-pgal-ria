export default class Kep {
    #kep = {}
    constructor(kep, szuloElem) {

        this.#kep = kep;
        this.szuloElem = szuloElem;


        this.#egyKepKiiras();
        this.fenykep = $(".kivalaszt:last")
        //   console.log(this.fenykep);
        if (this.fenykep.length) {
            this.#esemenyKezelo();
        } else {
            console.error("A .kivalaszt elem nem található.");
        }
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
                                <h3 class="kivalaszt card-title"><img src="${this.#kep.url}"></h3>
                                <p class="card-text"> ${this.#kep.nev}</p>
                           
                              
                            </div>
                        </div>`);
    }
}