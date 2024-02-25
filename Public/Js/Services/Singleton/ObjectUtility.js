import { default as Service } from "../ObjectUtility.js";
class ObjectUtility {
    static instance() {
        if (this.object instanceof Service)
            return this.object;
        this.object = new Service();
        return this.object;
    }
}
ObjectUtility.object = null;
export default ObjectUtility;
//# sourceMappingURL=ObjectUtility.js.map