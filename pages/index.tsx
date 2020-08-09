import {Grid} from '@material-ui/core';
import React from 'react';
import {HomeCard} from '../src/apps/home/HomeCard';

export default function Index() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <HomeCard
          title={'Shop'}
          image={'/shop.png'}
          link={{title: 'Shop under construction', enable: false, link: '/shop'}}
          content={'Find everything you need to prepare beautifull meals !'}
        />
      </Grid>
      <Grid item xs={4}>
        <HomeCard
          title={'Recipes'}
          image={'/recipes.jpg'}
          link={{title: 'GO', enable: true, link: '/recipes'}}
          content={'Find the recipe that you need to prepare beautifull meals !'}
        />
      </Grid>
      <Grid item xs={4}>
        <HomeCard
          title={'Learn'}
          image={'/learn.jpg'}
          link={{title: 'Learning center under construction', enable: false, link: '/learn'}}
          content={'Unlimited source of knowledge to improve your cooking skills !'}
        />
      </Grid>
      <Grid item xs={4}>
        <HomeCard
          title={'About'}
          image={'/about.jpg'}
          link={{title: 'History is too young !', enable: false, link: '/about'}}
          content={'Want to know more about us ? Find our history !'}
        />
      </Grid>
      <Grid item xs={4}>
        <HomeCard
          title={'Blog'}
          image={'/blog.png'}
          link={{title: 'Blog under construction', enable: false, link: '/blog'}}
          content={'Checkout our adventures in the blog !'}
        />
      </Grid>
    </Grid>
  );
}
