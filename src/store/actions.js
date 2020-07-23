import {CATEGORY_CHECK, CATEGORY_UNCHECK} from "./types";

export const checkCategory = (id) => {
  return {
    type: CATEGORY_CHECK,
    payload: id,
  }
};

export const unCheckCategory = (id) => {
  return {
    type: CATEGORY_UNCHECK,
    payload: id,
  }
};