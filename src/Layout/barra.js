import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from '../images/background.jpg';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CardTravelRoundedIcon from '@material-ui/icons/CardTravelRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'rgba(250, 250, 250, 0.69)',
    ['@media (max-width:480px)']: {
      textAlign: 'center',
      fontSize: '40px'
  }
  },
  background: {
    width: "100%",
    height: '600px',
    backgroundImage: `url(${Image})`,    
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  text: {
      color: 'rgba(250, 250, 250, 0.69)',
      "&:hover": {
        borderBottom: 'solid rgba(250, 250, 250, 0.69) 0.2px'
      }
  },
  icons: {
    alignItems: "Center",
    marginRight: "5px"
  },
  description: {
    color: 'rgba(250, 250, 250, 0.69)',
    fontWeight: "700",
    marginTop: "100px",
    textAlign: "center"
  },
  button: {
    alignItems: "center"
  },
  gridnav: {
    ['@media (max-width:480px)']: {
        display: 'grid',
        maxWidth: '100%'
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
    
  
  return (    
    <>
        <div className={classes.background}>        
            <div className={classes.root}>
                <Toolbar className={classes.gridnav}>
                    <Typography variant="h6" className={classes.title}>
                        Nicolás Romero
                    </Typography>
                    <div className={classes.btnnav}>
                    <Button className={classes.text}><HomeRoundedIcon className={classes.icons} /><a href="/">Inicio</a></Button>
                    <Button className={classes.text}><AccountCircleRoundedIcon className={classes.icons}/><a href="#aboutme">Sobre Mí</a></Button>
                    <Button className={classes.text}><CardTravelRoundedIcon className={classes.icons}/><a href="#portfolio">Portfolio</a></Button>
                    <Button className={classes.text}><LibraryBooksRoundedIcon className={classes.icons}/><a href="#courses">Cursos</a></Button>
                    <Button className={classes.text}><ContactPhoneRoundedIcon className={classes.icons}/><a href="#contactme">Contactarme</a></Button>
                    </div>
                </Toolbar>
                <Typography variant="h2" className={classes.description}>
                FullStack Web Developer
                </Typography>
                <Typography variant="h4" className={classes.description}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={event =>  window.open('https://drive.google.com/file/d/1U_tVQpceJ3FyB17ndDYqFhg7mlJRB6ka/view')}
                >
                  Descargar CV
                </Button>
                </Typography>
            </div>
        </div>
    </>
  );
}