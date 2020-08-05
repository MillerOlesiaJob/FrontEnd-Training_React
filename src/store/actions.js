import {CATEGORY_CHECK, CATEGORY_UNCHECK, CATEGORY_UNCHECK_ALL, QUESTIONS_SELECTED} from "./types";

export const checkCategory = (id) => {
  return {
    type: CATEGORY_CHECK,
    payload: id,
  }
};

export const unCheckAllCategory = () => {
  return {
    type: CATEGORY_UNCHECK_ALL,
  }
};

export const unCheckCategory = (id) => {
  return {
    type: CATEGORY_UNCHECK,
    payload: id,
  }
};

export const selectedQuestions = (questions) => {
  return {
    type: QUESTIONS_SELECTED,
    payload: questions,
  }
};