import React from "react";
class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '', 
        valAfterSubmit: '',
        textareaVal: '',
        textAfterSubmit: ''
      };
    }
  
    handleChange = (elm, event) => {
      if(elm == 'INPUT') {
        this.setState({inputValue: event.target.value});
      } else if(elm == 'TEXTAREA') {
        this.setState({textareaVal: event.target.value});
      }
      if(this.state.valAfterSubmit.length || this.state.textAfterSubmit.length) {
        this.setState({valAfterSubmit: '', textAfterSubmit: ''})
      }
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            valAfterSubmit: this.state.inputValue,
            textAfterSubmit: this.state.textareaVal
        })
    }

    render() {
      return (
        <>
            <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" 
                  value={this.state.inputValue} 
                  onChange={(e)=> this.handleChange(e.target.tagName, e)} />
                </label>
                <input type="submit" value="Submit" /><br /><br />
                <label>
                    Message:
                    <textarea 
                    value={this.state.textareaVal} onChange={(e)=> this.handleChange(e.target.tagName, e)} />
                </label>
            </form>

            <hr />

            <h1>{'input value: ' + (this.state.inputValue == ''? 'empty':this.state.inputValue)}</h1>

            {this.state.valAfterSubmit != '' && <h1>{this.state.valAfterSubmit}</h1>}

            <hr />

            <h1>{'textarea value: ' + (this.state.textareaVal == ''? 'empty':this.state.textareaVal)}</h1>
            {this.state.textAfterSubmit != '' && <h1>{this.state.textAfterSubmit}</h1>}
        </>
      );
    }
}

export default Form1