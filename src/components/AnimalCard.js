import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const AnimalCard = (props) => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            {props.data.map((animal) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={animal.id}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://via.placeholder.com/150"
                                title={animal.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {animal.name}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Type: {animal.type}, Status:
                                    {animal.isExtinct === "true"
                                        ? " Not extinc"
                                        : " Extinc"}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {animal.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => props.editThisAnimal(animal)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => props.deleteAnimal(animal.id)}
                            >
                                Remove
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AnimalCard;
