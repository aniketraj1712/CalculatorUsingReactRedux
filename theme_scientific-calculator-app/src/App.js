import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation,equalToCalculation,signCalculation,squareCalculation,squareRootCalculation } from './actions';
import CalcButton from './components/CalcButton';

class CalculatorComponent extends Component {

  state = {toggle:true,themeToggle:false};

  componentDidMount() {
    // Force scroll on the display
    // I do this on mount in case reducer is already populated
    this._forceScrollOnDisplay();
  }
  
  componentDidUpdate() {
    // Force scroll on the display
    // this function gets called on component update
    this._forceScrollOnDisplay();
  }

  // Replace the operator chars add a span for styling
  // and replace division and multiplication symbols
  _replaceChars(value) {
    if(value[0]===0 && value[1]<0){
      var val = value.slice();
      val.shift();
      value = value.join("");
      value = value.replace(/\//g, '<span class="operatorStyle">÷</span>');
      value = value.replace(/\*/g, '<span class="operatorStyle">×</span>');
      value = value.replace(/\+/g, '<span class="operatorStyle">+</span>');
      value = value.replace(/-/g, '<span class="operatorStyle">-</span>');
      val = val.join("");
      val = val.replace(/\//g, '<span class="operatorStyle">÷</span>');
      val = val.replace(/\*/g, '<span class="operatorStyle">×</span>');
      val = val.replace(/\+/g, '<span class="operatorStyle">+</span>');
      val = val.replace(/-/g, '<span class="operatorStyle">-</span>');
      return val;
    }
    value = value.join("");
    value = value.replace(/\//g, '<span class="operatorStyle">÷</span>');
    value = value.replace(/\*/g, '<span class="operatorStyle">×</span>');
    value = value.replace(/\+/g, '<span class="operatorStyle">+</span>');
    value = value.replace(/-/g, '<span class="operatorStyle">-</span>');
    return value;
  }

  _forceScrollOnDisplay() {
    // Force scroll on div, put a value in here
    // instead of calculating the offset
    // This keeps the latest numbers in display
    this.refs.calculationDisplay.scrollLeft = 10000;
    this.refs.resultDisplay.scrollLeft = 10000;
  }
  render() {
    return (
        <div className='calculator'>
          <div className='calculator-results'>
            <div ref='calculationDisplay' className='calculationDisplay' dangerouslySetInnerHTML={{ __html: this.props.calculation.length ? this._replaceChars(this.props.calculation) : 0 }} />
            <div ref='resultDisplay' className='resultDisplay'>{this.props.result}</div>
          </div>
          
          <div className='calculator-inputs-row'>
            <CalcButton value={1} />
            <CalcButton value={2} />
            <CalcButton value={3} />
            <CalcButton text ="Add(+)" value="+" additionalClass="operator" />
          </div>
          
          <div className='calculator-inputs-row'>
            <CalcButton value={4} />
            <CalcButton value={5} />
            <CalcButton value={6} />
            <CalcButton text='Subtract(-)' value="-" additionalClass="operator" />
          </div>
          <div className='calculator-inputs-row'>
            <CalcButton value={7} />
            <CalcButton value={8} />
            <CalcButton value={9} />
            <CalcButton text='Multiply(*)' value="*"additionalClass="operator" />
          </div>
          <div className='calculator-inputs-row'>
            <CalcButton value='clear' additionalClass="clear"/>
            <CalcButton value={0} />
            <CalcButton value='=' additionalClass="equal" />
            <CalcButton text='Divide(/)' value="/" additionalClass="operator" />
          </div>
          <div className='calculator-inputs-row'>
            <button value='scientificMode' className="scientificMode" onClick={() => {this.setState({toggle:!this.state.toggle})}} >
              Scientific Mode
            </button>
            <button id = "sign" value='sign' className="smode" disabled= {this.state.toggle} onClick={() =>{this.props.signCalculation(this.props.result)}} >
              Sign
            </button>
            <button id = "scientific" value='square' className="smode" disabled= {this.state.toggle} onClick={() =>{this.props.squareCalculation(this.props.result)}} >
              Square
            </button>
            <button id = "scientific" value='square_root' className="smode" disabled= {this.state.toggle} onClick={() =>{this.props.squareRootCalculation(this.props.result)}}>
              Square Root
            </button>
          </div>
          <div>
            <button id='theme' value='darkTheme' className='theme' onClick={()=> {document.documentElement.setAttribute('data-theme', 'dark');}}>
              Dark Theme
            </button>
            <button id='theme' value='lightTheme' className='theme' onClick={()=> {document.documentElement.setAttribute('data-theme', 'light');}}>
              Light Theme
            </button>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation()),
  equalToCalculation: () => dispatch(equalToCalculation()),
  signCalculation: (currentResult) => dispatch(signCalculation(currentResult)),
  squareCalculation: (currentResult) => dispatch(squareCalculation(currentResult)),
  squareRootCalculation: (currentResult) => dispatch(squareRootCalculation(currentResult))
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);
