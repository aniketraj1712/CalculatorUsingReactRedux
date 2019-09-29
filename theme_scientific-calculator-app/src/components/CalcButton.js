import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCalculation,clearCalculation,equalToCalculation } from '../actions';

class CalcButtonComponent extends Component {
  render() {
    return (
      <button
        className={`calc-input ${this.props.additionalClass}`} 
        onClick={() =>{this.props.additionalClass==="clear" ? this.props.clearCalculation() : this.props.additionalClass==="equal" ? this.props.equalToCalculation(this.props.result) : this.props.updateCalculation(this.props.value, this.props.calculation, this.props.result)}}>
        {this.props.text ? this.props.text : this.props.value}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: ()=>dispatch(clearCalculation()),
  equalToCalculation: (currentResult)=>dispatch(equalToCalculation(currentResult))
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(CalcButtonComponent);