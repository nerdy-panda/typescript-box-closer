import { poorObjectToRich } from "../Helpers/ObjectUtility.js";
class ModelCloser {
    constructor(model, options = {}) {
        this.model = model;
        this.options = options;
        this.defaultOptions = {
            closeClass: "display-none", animation: false
        };
        this.animationEndListener = () => {
            this.model.classList.remove(this.options.animation);
            this.addCloseClass();
        };
        poorObjectToRich(this.defaultOptions, this.options);
        if (this.options.animation)
            this.bindAnimationEventToModel();
    }
    close() {
        if (this.options.animation) {
            this.addAnimationClassToElement();
            return;
        }
        this.addCloseClassIfNotExists();
    }
    hasCloseClass() {
        return this.model.classList.contains(this.options.closeClass);
    }
    addCloseClass() {
        this.model.classList.add(this.options.closeClass);
    }
    addCloseClassIfNotExists() {
        if (!this.hasCloseClass())
            this.addCloseClass();
    }
    bindAnimationEventToModel() {
        this.model.addEventListener('animationend', this.animationEndListener);
    }
    addAnimationClassToElement() {
        this.model.classList.add(this.options.animation);
    }
    refreshModel(model) {
        this.model.removeEventListener('animationend', this.animationEndListener);
        this.model = model;
        this.bindAnimationEventToModel();
    }
}
export default ModelCloser;
//# sourceMappingURL=ModelCloser.js.map