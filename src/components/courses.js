import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: "50px auto",
    boxShadow: "0px -1px 15px -7px rgba(0,0,0,0.75)",
    borderRadius: "15px",
  },
  heading: {
    display: "flex",
    alignItems: "flex-end",
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 700
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "rgba(0, 0, 0, 0.75)",
    marginLeft: "50px"
  },
  borders: {
    "&:first-child":{
      borderTopRightRadius: "15px",
      borderTopLeftRadius: "15px"
    },
    "&:last-child":{
        borderBottomRightRadius: "15px",
        borderBottomLeftRadius: "15px"
      }
  },
  details: {
      marginLeft: "15px"
  },
  starstyle: {
      color: "#3f51b5",
      marginRight: "5px"
  },
  title: {
    fontWeight: 700,
    color: "rgba(0, 0, 0, 0.75)",
    marginTop: "40px",
    marginBottom: "20px",
    textAlign: "center"
    },
    img: {
        maxWidth: "60px",
        marginLeft: "50px"
    },
    hours: {
        color: "#388e3c",
        fontWeight: 500,
        marginLeft: "20px"
    },
    udemy: {
        color: "#f44336",
        fontWeight: 500
    },
    codoacodo: {
        color: "#ffb74d",
        fontWeight: 500
    }
}));


const Courses = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return ( 
        <>
        <Typography id='courses' variant="h3" className={classes.title}>
                Cursos & Capacitaciones
        </Typography>
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.borders}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Desarrollador Web FullStack</Typography>
            <Typography className={classes.secondaryHeading}><span className={classes.codoacodo}>Codo a Codo 2021</span> - En Curso </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Programa de enseñanza en Programación con certificación de validez Nacional acordada con el Ministerio de Educación de la ciudad Autónoma de Buenos Aires.<br/>
                <span className={classes.hours}>60 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Desarrollador JAVA FullStack </Typography>
            <Typography className={classes.secondaryHeading}>
            <span className={classes.codoacodo}>Codo a Codo 2020</span> - Finalizado
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Programa de enseñanza en Programación con certificación de validez Nacional acordada con el Ministerio de Educación de la ciudad Autónoma de Buenos Aires.<br/>
                <span className={classes.hours}>60 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Desarrollo Web Completo</Typography>
            <Typography className={classes.secondaryHeading}>
            <span className={classes.udemy}>Udemy</span> - HTML5, CSS3, JS, AJAX, PHP y MySQL.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={classes.details}>
                Páginas web con HTML y CSS. <br/>
                Código JavaScript y jQuery. <br/>
                Sitios web dínamicos con PHP y MYSQL.<br/> 
                Aplicaciones CRUD con PHP y MySQL. <br/>
                Administración con AdminLTE, PHP y MySQL.<br/>
                <span className={classes.hours}>89 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={classes.borders}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Bootstrap 4 de Cero a Maestro</Typography>
            <Typography className={classes.secondaryHeading}>
                <span className={classes.udemy}>Udemy</span> - Fundamentos, Componentes, Interfaces, Bootstrap4.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={classes.details}>
                Fundamentos de Bootstrap 4<br/>
                Componentes de Bootstrap 4, Botones, Navbars, Formularios, Alertas, Barras de Progreso, Insignias, Tablas, Tartjetas, etc.<br/>
                Widgets Javascript: Carrusel, alertas, diálogos, tooltips, etc..<br/>
                Panel de administración responsive para un sitio de Ecommerce.<br/>
                Sitios web y aplicaciones responsive.<br/>
                Flexbox en Bootstrap 4.<br/>
                <span className={classes.hours}>15 hs de duración total</span> 
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>JavaScript Moderno ES6</Typography>
            <Typography className={classes.secondaryHeading}>
                <span className={classes.udemy}>Udemy</span> - Electron, React, MongoDB, Node, Express.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={classes.details}>
                ES6 - REST APIS con JSON y Fetch API. <br/>
                Async / Await.<br/>
                Programación asíncrona con Promises.<br/>
                Callbacks con async / await.<br/>
                <span className={classes.hours}>37 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.borders}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Master en Frameworks JavaScript</Typography>
            <Typography className={classes.secondaryHeading}>
                <span className={classes.udemy}>Udemy</span> - Angular, React, Vue.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={classes.details}>
                Angular, React & Vue.<br/>
                Programación orientada a objetos en JS.<br/>
                Nociones en BD con MongoDB.<br/>
                <span className={classes.hours}>26 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.borders}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>React - La Guía Completa</Typography>
            <Typography className={classes.secondaryHeading}>
                <span className={classes.udemy}>Udemy</span> - Hooks, Context, Redux, MERN.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={classes.details}>
                Hooks useReducer y useContext<br/>
                Mongo Express y Node con React.<br/>
                Proyectos con Redux y React Redux v7 (con Hooks).<br/>
                Fetch API y Axios con React para consumir API's.<br/>
                Aplicaciones y request CRUD con React.<br/>
                Proyectos con Nextjs y Gatsby.<br/>
                <span className={classes.hours}>44 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>        
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={classes.borders}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
            >
            <Typography className={classes.heading}><GradeIcon className={classes.starstyle}/>Laravel 7</Typography>
            <Typography className={classes.secondaryHeading}>
                <span className={classes.udemy}>Udemy</span> - Aplicaciones y Sitios Web con PHP y MVC.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Métodos para consultar la base de datos con Eloquent.<br/>
                Como funciona el MVC en Laravel.<br/>
                Crear CRUD's, Autenticación de usuario.<br/>
                Librerias JS como Dropzone, Leaflet, MomentJS, Sweet Alert.<br/>
                <span className={classes.hours}>23 hs de duración total</span>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={classes.borders}>
            <AccordionSummary>
                <Typography className={classes.heading}>Total horas de capacitación:<span className={classes.hours}>354hs</span></Typography>
            </AccordionSummary>
        </Accordion>
        </div> 
        </>
     );
}
 
export default Courses;