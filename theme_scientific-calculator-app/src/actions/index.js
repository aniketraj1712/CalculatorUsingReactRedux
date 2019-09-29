import { calculation, addValueToCalculation } from '../utils';
import { UPDATE_CALCULATION_AND_RESULT, CLEAR_ALL,EQUAL_TO,SIGN,SQUARE,SQUARE_ROOT } from '../constants';

export const updateCalculation = (inputValue, currentState, currentResult) => {
  // Update the calculation and the result
  // Get the current calc array 
  // Convert calc array to string
  // Split string based on operators (/ * - +)
  // Loop over array and make calculation
  let updateCalculationArray = addValueToCalculation(inputValue, currentState);
  let calculationResult = calculation(updateCalculationArray, currentResult);

  return {
    type: UPDATE_CALCULATION_AND_RESULT,
    payload: {
      calculation: updateCalculationArray, 
      result: calculationResult
    }
  }
};

// TODO Make the calculation
export const clearCalculation = () => {
  return {
    type: CLEAR_ALL,
    payload: {
      calculation: [], 
      result: 0
    }
  }
};

export const equalToCalculation = (currentResult) => {
  var cal_num = [currentResult];
  if(currentResult<0){
    cal_num = [0,currentResult];
  }
  return {
    type: EQUAL_TO,
    payload: {
      calculation: cal_num, 
      result: currentResult
    }
  }
};

export const signCalculation = (currentResult) => {
  let signChangedResult = -currentResult;
  var cal_num = [signChangedResult];
  if(signChangedResult<0){
    cal_num = [0,signChangedResult];
  }
  return {
    type: SIGN,
    payload: {
      calculation: cal_num, 
      result: signChangedResult
    }
  }
};

export const squareCalculation = (currentResult) => {
  let squareResult = Math.pow(currentResult,2);
  return {
    type: SQUARE,
    payload: {
      calculation: [squareResult], 
      result: squareResult
    }
  }
};

export const squareRootCalculation = (currentResult) => {
  let squareRootResult = currentResult;
  if(currentResult<0){
    alert("Sorry, Square Root of negative number is Invalid!!!!!!!");
  }
  else{
    squareRootResult = Math.pow(currentResult,0.5);
  }  
  return {
    type: SQUARE_ROOT,
    payload: {
      calculation: [squareRootResult], 
      result: squareRootResult
    }
  }
};