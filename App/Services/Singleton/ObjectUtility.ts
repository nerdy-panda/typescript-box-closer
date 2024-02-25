import {default as Service} from "../ObjectUtility.js";
class ObjectUtility {
    protected static object : Service|null = null;
    static instance(): Service {
        if (this.object instanceof Service)
            return this.object;
        this.object = new Service() ;
        return this.object;
    }
}
export default ObjectUtility;