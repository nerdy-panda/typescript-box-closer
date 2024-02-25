import ButtonType from "../Enum/ButtonType.js";
import { poorObjectToRich } from "../Helpers/ObjectUtility.js";
import ModelCloser from "./ModelCloser.js";
import BoxCloserOptions from "../Contracts/BoxCloserOptions.js";
class BoxCloser {
    protected defaultOption:BoxCloserOptions = {
        closeButton : {
            buttonType : ButtonType.IMAGE , 
            src : "img/close.png" , 
            icon : "fa fa-close" , 
            text : "X" , 
        },
        closeClass : "display-none" , 
        animation : false
    }
    constructor(public model : HTMLElement , public options : BoxCloserOptions = {} ) {
        poorObjectToRich(this.defaultOption,this.options);
        this.createCloseButton();
    }
    protected createCloseButton():void{
        const buttonType : ButtonType = <ButtonType> this.options.closeButton?.buttonType;
        const container : HTMLElement = this.buildCloseButtonContainer();
        let closeButton : HTMLElement|null = null ;
        switch(buttonType){
            case ButtonType.IMAGE : 
                container.classList.add("imageable");
                closeButton = this.buildImageButton();
            break;
            case ButtonType.ICON :
                container.classList.add("iconable");
                closeButton = this.buildIconButton();
            break;
            case ButtonType.BUTTON :
                container.classList.add("buttonable");
                closeButton = this.buildPureButton();
            break;
        }
        if(closeButton==null)
            return;
        closeButton.addEventListener("click",this.closeButtonClickListener);
        container.appendChild(closeButton);
        this.model.appendChild(container);
    }
    protected buildCloseButtonContainer():HTMLElement {
        const element : HTMLDivElement = window.document.createElement("div");
        element.classList.add("close-button-container");
        return element;
    }
    protected buildImageButton():HTMLImageElement {
        const element : HTMLImageElement = window.document.createElement("img");
        element.src = <string>this.options.closeButton?.src;
        return element;
    }
    protected buildIconButton():HTMLElement {
        const element :HTMLElement =  window.document.createElement("i");
        element.className = <string> this.options.closeButton?.icon;
        return element;
    }
    protected buildPureButton():HTMLButtonElement {
        const element :HTMLButtonElement = window.document.createElement("button");
        element.innerHTML = <string> this.options.closeButton?.text;
        return element;
    }
    protected closeButtonClickListener = (event : MouseEvent) :void => {
        const modelCloser : ModelCloser = new ModelCloser(this.model, {
            closeClass : this.options.closeClass ,
            animation : this.options.animation
        });
        modelCloser.close();
    }
}
export default BoxCloser;