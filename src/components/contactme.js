import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "60%",
      boxShadow: "0px -1px 15px -7px rgba(0,0,0,0.75)",
      margin: "50px auto",
      ['@media (max-width:480px)']: {
        maxWidth: '90%'
      }
    },
    textfield: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '90%',
        }
    },
    cardcontent: {
        margin: "0 auto",
        textAlign: "center"
    },
    title: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "30px",
        marginBottom: "20px",
        textAlign: "center",
    },
    sendmsj: {
        fontWeight: 700,
        color: "rgba(0, 0, 0, 0.75)",
        marginTop: "10px",
        marginBottom: "10px",
        textAlign: "center",
        ['@media (max-width:480px)']: {
            fontSize: '30px'
          }
    },
    pos: {
      marginBottom: 12,
    },
    snackbar: {
        width: '30%',
        margin: '20px',
        ['@media (max-width:480px)']: {
            width: '90%',
          }
    },
    divinfo: {
        display: "flex",
        marginBottom: '30px',
        justifyContent: 'center',
        ['@media (max-width:480px)']: {
            flexDirection: 'column'
          }

    }
  }));

const ContactMe = () => {
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const [msg, setMsg] = useState({
        user_name: '',
        user_email:'',
        subject: '',
        message: ''
    });

    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleChange = e => {
        setMsg({
            ...msg,
            [e.target.name]: e.target.value
        })
    }

    const { user_name, user_email, subject, message } = msg;

    function onSubmit(e)  {
        e.preventDefault();

        
        if(user_name.trim() === '' || user_email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        
            setError('error');
            setAlert('Todos los campos son obligatorios!')
            setOpen(true);      
            return;        
        } else {
            emailjs.sendForm('service_jctneoe', 'template_1pf54j7', e.target, 'user_psebtTd50aPWM7eK4j5kk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
            setError('success');
            setAlert('Mensaje enviado con éxito!')
            setOpen(true);
            e.target.reset();
        }

        setMsg({
            user_name: '',
            user_email:'',
            subject: '',
            message: ''
        });
    }

    return (
        <>
            <Typography id='contactme' variant="h3" className={classes.title}>
                Contactarme
            </Typography>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={error}>
                    {alert}
                </Alert>
            </Snackbar>
            <Card className={classes.root}>
                <CardContent className={classes.cardcontent}>
                <Typography variant="h4" className={classes.sendmsj}>
                    Envíame un mensaje
                </Typography>
                    <form onSubmit={onSubmit} noValidate autoComplete="off" className={classes.textfield}>
                        <TextField id="outlined-basic1" label="Nombre" variant="outlined" name="user_name" onChange={handleChange} />
                        <TextField id="outlined-basic2" label="Email" variant="outlined" name="user_email" onChange={handleChange} />
                        <TextField id="outlined-basic3" label="Asunto" variant="outlined" name="subject" onChange={handleChange} />
                        <TextField id="outlined-basic4" label="Mensaje" variant="outlined" multiline rows={6} columns={12} name="message" onChange={handleChange} /> <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </form>    
                </CardContent>    
            </Card> 
                <div className={classes.divinfo}>   
                    <Alert severity="info" className={classes.snackbar}>Correo: nicooromero@gmail.com</Alert> <Alert severity="info" className={classes.snackbar}>Teléfono: +54 3854 263 515</Alert>
                </div>                   
                
            
        </>
    );
}

export default ContactMe;