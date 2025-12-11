import { combineReducers } from "redux";

// Add
const initialAddState = { result: 0 };

const addReducer = (state = initialAddState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        result: state.result + action.payload,
      };
    default:
      return state;
  }
};

// Subtract
const initialSubState = { result: 0 };

const subReducer = (state = initialSubState, action) => {
  switch (action.type) {
    case "SUB":
      return {
        ...state,
        result: state.result - action.payload,
      };
    default:
      return state;
  }
};

// Multiply
const initialMultipleState = { result: 3 };

const mulReducer = (state = initialMultipleState, action) => {
  switch (action.type) {
    case "MUL":
      return {
        ...state,
        result: state.result * action.payload,
      };
    default:
      return state;
  }
};

// Divide
const initialDivState = { result: 5 };

const divReducer = (state = initialDivState, action) => {
  switch (action.type) {
    case "DIV":
      return {
        ...state,
        result: state.result / action.payload,
      };
    default:
      return state;
  }
};

// Remainder
const initialRemState = { result: 4 };

const remReducer = (state = initialRemState, action) => {
  switch (action.type) {
    case "REM":
      return {
        ...state,
        result: state.result % action.payload, // FIXED
      };
    default:
      return state;
  }
};

// Modular (same as remainder)
const initialModState = { result: 144 };

const modReducer = (state = initialModState, action) => {
  switch (action.type) {
    case "MODULAR":
      return {
        ...state,
        result: state.result % action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  add: addReducer,
  sub: subReducer,
  mul: mulReducer,
  div: divReducer,
  mod: modReducer,
  rem: remReducer,
});

export default rootReducer;
