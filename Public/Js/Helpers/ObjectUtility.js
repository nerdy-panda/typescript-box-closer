import ObjectUtility from "../Services/Singleton/ObjectUtility.js";
const SERVICE = ObjectUtility.instance();
function poorObjectToRich(richObject, poorObject) {
    return SERVICE.poorObjectToRichConvertor(richObject, poorObject);
}
export { poorObjectToRich };
//# sourceMappingURL=ObjectUtility.js.map