import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function SingleCard({ imgLink, alt, text }) {
  const cardStyle = {
    maxWidth: 345,
    mx: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Add boxShadow for the Paper
  };

  return(
    <Card sx={cardStyle} component={Paper}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgLink}
          alt={alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default function Cards() {
  return (
    <Grid container spacing={4} className="content-group">
      <Grid item xs={12} sm={6} md={3}>
        <SingleCard
          imgLink={"https://media.tenor.com/VjgOOsmZqrsAAAAC/alperen-a.gif"}
          alt={"the letter A"}
          text={"To receive an A, you must earn 1 mastery checkmark in all but 1 standard and 2 in each core Standard."}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SingleCard
          imgLink={"https://i.kym-cdn.com/photos/images/newsfeed/001/220/684/33d.jpg_large"}
          alt={"the letter B"}
          text={"To receive a B, you must earn at least 1 mastery checkmark in all but 1 standard and at least 1 in each core standard and 2 mastery checkmarks in 6 core standards"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SingleCard
          imgLink={"https://media.tenor.com/1MrJecNevgAAAAAC/c-c-my-beloved.gif"}
          alt={"the letter C"}
          text={"To receive a C you must earn at least 26 mastery checkmarks with at least 1 checkmark in all bu 1 core standard"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SingleCard
          imgLink={"https://media.tenor.com/cImGtkysj0gAAAAC/fairly-odd-parents-super-f.gif"}
          alt={"the letter D"}
          text={"To receive a D, you must earn at least 22 mastery checkmarks"}
        />
      </Grid>
    </Grid>
  );
}
