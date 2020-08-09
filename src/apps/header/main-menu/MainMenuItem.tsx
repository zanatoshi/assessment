import {makeStyles, Theme} from '@material-ui/core';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {LinkRouter} from '../../../components/link-router/LinkRouter';

const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    ...theme.typography.button,
    letterSpacing: '0.09em',
    margin: '16px 29px',
    borderBottom: (active: boolean) => (active ? '2px solid' : 'none'),
    borderBottomColor: (active: boolean) => (active ? theme.palette.secondary.dark : 'none'),
    cursor: 'pointer',
    color: theme.palette.common.black,
    display: 'inline-block',
  },
}));

interface MenuItemProps {
  title: string;
  link: string;
  onLinkActive: (title: string) => void;
}

export const MenuItem = ({title, link, onLinkActive}: MenuItemProps) => {
  const {pathname} = useRouter();
  const classes = useStyles(new RegExp(`/${link}`).test(pathname));

  useEffect(() => {
    const matcher = new RegExp(`/${link}`);
    if (pathname !== null && matcher.test(pathname)) {
      onLinkActive(title);
    }
  }, [pathname, onLinkActive, title]);

  return (
    <LinkRouter className={classes.menuItem} href={`/${link}`}>
      {title}
    </LinkRouter>
  );
};
