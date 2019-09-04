import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        border: 'silver 1px solid',
        margin: '40px',
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: 'solid 1px red'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
}));


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    Topic Placeholder
                </Typography>

                <div className={classes.flex}>

                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ['test'].map(topic => (
                                    <ListItem button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{ from: 'bob', msg: 'hey you guys' }].map((chat, i) => (
                                <div className={classes.flex}>
                                    <Chip
                                        label={chat.from}
                                    />
                                    <Typography variant='p'> {chat.msg}</Typography >
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Primary
                    </Button>
                </div>
            </Paper>

        </div>
    )
}