import ButtonType from "../../Enum/ButtonType.js";
import BoxCloser from "../../Services/BoxCloser.js";

const boxes : NodeListOf<HTMLElement> = window.document.body.querySelectorAll(".box");
const boxClosers:BoxCloser[] = []; 
for (const box of boxes)
    boxClosers.push(new BoxCloser(box , {animation : "fadeOut"}))

