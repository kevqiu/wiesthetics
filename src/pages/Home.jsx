import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import LazyHero from 'react-lazy-hero';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/styles.css'
import '../components/animation.css'
import "animate.css/animate.min.css"
import Background from '../images/background.png'
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';

import { getAllSlots } from '../api/slots';

import ImageGridList from '../components/ImageGridList';
import AccordianContent from '../components/AccordianContent';
import { AccountBox } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  back: {
    background: `url(${Background})`,
    padding: '2rem',
  },
  imgSize: {
    width: '100',
    height: '10rem',
  },
  secondaryWhite: {
    background: 'white',
    padding: '2rem 0rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSizeMobile: {
    width: '350px',
    height: '350px'
  },
  imgSize: {
    width: '700px',
    height: '700px'
  }, 
}));

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllSlots();
      const data = await response.json();
      setText(JSON.stringify(data));
    };

    fetchData();
  }, []);

  const isDesktopOrLaptop = useMediaQuery(json2mq({minWidth: 1200}))
  const screenSize1980 = useMediaQuery(json2mq({minWidth: 1980}))
  const screenSize1800 = useMediaQuery(json2mq({minWidth: 1800}))
  const screenSize1320 = useMediaQuery(json2mq({maxWidth: 1320}))
  const screenSize1200 = useMediaQuery(json2mq({maxWidth: 1200}))
  const screenSize900 = useMediaQuery(json2mq({maxWidth: 900}))
  const screenSize700 = useMediaQuery(json2mq({maxWidth: 700}))

  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{width: '100%'}}> 
        {/* MOBILE SCREEN SIZE */}
        {screenSize700 ? 
          <>
            <LazyHero imageSrc={Background} opacity="0.4">
              <Typography variant='h1' className="fadeInOg">
                WINNIExNAILS
              </Typography>
            </LazyHero>
              
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid container item xs={12} style={{padding: '3rem 1rem 0.5rem 1rem'}}>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                  <Typography variant='h2'>
                    About Me
                  </Typography>
                </ScrollAnimation>
              </Grid>
              <Grid container item xs={12} style={{padding: '0rem 1rem 3rem 1rem'}}>
                <ScrollAnimation animateIn="animate__fadeInLeft" delay='100' animateOnce>
                  <Typography variant='body1'>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </ScrollAnimation>
              </Grid>
              <Grid container item xs={12} style={{padding: '0.5rem 1rem 0.5rem 1rem'}}>
                <ScrollAnimation animateIn="animated2 animatedFadeInUp fadeInUpOg" animateOnce>
                  <Typography variant='h2'>
                    Gallery
                  </Typography>
                </ScrollAnimation>
              </Grid>
              <Grid container item xs={12} style={{padding: '0rem 1rem'}}>
                <ScrollAnimation animateIn="animated2 animatedFadeInUp fadeInUpOg" delay='100' animateOnce >
                  <ImageGridList/>  
                </ScrollAnimation>
              </Grid>
              <Grid container item xs={12} style={{padding: '3rem 1rem 0.5rem 1rem'}}>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                  <Typography variant='h2'>
                    About Me
                  </Typography>
                </ScrollAnimation>
              </Grid>
              <Grid container item xs={12} style={{padding: '0rem 1rem'}}>
                <ScrollAnimation animateIn="animate__fadeInLeft" delay='100' animateOnce>
                  <Typography variant='body1'>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </>
        :
        // BIG SCREEN SIZE
          <>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={screenSize1980 ? {padding: '5rem 40rem 25rem 40rem'} : {padding: '5rem 4rem 7rem 4rem'}}
            >
              
              {screenSize1320 ?
                <>
                  <Grid item xs={12} style={{paddingTop: '5rem', paddingBottom: '2rem'}}>
                    <Typography variant='h4' className="animated animatedFadeInUp fadeInUpOg">
                      VANCOUVER NAILS & FACIAL
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{paddingBottom: '5rem'}}>
                    <div className="animated animatedFadeInUp fadeInUpOg">
                      <img src={img1} alt='test' style={{maxWidth: '25rem', height: 'auto'}} className="borderoffsetImage"/>
                    </div>
                  </Grid>
                  <Grid item style={{paddingBottom: '5rem'}}>
                    <div className="animated2 animatedFadeInUp fadeInUpOg">
                      <Box maxWidth="sm" className="borderoffset" width={600}>
                        <Typography variant='body1' style={{marginTop: '-2.5em', position: 'absolute', backgroundColor: 'white'}}>
                          About Me
                        </Typography>
                        <Typography variant='body1'>
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged.
                        </Typography>  
                      </Box>
                    </div>
                  </Grid>
                  <Grid item style={{paddingBottom: '5rem'}}>
                    <div className="animated3 animatedFadeInUp fadeInUpOg">
                      <Box maxWidth="sm" className="borderoffset2" width={600}>
                        <Typography variant='body1' style={{marginTop: '-2.4em', position: 'absolute', backgroundColor: 'white'}}>
                          About Me
                        </Typography>
                        <Typography variant='body1'>
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged.
                        </Typography>                    
                      </Box>
                    </div>                  
                  </Grid>
                </>
              :
                <>
                  <Grid container item xs={12} style={{paddingTop: '5rem'}}>
                    <Typography variant='h4' style={{position: 'absolute', marginTop: '-4rem', zIndex: 1}} className="animated animatedFadeInUp fadeInUpOg">
                      VANCOUVER NAILS & FACIAL
                    </Typography>
                  </Grid>
                  <Grid container item xs={12} style={{paddingBottom: '15rem'}}>
                    <div className="animated animatedFadeInUp fadeInUpOg" style={{position: 'relative', height: '20rem', width: '80rem', overflow: 'hidden', paddingTop: '4rem'}}>
                      <img src={Background} alt='test' style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', display: 'block', bottom:'70px'}}/>
                    </div>
                    <div className="animated animatedFadeInUp fadeInUpOg" style={{position: 'absolute'}}>
                      <img src={img1} alt='test' style={{maxWidth: '25rem', height: 'auto'}} className="borderoffsetImage"/>
                    </div>
                    <div className="animated2 animatedFadeInUp fadeInUpOg" style={{position: 'absolute', marginLeft: '27rem', marginRight: '20rem', marginTop: '1rem'}}>
                      <Box maxWidth="sm" className="borderoffset" width={600}>
                        <Typography variant='body1' style={{marginTop: '-2.5em', position: 'absolute', backgroundColor: 'white'}}>
                          About Me
                        </Typography>
                        <Typography variant='body1'>
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged.
                        </Typography>  
                      </Box>
                    </div>
                    <div className="animated3 animatedFadeInUp fadeInUpOg" style={{position: 'absolute', marginLeft: '40rem', marginTop: '17rem'}}>
                      <Box maxWidth="sm" className="borderoffset2" width={600}>
                        <Typography variant='body1' style={{marginTop: '-2.4em', position: 'absolute', backgroundColor: 'white'}}>
                          About Me
                        </Typography>
                        <Typography variant='body1'>
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged.
                        </Typography>                    
                      </Box>
                    </div>
                  </Grid>
                </>
              }
              <Grid conatiner item style={{marginBottom: '5rem'}}>
                <Button
                  variant="outlined"
                  color="black"
                  size="large"
                  onClick={() => navigate('new-booking')}>
                  Set up a booking now
                </Button>  
              </Grid>
              <div style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
                <Grid container item xs={12} style={{padding: '0.5rem 1rem 0.5rem 1rem'}}>
                  <ScrollAnimation animateIn="animated animatedFadeInUp fadeInUpOg" animateOnce> 
                    <AccordianContent/>
                  </ScrollAnimation>
                </Grid>
              </div>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{paddingTop: '1rem'}}
            >
              

            </Grid>
          </> 
        }

      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <img src={image} className={classes.imgSize}/>
        </Fade>
      </Modal>
    </Layout>
  );
};

export default IndexPage;
