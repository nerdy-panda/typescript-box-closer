import ButtonType from "../Enum/ButtonType.js";
import { poorObjectToRich } from "../Helpers/ObjectUtility.js";
import ModelCloser from "./ModelCloser.js";
class BoxCloser {
    constructor(model, options = {}) {
        this.model = model;
        this.options = options;
        this.defaultOption = {
            closeButton: {
                buttonType: ButtonType.IMAGE,
                src: "img/close.png",
                icon: "fa fa-close",
                text: "X",
            },
            closeClass: "display-none",
            animation: false
        };
        this.closeButtonClickListener = (event) => {
            const modelCloser = new ModelCloser(this.model, {
                closeClass: this.options.closeClass,
                animation: this.options.animation
            });
            modelCloser.close();
        };
        poorObjectToRich(this.defaultOption, this.options);
        this.createCloseButton();
    }
    createCloseButton() {
        var _a;
        const buttonType = (_a = this.options.closeButton) === null || _a === void 0 ? void 0 : _a.buttonType;
        const container = this.buildCloseButtonContainer();
        let closeButton = null;
        switch (buttonType) {
            case ButtonType.IMAGE:
                container.classList.add("imageable");
                closeButton = this.buildImageButton();
                break;
            case ButtonType.ICON:
                container.classList.add("iconable");
                closeButton = this.buildIconButton();
                break;
            case ButtonType.BUTTON:
                container.classList.add("buttonable");
                closeButton = this.buildPureButton();
                break;
        }
        if (closeButton == null)
            return;
        closeButton.addEventListener("click", this.closeButtonClickListener);
        container.appendChild(closeButton);
        this.model.appendChild(container);
    }
    buildCloseButtonContainer() {
        const element = window.document.createElement("div");
        element.classList.add("close-button-container");
        return element;
    }
    buildImageButton() {
        var _a;
        const element = window.document.createElement("img");
        element.src = (_a = this.options.closeButton) === null || _a === void 0 ? void 0 : _a.src;
        return element;
    }
    buildIconButton() {
        var _a;
        const element = window.document.createElement("i");
        element.className = (_a = this.options.closeButton) === null || _a === void 0 ? void 0 : _a.icon;
        return element;
    }
    buildPureButton() {
        var _a;
        const element = window.document.createElement("button");
        element.innerHTML = (_a = this.options.closeButton) === null || _a === void 0 ? void 0 : _a.text;
        return element;
    }
}
export default BoxCloser;
//# sourceMappingURL=BoxCloser.js.map