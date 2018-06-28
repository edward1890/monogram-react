import React, { Component } from "react";

import Card from './Card';

class Form extends Component {
    // Setting the component's initial state
    constructor(props) {
        super(props);

        this.fonts = [
            'Source Sans Pro',
            'Work Sans',
            'Roboto',
            'brookyln',
        ]
        this.state = {
            preview: "test",
          };
    }



// @inject('store')
// @observer
handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "preview") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       
        <form className="form">
          <input
            value={this.state.preview}
            name="preview"
            onChange={this.handleInputChange}
            type="text"
            placeholder="preview"
          /> </form>

        { this.fonts.map((font, index) => (
            <Card key={ index }
                font={ font }
                inputText={ this.state.preview }
            />
        ))}
        

      </div>

        );
    }
}

export default Form;
// WEBPACK FOOTER //
// ./src/components/fontPreviews.js