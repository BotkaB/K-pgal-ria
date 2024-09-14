export default class Kep {
    #kep = {}
    constructor(kep, szuloElem) {

        this.#kep = kep;
        this.szuloElem = szuloElem;


        this.#egyKepKiiras();
        this.gombElem = $(".kivalaszt:last")
        console.log(this.gombElem);
        this.#esemenyKezelo()
    }

    #esemenyKezelo() {


        this.gombElem.on("click", () => {

            console.log(this);


            const e = new CustomEvent("kivalaszt", { detail: this.#kep })
            window.dispatchEvent(e)
        });
    }
    #egyKepKiiras() {

        this.szuloElem.append(`<div class="col-lg-4 col-md-6 card"> 
                            <div class="card-body">
                                <h3 class="card-title"><img src=${this.#kep.url}></h3>
                                <p class="card-text"> ${this.#kep.nev}</p>
                           
                              
                            </div>
                        </div>`);
    }
}