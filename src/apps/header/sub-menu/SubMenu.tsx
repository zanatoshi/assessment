import {makeStyles, Theme} from '@material-ui/core';
import React from 'react';
import {LinkRouter} from '../../../components/link-router/LinkRouter';
interface SubMenuProps {
  links: Record<string, string>;
  parentLink: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  subMenu: {
    display: 'flex',
    padding: '10px 0',
    marginLeft: '92px',
  },
  item: {
    fontSize: '0.75rem',
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: '0.09em',
    margin: '0 29px',
    cursor: 'pointer',
    color: theme.palette.common.black,
    display: 'inline-block',
  },
}));

export const SubMenu = ({parentLink, links}: SubMenuProps) => {
  const classes = useStyles();
  return (
    <div className={classes.subMenu}>
      {Object.keys(links).map((link) => (
        <LinkRouter className={classes.item} key={links[link]} href={`/${parentLink}/${links[link]}`}>
          {link}
        </LinkRouter>
      ))}
    </div>
  );
};
