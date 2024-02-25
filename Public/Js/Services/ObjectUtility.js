class ObjectUtility {
    isObject(item) {
        return typeof item == "object" && !Array.isArray(item) && item != null;
    }
    poorObjectToRichConvertor(richObject, poorObject) {
        let key;
        for (key in richObject) {
            const richItem = richObject[key];
            if (key in poorObject) {
                const poorItem = poorObject[key];
                if (this.isObject(richItem) && this.isObject(poorItem))
                    this.poorObjectToRichConvertor(richItem, poorItem);
                continue;
            }
            poorObject[key] = richItem;
        }
        return poorObject;
    }
}
export default ObjectUtility;
//# sourceMappingURL=ObjectUtility.js.map