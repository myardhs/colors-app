import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

class ColorPickerForm extends Component {
  constructor(props){
    super(props);
    this.state = {currColor: 'teal', newColorName: ''};
    this.updateCurrColor = this.updateCurrColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.props.colors.every(
        ({ color }) => color !== this.state.currColor
      )
    );
  }
  updateCurrColor(newColor) {
    this.setState({ currColor: newColor.hex });
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(){
    const newColor = {
      color: this.state.currColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({newColorName: ''});
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker color={currColor} 
          onChangeComplete={this.updateCurrColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator 
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange} 
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name', 
              'Color name must be unique',
              'Color already used!'
            ]}
          />
          <Button variant='contained' 
            type='submit'
            color='primary' 
            style={{
              backgroundColor: 
                paletteIsFull ? 'grey' : currColor
            }}
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;