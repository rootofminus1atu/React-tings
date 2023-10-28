import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Legend() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={<Typography variant="body1"><strong>All:</strong> Counts all the checkboxes.</Typography>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Typography variant="body1"><strong>Standard:</strong> Counts simple standards with only 1 checkbox.</Typography>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Typography variant="body1"><strong>Core half:</strong> Counts core standards (those with 2 checkboxes) if they're half done.</Typography>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Typography variant="body1"><strong>Core full:</strong> Counts core standards, but only if they're fully mastered.</Typography>} />
        </ListItem>
      </List>
    </div>
  );
}
