class ObjectUtility {
    isObject(item:unknown):boolean {
        return typeof item == "object" && !Array.isArray(item) && item!=null
    }
    poorObjectToRichConvertor <ArgumentType extends Object>(
        richObject : ArgumentType , poorObject : ArgumentType ,  
    ):ArgumentType {
        let key : keyof ArgumentType;
        for (key in richObject) {
            const richItem : ArgumentType[keyof ArgumentType] = richObject[key];
            if(key in poorObject){
                const poorItem : ArgumentType[keyof ArgumentType] = poorObject[key]; 
                if(this.isObject(richItem) && this.isObject(poorItem))
                    this.poorObjectToRichConvertor(<object>richItem,<object>poorItem);
                continue;
            }
            poorObject[key] = richItem;
        }
        return poorObject;
    }
}

export default ObjectUtility;