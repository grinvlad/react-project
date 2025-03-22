import { useCallback, useReducer } from "react";

const MIN_RATING = 1;
const MAX_RATING = 5;

const INITIAL_FORM = {
  name: "",
  review: "",
  rating: MAX_RATING,
};

const actionTypes = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_REVIEW: "UPDATE_REVIEW",
  INCREMENT_RATING: "INCREMENT_RATING",
  DECREMENT_RATING: "DECREMENT_RATING",
  CLEAR_FORM_ACTION: "CLEAR_FORM_ACTION",
};

function formReducer(form, action) {
  switch (action.type) {
    case actionTypes.UPDATE_NAME:
      return {
        ...form,
        name: action.name,
      };
    case actionTypes.UPDATE_REVIEW:
      return {
        ...form,
        review: action.review,
      };
    case actionTypes.INCREMENT_RATING:
      return {
        ...form,
        rating: Math.min(form.rating + 1, MAX_RATING),
      };
    case actionTypes.DECREMENT_RATING:
      return {
        ...form,
        rating: Math.max(form.rating - 1, MIN_RATING),
      };
    case actionTypes.CLEAR_FORM:
      return INITIAL_FORM;
    default:
      throw Error("Uknown action: " + action.type);
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, INITIAL_FORM);

  const updateName = useCallback(
    (name) => dispatch({ type: actionTypes.UPDATE_NAME, name: name }),
    []
  );

  const updateReview = useCallback(
    (review) => dispatch({ type: actionTypes.UPDATE_REVIEW, review: review }),
    []
  );

  const incrementRating = useCallback(
    () => dispatch({ type: actionTypes.INCREMENT_RATING }),
    []
  );

  const decrementRating = useCallback(
    () => dispatch({ type: actionTypes.DECREMENT_RATING }),
    []
  );

  const clearForm = useCallback(
    () => dispatch({ type: actionTypes.CLEAR_FORM }),
    []
  );

  return {
    form,
    updateName,
    updateReview,
    incrementRating,
    decrementRating,
    clearForm,
  };
};
