import ButtonType from "../Enum/ButtonType.js";

interface BoxCloserOptions {
    closeButton ?: {
        buttonType ?: ButtonType ,
        src ?: string ,
        icon ?: string ,
        text ?: string ,
    }, 
    closeClass ?:string , 
    animation ?:false|string
}
export default BoxCloserOptions;