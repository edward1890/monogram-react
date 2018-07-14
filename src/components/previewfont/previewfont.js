import React, { Component } from "react";

import Card from '../card/Card';

import '../card/Card.css';

import './previewfont.css'

class Form extends Component {
    // Setting the component's initial state
    constructor(props) {
        super(props);

        this.fonts = [
            { font: 'Katie', url: "https://www.etsy.com/listing/280843206/wooden-name-sign-12-to-55-wide-office?ref=shop_home_active_4", fontName: 'Katie'},
            // { font: 'Cailey', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Cailey' },
            { font: 'Olivia', url: "https://www.etsy.com/listing/614007494/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_13", fontName: 'Olivia'  },
            // { font: 'Hadley', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Hadley'  },
            // { font: 'Samantha', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Samantha'  },
            // { font: 'Amelia', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Amelia'  },
            { font: 'Charlotte', url: "https://www.etsy.com/listing/293648933/wooden-name-sign-12-to-55-wide-office?ref=shop_home_active_6", fontName: 'Charlotte'  },
            // { font: 'Kendall', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Kendall'  },
            // { font: 'Brooke', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718" , fontName: 'Brooke' },
            // { font: 'Mackenzie', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718" , fontName: 'Mackenzie' },
            { font: 'Bodhi', url: "https://www.etsy.com/listing/294355523/wooden-name-sign-12-to-55-wide-office?ref=shop_home_active_5" , fontName: 'Bodhi' },
            { font: 'Brooklyn', url: "https://www.etsy.com/listing/280842938/wooden-name-sign-12-to-55-wide-office?ref=shop_home_active_2", fontName: 'Brooklyn'  },
            { font: 'Cameron', url: "https://www.etsy.com/listing/613703164/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_12", fontName: 'Cameron'  },
            { font: 'Liam', url: "https://www.etsy.com/listing/614489726/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_9" , fontName: 'Liam' },
            // { font: 'Grayson', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Grayson'  },
            // { font: 'Lincoln', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Lincoln'  },
            { font: 'Emma', url: "https://www.etsy.com/listing/280135010/wooden-name-sign-12-to-55-wide-kids?ref=shop_home_active_7&ep_click=1", fontName: 'Emma'  },
            { font: 'Zoe', url: "https://www.etsy.com/listing/627536499/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_14", fontName: 'Zoe'  },
            // { font: 'Riley', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Riley'  },
            // { font: 'Chris', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Chris'  },
            // { font: 'Kyle', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Kyle'  },
            { font: 'Layla', url: "https://www.etsy.com/listing/604391158/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_6", fontName: 'Layla'  },
            // { font: 'Aubrey', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Aubrey'  },
            // { font: 'Chloe', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Chloe'  },
            { font: 'Dakota', url: "https://www.etsy.com/listing/613701944/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_11", fontName: 'Dakota'  },
            { font: 'Landon', url: "https://www.etsy.com/listing/607258236/wooden-name-sign-12-to-55-wide-custom?ref=shop_home_active_1", fontName: 'Landon'  },
            // { font: 'Blakely', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Blakely (all lowercase only)'  },
            // { font: 'Skywalker', url: "https://www.etsy.com/shop/48HourMonogram?ref=l2-shopheader-name&section_id=18551718", fontName: 'Skywalker' },

        ]
        this.state = {
            preview: "Example",
          };
    }




handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "preview") {
      value = value.substring(0, 30);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  render() {
    
    return (
    <div className="container-fluid">
      <div className= "row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h5 className= "Disclaimer">Disclaimer:</h5>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className= "row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p className= "Disclaimer">The design of your name will vary depending on the font type. The lines may be thickened or letters attached to each other differently than what is shown in the preview in order to increase the stability of the design. All names are cut with a capital first letter unless otherwise specified by the customer.
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className= "row">
        <div className="col-md-3"></div>
          <div className="col-md-6">
            <form className="form-group">
            <label htmlFor="exampleInputEmail1" className="label1">Enter Name:</label>
              <input
                value={this.state.preview}
                name="preview"
                onChange={this.handleInputChange}
                type="text"
                placeholder="preview" 
                className="form-control"/>
               <small id="emailHelp" className="form-text text-muted">Enter your name or text to see what it looks like with each font.</small>
               </form>
          </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row">
        { this.fonts.map((font, index) => (
          
            <div key={ index } className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="row">
       

                  <Card
                      url= { font.url }
                      font={ font.font }
                      fontName={ font.fontName }
                      inputText={ this.state.preview }
                  />
       
              </div>
            </div>
        ))}
   
    

      </div></div>

        );
    }
}

export default Form;
// WEBPACK FOOTER //
// ./src/components/fontPreviews.js