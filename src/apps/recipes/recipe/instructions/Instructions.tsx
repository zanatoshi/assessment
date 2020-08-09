import {makeStyles, Paper, Theme, Typography} from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';

interface InstructionsProps {
  instructions: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  timelineInstructions: {marginLeft: '-90%'},
  instructions: {
    padding: theme.spacing(1),
    width: '70%',
  },
  instruction: {
    padding: theme.spacing(1),
  },
}));

export const Instructions = ({instructions}: InstructionsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.instructions}>
      <Typography variant="h4">Instructions</Typography>
      <Timeline className={classes.timelineInstructions}>
        {instructions.map((i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color={'secondary'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.instruction}>
                <Typography>{i}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
