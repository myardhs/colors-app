import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


export default function PaletteMetaForm(props) {
  const [open, setOpen] = useState(true);
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Give New Palette Name
        </DialogTitle>
        <ValidatorForm 
            onSubmit={
              () => props.handleSubmit(newPaletteName)
            }
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
            <Button onClick={handleClose} color="primary">
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
