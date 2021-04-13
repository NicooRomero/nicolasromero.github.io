import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'inherit',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        ['@media (max-width:480px)']: {
            flexDirection: 'column-reverse',
            height: '10px'
          }
    },
    description: {
        color: "rgba(0, 0, 0, 0.75)",
        ['@media (max-width:480px)']: {
            maxWidth: '90%',
            textAlign: 'center'
          }
    },
    span: {
        fontWeight: 700
    }
});

const Footer = () => {
    const classes = useStyles();

    return ( 
        <>
            <div className={classes.root}>
                        <Typography variant="h7" className={classes.description}>
                            © Copyright 2021. Todos los derechos reservados. <span className={classes.span}>Nicolás Romero</span> 
                        </Typography>
                        <div>
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
                        </div>    
            </div>
        </>
     );
}
 
export default Footer;