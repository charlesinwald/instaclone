import { CssBaseline, Container, Typography, Card, makeStyles, CardMedia, CardContent, CardActionArea, CardActions, IconButton } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(3)
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: "auto"
    },
}));

const Feed = () => {
    const classes = useStyles();

    const newLocal = [1, 2, 3];
    return <div>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                {newLocal.map(x => {
                    return <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://picsum.photos/seed/picsum/200/300"
                                title="Paella dish"
                            />
                            <CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                })}
            </Container>
        </React.Fragment>
    </div >
}

export default Feed;