import { UPDATE_CALCULATION_AND_RESULT, CLEAR_ALL,EQUAL_TO,SIGN,SQUARE,SQUARE_ROOT } from '../constants';

const initialState = {
  calculation: [],
  result: 0
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CALCULATION_AND_RESULT:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      };
    case CLEAR_ALL:
      return {
      	calculation: action.payload.calculation,
        result: action.payload.result
      };
    case EQUAL_TO:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      }; 
    case SIGN:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      }; 
    case SQUARE:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      }; 
    case SQUARE_ROOT:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      };          
    default:
      return state;
  }
};

export default calculatorReducer;