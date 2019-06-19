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
import './TextSlider.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '“We just walked in and there were no words to describe how beautiful it feels in here. We are very impressed and so very excited. Hats off to you and your team”',
    name:'MARTHA STANLEY',
    para:'South Carolina',
  },
  {
    label: '“Your beautiful staging was the key in making these offers pour in so quickly!You Absoulutly kick ass at what you do lady!”',
    name:'Sergio Ramos',
    para:'Central Madrid',
  },
  {
    label: '“This look amazing! you guys did an unreal job. Worth every penny. Not to mention you were an absolute joy to work with”.',
    para:'Central Madrid',
  },
  {
    label: '“I have had many people tell me how amazing it looks and what a transformation it was. Your eye for simple elegance showcased our house in the best light”.',
    para:'Central Madrid',
  }
  
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  
    paddingLeft: theme.spacing(4),
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

              <div><p className="lab-style">{step.label}</p> {/*<p className="style-txt  pt-5"> {step.name}</p>
            <p className="style-txt2">{step.para}</p>*/} 
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
