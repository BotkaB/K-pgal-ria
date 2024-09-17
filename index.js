import { kepLista } from "./adatok.js";
import Kepek from "./Kepek.js";
import KepNezo from "./KepNezo.js";
import KepNezo2 from "./KepNezo2.js";


const divElem = $(".kepek");
const kivElem = $(".kepnezo.card-container");


new Kepek(kepLista, divElem);
//new KepNezo (kepLista, kivElem);
new KepNezo2 (kepLista, kivElem);



