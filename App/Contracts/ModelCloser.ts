import ModelCloserOption from "./ModelCloserOption.js";

interface ModelCloser {
    model : HTMLElement ;
    options : ModelCloserOption ;
    hasCloseClass():boolean;
    addCloseClass():void;
    addCloseClassIfNotExists():void;
    close():void;
}
export default ModelCloser;