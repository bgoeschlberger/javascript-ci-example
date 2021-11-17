export class Calculator {
  constructor(){
    this._lastResult = 0;
  }
  
  _sanitizeInput(v){
    if(!isNaN(v) && v.toString() !== ''){
      if(typeof v === 'number'){
        return v;
      } else if (v.toString().indexOf('.') !== -1){
        return Number.parseFloat(v);
      } else {
        return Number.parseInt(v);
      }
    }
    throw 'Invalid Input: ' + JSON.stringify(v) + ' is not a number';
  }

  add(v1, v2){
     this._lastResult = this._sanitizeInput(v1)+this._sanitizeInput(v2);
     return this._lastResult;
  }

  get lastResult(){
    return this._lastResult;
  }
}
