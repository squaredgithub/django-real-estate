import { combineReducers } from "redux";
import { propertiesListreducer } from "./propertyReducers";

export default combineReducers({
    propertiesList: propertiesListreducer,
});