import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';

const useStyles = makeStyles(styles);

export default function NewPaletteForm(props) {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(
    props.palettes[0].colors
  );
  const { maxColors = 20, palettes } = props;
  const classes = useStyles();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    props.savePalette(newPalette);
    props.history.push('/');
  };
  const removeColor = colorName => {
    setColors(allColors => allColors.filter(color => color.name !== colorName));
  };
  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(
      allColors => arrayMove(allColors, oldIndex, newIndex)
    );
  };
  const clearColors = () => {
    setColors([]);
  };
  const addRandomColor = () => {
    const allColors = props.palettes.map(p => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };
  const paletteIsFull = colors.length >= maxColors;
  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        classes={classes} 
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>
            Design Your Palatte
          </Typography>
          <div className={classes.buttons}>
            <Button 
              variant='contained' 
              color='secondary' 
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button 
              variant='contained' 
              color='primary'
              onClick={addRandomColor}
              disabled={paletteIsFull}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull} 
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList 
          colors={colors}
          removeColor={removeColor}
          axis='xy' 
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
}