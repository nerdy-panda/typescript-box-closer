import ObjectUtility from "../Services/Singleton/ObjectUtility.js";

const SERVICE = ObjectUtility.instance();

function poorObjectToRich<ObjectType extends object>(richObject : ObjectType , poorObject : ObjectType):ObjectType {
    return SERVICE.poorObjectToRichConvertor<ObjectType>(richObject,poorObject);
}

export {
    poorObjectToRich
}