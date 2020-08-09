import {Button, makeStyles, Snackbar, Theme, Typography} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import PrintIcon from '@material-ui/icons/Print';
import Alert from '@material-ui/lab/Alert';
import {useState} from 'react';
import {ContentWithTitle} from '../../../../components/content-with-title/ContentWithTitle';
import {InfoBar} from '../../../../components/info-bar/InfoBar';
import {Recipe} from '../Recipe';

interface PresentationProps {
  recipe: Recipe;
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: theme.spacing(1),
    width: '50%',
  },
  title: {
    marginBottom: theme.spacing(10),
  },
  action: {
    margin: '0 10px',
    borderColor: theme.palette.secondary.dark,
  },
}));

export const Presentation = ({recipe}: PresentationProps) => {
  const [saved, setSaved] = useState(false);
  const [printed, setPrinted] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Snackbar open={saved} autoHideDuration={6000} onClose={() => setSaved(false)}>
        <Alert onClose={() => setSaved(false)} severity="success">
          Should be saved !
        </Alert>
      </Snackbar>
      <Snackbar open={printed} autoHideDuration={6000} onClose={() => setPrinted(false)}>
        <Alert onClose={() => setPrinted(false)} severity="success">
          Should be printed !
        </Alert>
      </Snackbar>
      <div className={classes.content}>
        <Typography variant="h2" className={classes.title}>
          {recipe.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {recipe.description}
        </Typography>
        <InfoBar Icon={AccessTimeIcon}>
          <ContentWithTitle title={'PREP'} content={recipe.prepTime} />
          <ContentWithTitle title={'BAKE'} content={recipe.cookTime} />
          <ContentWithTitle title={'TOTAL'} content={recipe.totalTime} />
        </InfoBar>
        <hr />
        <InfoBar Icon={GroupWorkOutlinedIcon}>
          <ContentWithTitle title={'Yield'} content={recipe.recipeYield} />
          <Button variant="outlined" startIcon={<AddIcon />} className={classes.action} onClick={() => setSaved(true)}>
            SAVE RECIPE
          </Button>
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            className={classes.action}
            onClick={() => setPrinted(true)}
          >
            PRINT
          </Button>
        </InfoBar>
      </div>
    </>
  );
};
