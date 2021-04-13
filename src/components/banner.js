import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Image from '../images/banner.jpg';
import Image2 from '../images/photobanner.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.66)",
        height: "450px",
    },
    img: {
        margin: "150px auto",
        backgroundImage: `url(${Image})`,
        height: "450px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    CardContent: {
        margin: "50px auto"
    },
    CardActionArea: {
        maxWidth: 350,
        boxShadow: " 5px 6px 7px -3px rgba(0, 0, 0, 1)",
        borderRadius: "5px",
        float: "right",
        marginTop: "30px",
            ['@media (max-width:480px)']: {
                maxWidth: 150
            }
    },
    media: {
        height: 250,
        width: 350,
        borderRadius: "5px",
        ['@media (max-width:480px)']: {
            height: 150,
            width: 150
          }
    },
    title: {
        marginTop: "60px",
        marginBottom: "20px",
        color: "rgba(250, 250, 250, 0.90)",
        fontWeight: 500,
        ['@media (max-width:480px)']: {
            fontSize: '20px'
          }
    },
    description: {
        color: "rgba(250, 250, 250, 0.60)",
    }
}));

const Banner = () => {
    const classes = useStyles();
    return ( 
        <>
            <div className={classes.img}>
                <div className={classes.root}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                        <Grid item xs>
                        <CardContent className={classes.CardContent}>
                            <CardActionArea className={classes.CardActionArea}>
                                <CardMedia
                                    className={classes.media}
                                    image={Image2}
                                />                        
                             </CardActionArea>
                        </CardContent>
                        </Grid>
                        <Grid item xs>
                        <CardContent>
                            <Typography variant="h4" className={classes.title}>
                                Desarrollo Web Moderno <br/> & Responsivo
                            </Typography>
                            <Typography variant="h7" className={classes.description}>
                                Planificación, diseño, implementación y mantenimiento de sitios web, <br/> adaptables a cualquier dispositivo y utilizando las últimas y mejores <br/> tecnologías disponibles.
                            </Typography>
                        </CardContent>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
     );
}
 
export default Banner;