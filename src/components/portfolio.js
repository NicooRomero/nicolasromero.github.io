import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ButtonBases from './images';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "0px -1px 15px -7px rgba(0,0,0,0.75)"
    },
    gridcontent: {
        marginBottom: "100px"
    },
    gridcard: {
        margin: "0 auto",
        maxWidth: "90%",
    },
    title: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "40px",
        marginBottom: "20px",
        textAlign: "center"
    },
    icongit: {
        fontSize: "30px",
        marginRight: "10px"
    },
    btngit: {
        "&:hover": {
            backgroundColor: "#f50057",
            color: "white",
        },
        transition: "all ease-in-out .5s"
    }
}));



const Portfolio = () => {
    const classes = useStyles();

    function CardRow() {
        return (
          <>
            <Grid item xs={12} className={classes.gridcardrow}>
              <Paper className={classes.paper}> <ButtonBases /> </Paper>
            </Grid>
          </>
        );
      }

    return ( 
        <>
            <Typography id='portfolio' variant="h3" className={classes.title}>
                Portfolio<br/>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.btngit} 
                        onClick={event =>  window.open('https://github.com/NicooRomero')}
                    >
                        <GitHubIcon className={classes.icongit}/> @NicooRomero
                    </Button>
            </Typography>
            <div className={classes.root}>
                <Grid container spacing={1} className={classes.gridcontent}>
                    <Grid container item xl={6} spacing={3} className={classes.gridcard}>
                        <CardRow />
                    </Grid>
                </Grid>
            </div>
        </>
     );
}
 
export default Portfolio;