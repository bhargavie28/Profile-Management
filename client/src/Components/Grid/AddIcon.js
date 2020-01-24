import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import '../../App.css'
import Form1 from '../../Views/Form';



export default function FloatingActionButtons() {

  return (
    <div className= "addIcon">
      <Fab color="primary" aria-label="add">
        <AddIcon onClick ={<Form1 />} />
      </Fab>
     
    </div>
  );
}