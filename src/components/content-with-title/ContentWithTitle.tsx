import {Box, Typography} from '@material-ui/core';
import React from 'react';

interface ContentWithTitleProps {
  title: string;
  content: string;
}

/**
 * Display some string content nicely with a title.
 *
 * @param title The title of the content
 * @param content The content as a string
 */
export const ContentWithTitle = ({title, content}: ContentWithTitleProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="caption">{title}</Typography>
      <Typography variant="subtitle1">{content}</Typography>
    </Box>
  );
};
