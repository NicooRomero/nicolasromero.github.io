import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import ImgPerfil from '../images/perfil.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
      boxShadow: " 5px 6px 7px -3px rgba(0, 0, 0, 1)",
      borderRadius: "5px",
    },
    media: {
      height: 350,
      borderRadius: "5px"
    },
    content: {
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,1)",
        maxWidth: 285,
    },
    gridmedia: {
        display: "flex",
        flexGrow: 0.8,
        
    },
    cardcontent: {
        margin: "50px auto",
        ['@media (max-width:480px)']: {
            padding: '0'
          }
    },
    name: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "90px",
        ['@media (max-width:480px)']: {
            marginTop: '0',
            textAlign: 'center'
          }
    },
    description: {
        marginTop: "30px",
        color: "rgba(0, 0, 0, 0.60)",
        ['@media (max-width:480px)']: {
            textAlign: 'center'
          }
    },
    grid: {
        ['@media (max-width:480px)']: {
            display: 'grid'
          }
    },
    gridxs6: {
        ['@media (max-width:480px)']: {
            maxWidth: '90%',
            margin: '0 auto'
          }
    }
  }));

const AboutMe = () => {

    const classes = useStyles();
    

    return ( 
        <> 
                <Grid id='aboutme' container spacing={2} className={classes.grid}>
                    <Grid item xs className={classes.gridmedia}>
                        <CardContent className={classes.cardcontent}>
                            <CardActionArea className={classes.root}>
                                <CardMedia
                                className={classes.media}
                                image={ImgPerfil}
                                />                        
                            </CardActionArea>
                            
                            <IconButton >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton onClick={e =>  window.open('https://github.com/NicooRomero')} >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton onClick={e =>  window.open('http://linkedin.com/in/nicooromero')} >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton onClick={e =>  window.open('mailto:nicooromero@gmail.com')} >
                                <EmailIcon />
                            </IconButton>
                            <IconButton onClick={e =>  window.open('https://wa.me/543854263515')}>
                                <WhatsAppIcon />
                            </IconButton>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} className={classes.gridxs6}>   
                        <Typography variant="h3" className={classes.name}>
                            Nicolás Romero
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                            Santiago del Estero, Argentina. <br/>
                            13/Diciembre/1990
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                        Mi objetivo principal es desarrollarme profesionalmente y evolucionar en mi sector, de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearme completamente con los objetivos de la empresa.
                        </Typography>
                    </Grid> 
                </Grid>      
        </>
     );
}
 
export default AboutMe;