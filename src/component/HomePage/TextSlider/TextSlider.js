import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './sldr.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '“I had the pleasure of recently using Sue`s incredible staging service for a recent listing of mine and I am hooked! Sue is incredible! Magic really! She has the ability to make homes come alive and tell a story. But not only is the service impeccable, but so is she. This listing had a very emotional component attached to it and Sue was warm, caring and gentle with my clients - just what they needed in order to feel comfortable with having her come in and work her magic with the home. Thank You! Thank You! Thank You! Don`t hesitate to give Sue a call - you`ll be VERY happy you did!”',
    name:'DENA SICARD',
    para:'Realtor',
  },
  {
    label: '“This lady deserves more than 5 stars!! I had the pleasure of meeting Sue last year and it has completely changed my business and the way I offer service to my sellers. Sue is a master at her craft and has the ability to transform a space and home well in advance of actually staging it. When she adds her magic touch of elegance and sophistication, my sellers are always blown away with the results and many of them have brought her to their new homes once they move for decorating advice. Thank you Sue for all you have done and continue to do for me and my clients!!”',
    name:'Roxanne Meek',
    para:'Realtor',
  },
  {
    label: '“Sue is one of a kind! She will help you transform your outdated home and make it a modern place where you want to live with your family. My husband was not sold on the idea of someone assisting us with this endeavour. He now quotes her regularly as we move on to the next room in our house. If you are selling your home, we highly recommend Sue. Her professional approach and expert advice will have your home SOLD in record time. Thanks again, Sue! ”',
    name:'CL',
    para:'Homeowner',
  },
  {
    label: '“Sue staged our house for sale and I have to honestly say I was very nervous she was going to come in and criticize our home. I felt an unbelievable comfort from the moment she walked in. She is not there to tear your home apart. Her job is to accent and display the best features of your home. She added sparkle and l style and I only wish I meet her years ago. After she was done making our home shine we sold in 5 days for 90k above asking”.',
    name:'SB',
    para:'Homeowner',
  },
  {
    label: '“Sue is an absolute GENIUS!!! The way she transforms a space is magical and is so amazing with my clients!”',
    name:'Jane Thuet',
    para:'Realtor',
  },
  {
    label: '“Sensational Sagebrush...This property was a real ‘labour of love’ for the Seller, He was so proud that he did most of the work himself!  His use of different ceiling styles in the same space really captured its uniqueness which ultimately helped to sell the house in mere days! In some cases, we simply do not have the time or allotted budget to do big changes to get market ready.  In those cases we do small things like in this master bedroom.  We simply changed the colour of the one wall.  What an impact THAT had!  And then there is wallpaper!  All I can say is thank goodness this one was neutral because it wasn’t going anywhere!”'
  },
  {
    label: '“The Nature Haven Residence...Sometimes, the changes we make to a space may only be to attract the younger Buyer.  This property was very well appointed.  The only challenge was that it reminded me of Mom’s place.  We all love our Mom’s but we don’t want to live in HER space.  My job was to make it VERY appealing to the younger generation!  Nailed it!”',
  },
  {
    label: '“The Gyatt House...This house had BEAUTIFUL features and AMAZING style already!  I simply needed to bring it over the top!  The goal at Finesse Interiors Real Estate Staging is to bring the WOW…right from the front door!  Our Model Home style gives the space the neutrality it needs and the elegance it deserves.  We want the Buyer experience to be one-in-a-million! Just a side note…all the chalk styled writing you see throughout the space was done by the Homeowner!”',
  },
  
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'none',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className="txt-sldd">
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
          
            {Math.abs(activeStep - index) <= 2 ? (

              <div><p className="lab-style">{step.label}</p> <p className="style-txt  pt-5"> {step.name}</p>
           <p className="style-txt2">{step.para}</p>
              </div>
              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="/"
        content="/"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            
          </Button>
        }
      />
    </div> </div>
  );
}

export default SwipeableTextMobileStepper;
