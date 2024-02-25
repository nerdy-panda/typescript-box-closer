import ModelCloser from "../../Services/Decorator/ModelCloser.js";

class Program {
    public modelCloser : ModelCloser;
    constructor(){
        this.modelCloser = new ModelCloser({animation : "fadeOut"});
    }
    app():void {        
        const closeElements : NodeListOf<HTMLElement> = window.document.body.querySelectorAll(".closeElement");
        for (const closeElement of closeElements)
            closeElement.addEventListener('click',this.closeElementClickListener);
    }
    protected closeElementClickListener = (event:MouseEvent):void => {
        const closeElement : HTMLElement = <HTMLElement> event.currentTarget;
        this.modelCloser.model = <HTMLElement> closeElement.parentElement ;
        this.modelCloser.close();
    }
}
export default Program;