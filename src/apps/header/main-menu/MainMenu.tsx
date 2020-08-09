import {createStyles, makeStyles} from '@material-ui/core';
import React from 'react';
import {MenuItem} from './MainMenuItem';

export type MainMenuItem = {link: string; subs: Record<string, string>};
interface MainMenuProps {
  readonly items: Record<string, MainMenuItem>;
  onActiveChange: (title: string) => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    mainMenu: {
      display: 'flex',
      paddingTop: '15px',
      marginLeft: '92px',
    },
  })
);

export const MainMenu = ({items, onActiveChange}: MainMenuProps) => {
  const classes = useStyles();
  return (
    <div className={classes.mainMenu}>
      {Object.keys(items).map((item) => (
        <MenuItem key={item} title={item} link={items[item].link} onLinkActive={onActiveChange} />
      ))}
    </div>
  );
};
