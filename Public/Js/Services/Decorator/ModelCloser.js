import { default as RealModelCloser } from "../ModelCloser.js";
class ModelCloser {
    constructor(options) {
        this.options = options;
        this.model = null;
        this.modelCloser = null;
    }
    close() {
        if (this.model === null)
            return;
        if (this.modelCloser instanceof RealModelCloser) {
            this.modelCloser.refreshModel(this.model);
            this.modelCloser.close();
            return;
        }
        this.modelCloser = new RealModelCloser(this.model, this.options);
        this.modelCloser.close();
    }
}
export default ModelCloser;
//# sourceMappingURL=ModelCloser.js.map