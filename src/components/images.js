import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import img1 from '../images/pages/bookmark-page.jpg';
import img2 from '../images/pages/easybank-page.jpg';
import img3 from '../images/pages/manage-page.jpg';
import img4 from '../images/pages/old-portfolio.jpg';
import img5 from '../images/pages/tiendajs-page.jpg';
import img6 from '../images/pages/adm-budget.jpg';
import img7 from '../images/pages/portfoliov2.jpg';

const images = [
  {
    url: `${img1}`,
    title: 'Bookmark Landing Page',
    width: '30%',
    margin: '10px auto',
    link: 'https://bookmark-pagenr.netlify.app/',
    desc: 'HTML - CSS - JavaScript'
  },
  {
    url: `${img2}`,
    title: 'Easybank Landing Page',
    width: '30%',
    margin: '10px auto',
    link: 'https://easylandingreact.netlify.app/',
    desc: 'Front-End React'
  },
  {
    url: `${img3}`,
    title: 'Manage Landing Page',
    width: '30%',
    margin: '10px auto',
    link: 'https://managelandingnr.netlify.app/',
    desc: 'HTML - CSS - JavaScript'
  },
  {
    url: `${img4}`,
    title: 'Old Porfolio',
    width: '30%',
    margin: '10px auto',
    link: 'https://nicooromero.github.io/',
    desc: 'HTML - CSS - JavaScript'
  },
  {
    url: `${img5}`,
    title: 'Tienda Javascript',
    width: '30%',
    margin: '10px auto',
    link: 'https://tiendavirtualjs.netlify.app/',
    desc: 'HTML - CSS - JavaScript (carrito)'
  },
  {
    url: `${img6}`,
    title: 'Operaciones',
    width: '30%',
    margin: '10px auto',
    link: 'https://github.com/NicooRomero/projectomern',
    desc: 'MERN - MaterialUi'
  },
{
  url: `${img7}`,
  title: 'Portfolio V2',
  width: '30%',
  margin: '10px auto',
  link: 'https://nicooromero.github.io/portfoliov2/',
  desc: 'React - Material UI - Emailjs'
},
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    '& $imageTitle': {
      transform: "scale(1.3)"
    },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    boxShadow: " 5px 6px 7px -3px rgba(0, 0, 0, 1)",
    ['@media (max-width:480px)']: {
      maxWidth: '90%'
    }
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    ['@media (max-width:480px)']: {
      maxWidth: '90%'
    }
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontWeight: 500,
    textShadow: "2px 2px 2px #000",
    transition: "all ease-in-out .5s"
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            margin: image.margin
          }}
          onClick={event =>  window.open(`${image.link}`)}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} /><br/>
              {image.desc}
              
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}