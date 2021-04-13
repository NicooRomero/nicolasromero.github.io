import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import AboutMe from '../components/aboutme';
import Works from '../components/works';
import Courses from '../components/courses';
import Banner from '../components/banner';
import Portfolio from '../components/portfolio';
import ContactMe from '../components/contactme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "-40px auto 50px auto",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.69)",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <>
    <Card boxShadow={3} className={classes.root}>
      <CardContent>
        <AboutMe />
      </CardContent> 
      <Works />
      <Courses />
      <Banner />
      <Portfolio />
      <ContactMe />      
    </Card>
    </>
  );
}