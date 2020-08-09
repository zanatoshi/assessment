import {Box, createStyles, makeStyles, SvgIconTypeMap, Theme} from '@material-ui/core';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';
import React from 'react';

interface InfoBarProps {
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '5px',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      whiteSpace: 'nowrap',
    },
    icon: {
      marginRight: '10px',
      fontSize: '3rem',
    },
  })
);

/**
 * A wrapper to display a children in a container with an icon before.
 *
 * @param Icon The icon to show before the children
 * @param children The ReactNode to display
 */
export const InfoBar = ({Icon, children}: InfoBarProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box display="flex" flex="row wrap">
        <Icon display="block" className={classes.icon} />
        <Box display="flex" flex="row wrap" justifyContent="space-between" flexGrow="1">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
