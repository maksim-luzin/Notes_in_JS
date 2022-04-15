import { Category } from "../enums";

const getIcon = category => Category[category].icon;

export {getIcon};
