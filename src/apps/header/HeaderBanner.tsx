import {AppBar, Box, Container, makeStyles, Theme} from '@material-ui/core';
import {useRouter} from 'next/router';
import React, {useCallback, useState} from 'react';
import {MainMenu, MainMenuItem} from './main-menu/MainMenu';
import {SubMenu} from './sub-menu/SubMenu';

const MAIN_MENU_ITEMS: Record<string, MainMenuItem> = {
  SHOP: {link: 'shop', subs: {TEST: 'test'}},
  RECIPES: {link: 'recipes', subs: {MEALS: 'meals', COLLECTIONS: 'collections', RESOURCES: 'resources'}},
  LEARN: {link: 'learn', subs: {TEST: 'test'}},
  ABOUT: {link: 'about', subs: {TEST: 'test'}},
  BLOG: {link: 'blog', subs: {TEST: 'test'}},
};

const useStyles = makeStyles((theme: Theme) => ({
  headerBanner: {
    margin: '0',
    marginBottom: theme.spacing(2),
  },
  header: {
    margin: '0 auto',
    display: 'flex',
  },
  logo: {
    height: '100px',
    position: 'absolute',
    cursor: 'pointer',
  },
  mainMenu: {
    height: '110px',
  },
  subMenu: {
    backgroundColor: '#f8f5f0',
  },
}));

export const HeaderBanner = () => {
  const classes = useStyles();
  const [active, setActive] = useState<string | undefined>(undefined);
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/');
    setActive(undefined);
  }, []);

  return (
    <div className={classes.headerBanner}>
      <AppBar className={classes.mainMenu} color="transparent" elevation={0} position="relative">
        <Container className={classes.header}>
          <img className={classes.logo} alt="" src={`/monkey.png`} onClick={onClick} />
          <MainMenu items={MAIN_MENU_ITEMS} onActiveChange={setActive} />
        </Container>
        <Box className={classes.subMenu}>
          {active && (
            <Container className={classes.header}>
              <SubMenu parentLink={MAIN_MENU_ITEMS[active].link} links={MAIN_MENU_ITEMS[active].subs} />
            </Container>
          )}
        </Box>
      </AppBar>
    </div>
  );
};
