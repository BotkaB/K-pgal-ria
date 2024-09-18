import { kepLista } from "./adatok.js";
import Jatekter from "./Jatekter.js";
import KepNezo from "./KepNezo.js";
import KepNezo2 from "./KepNezo2.js";


const divElem = $(".kepek");
const kivElem = $(".kepnezo.card-container");


new Jatekter(kepLista, divElem);
//new KepNezo (kepLista, kivElem);
new KepNezo2 (kepLista, kivElem);



