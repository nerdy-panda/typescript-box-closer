import ModelCloser from "../../Services/Decorator/ModelCloser.js";
class Program {
    constructor() {
        this.closeElementClickListener = (event) => {
            const closeElement = event.currentTarget;
            this.modelCloser.model = closeElement.parentElement;
            this.modelCloser.close();
        };
        this.modelCloser = new ModelCloser({ animation: "fadeOut" });
    }
    app() {
        const closeElements = window.document.body.querySelectorAll(".closeElement");
        for (const closeElement of closeElements)
            closeElement.addEventListener('click', this.closeElementClickListener);
    }
}
export default Program;
//# sourceMappingURL=Program.js.map