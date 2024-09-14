import { kepLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";
const kivalasztottLista=[];

const divElem = $(".kepek");
const kivElem = $(".kepnezo");
kivElem.empty();

new Kartyak(kepLista, divElem);



$(window).on("kivalaszt",(event)=>{
  console.log(event.detail) //ezt adta, át infót a saaját eseménynél, az adott kártyához tartozó kutya adata.
  kivalasztottLista.push(event.detail)
  console.log(kivalasztottLista)

  new Kartyak(kivalasztottLista, kivElem);
})