import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { animateScroll as scroll} from 'react-scroll';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    right: '12px',
    margin: '20px',
    bottom: '80px',
    position: 'fixed',
    ['@media (max-width:480px)']: {
            right: '-9px',
        }
  },
}));

export default function ButtonUp() {
  const classes = useStyles();

  

  return (
    <div className={classes.icon}>
        <IconButton>
        <Fab color="primary" aria-label="add" onClick={e => scroll.scrollToTop()}>
            <NavigationRoundedIcon  />
        </Fab>
      </IconButton>
    </div>
  );
}