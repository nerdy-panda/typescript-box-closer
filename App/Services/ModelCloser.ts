import {default as Contract} from "../Contracts/ModelCloser.js";
import ModelCloserOption from "../Contracts/ModelCloserOption.js";
import {poorObjectToRich} from "../Helpers/ObjectUtility.js";

class ModelCloser implements Contract {
    protected defaultOptions : ModelCloserOption = {
        closeClass : "display-none" , animation : false
    }
    constructor(public model : HTMLElement , public options : ModelCloserOption = {} ) {
        poorObjectToRich<ModelCloserOption>(this.defaultOptions , this.options)
        if(this.options.animation)
            this.bindAnimationEventToModel();
    }
    close() {
        if (this.options.animation){
            this.addAnimationClassToElement();
            return;
        }
        this.addCloseClassIfNotExists();
    }
   hasCloseClass():boolean {
        return this.model.classList.contains(<string>this.options.closeClass);
    }
    addCloseClass():void {
        this.model.classList.add(<string> this.options.closeClass);
    }
    addCloseClassIfNotExists():void {
        if (!this.hasCloseClass())
            this.addCloseClass();
    }
    protected animationEndListener = ():void =>  {
        this.model.classList.remove(<string>this.options.animation);
        this.addCloseClass();
    }
    protected bindAnimationEventToModel():void {
        this.model.addEventListener('animationend',this.animationEndListener);
    }
    protected addAnimationClassToElement():void {
        this.model.classList.add(<string> this.options.animation);
    }
    public refreshModel(model:HTMLElement){
        this.model.removeEventListener('animationend',this.animationEndListener);
        this.model = model ; 
        this.bindAnimationEventToModel();
    }
}
export default ModelCloser;