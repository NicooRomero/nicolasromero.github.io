import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import front from '../images/front-end.jpg';
import back from '../images/back-end.jpg';
import full from '../images/full.jpg';

const useStyles = makeStyles({
    root: {
      width: 200,
      borderRadius: "120px",
    },
    media: {
      height: 200,
      borderRadius: "120px",
      boxShadow: "5px 6px 10px -3px rgba(0, 0, 0, 1)",
      "&:hover": {
        transform: 'scale(1.1)',        
      },
      transition: "all cubic-bezier(0.64, 0.47, 0, 0.55) .5s;"
    },
    content: {
        boxShadow: "0px 0px 3px 0px rgba(0,0,0,1)",
        maxWidth: 285,
    },
    divtext: {
        width: 200,
        textAlign: "center",
        marginTop: "10px"
    },
    cardcontent: {
        margin: "50px auto"
    },
    name: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "15px",
        textAlign: "center"
    },
    title: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "40px",
        marginBottom: "20px",
        textAlign: "center"
    },
    description: {
        color: "rgba(0, 0, 0, 0.75)",
        maxWidth: 100
    }
  });

const Works = () => {
    const classes = useStyles();
    return ( 
        <>
            <Typography variant="h3" className={classes.title}>
                Programación & Desarrollo Web
            </Typography>
            <Grid container spacing={3}>
                <CardContent className={classes.cardcontent}>
                    <CardActionArea className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={front}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>    
                        <Typography variant="h5" className={classes.name}>
                            FRONT-END
                        </Typography>
                        <div className={classes.divtext}>
                            <Typography variant="h7" className={classes.description}>
                                Código para el diseño de sitios web usando tecnologías populares como HTML, CSS, JavaScript, jQuery, Ajax, BootStrap, etc, para lograr esta tarea.
                            </Typography>
                        </div>
                </CardContent>

                <CardContent className={classes.cardcontent}>
                    <CardActionArea className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={full}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>    
                        <Typography variant="h5" className={classes.name}>
                            BACK-END
                        </Typography>
                        <div className={classes.divtext}>
                            <Typography variant="h7" className={classes.description}>
                                Código que permite al usuario ingresar datos y guardarlo en las bases de datos utilizando lenguajes de programación populares como: Java, MySql, PHP entre otros.
                            </Typography>
                        </div>
                </CardContent>

                <CardContent className={classes.cardcontent}>
                    <CardActionArea className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={back}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>    
                        <Typography variant="h5" className={classes.name}>
                            IMPLEMENTACIÓN
                        </Typography>
                        <div className={classes.divtext}>
                            <Typography variant="h7" className={classes.description}>
                                Implementar ambientes de producción, utilizando Servidores, base de datos, almacenamiento de recursos y la comunicación entre todos estos elementos. 
                            </Typography>
                        </div>
                </CardContent>
            </Grid>
        </>
     );
}
 
export default Works;