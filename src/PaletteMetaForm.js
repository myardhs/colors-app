import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


export default function PaletteMetaForm(props) {
  const [stage, setStage] = useState('form');
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });
  const showEmojiPicker = () => {
    setStage('emoji');
  };
  const savePalette = (emoji) => {
    console.log(emoji.native);
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    };
    props.handleSubmit(newPalette);
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Dialog 
        open={stage === 'emoji'} 
        onClose={props.hideForm} 
      >
        <DialogTitle id="form-dialog-title">
          Choose a Palette Emoji
        </DialogTitle>
        <Picker 
          onSelect={savePalette} 
          title="Pick a Palette Emoji"
        />
      </Dialog>
      <Dialog 
        open={stage === 'form'} 
        onClose={props.hideForm} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Give New Palette Name
        </DialogTitle>
        <ValidatorForm 
            onSubmit={showEmojiPicker}
          >
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's unique!
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              fullWidth
              onChange={
                (e) => setNewPaletteName(e.target.value)
              }
              validators={[
                'required', 'isPaletteNameUnique'
              ]}
              errorMessages={[
                'Enter Palette Name',
                'Name already used'
              ]} 
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.hideForm} color="primary">
              Cancel
            </Button>
            <Button 
              variant='contained'
              color='primary'
              type="submit"
            >
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
