import ModelCloserOption from "../../Contracts/ModelCloserOption.js";
import {default as RealModelCloser} from "../ModelCloser.js";
class ModelCloser {
    model : null | HTMLElement = null ;
    protected modelCloser : null | RealModelCloser = null ;
    constructor(public options : ModelCloserOption){}
    close():void {
        if(this.model === null )
            return;
        if(this.modelCloser instanceof RealModelCloser){
            this.modelCloser.refreshModel(this.model);
            this.modelCloser.close();
            return ;
        }
        this.modelCloser = new RealModelCloser(this.model,this.options);
        this.modelCloser.close();
    }
}

export default ModelCloser;