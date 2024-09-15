import { kepLista } from "./adatok.js";
import Kepek from "./Kepek.js";
import NagyKepek from "./NagyKepek.js";


const divElem = $(".kepek");
const kivElem = $(".kepnezo.card-container");


new Kepek(kepLista, divElem);
new NagyKepek (kepLista, kivElem);



