import React from "react";
import Card from "../../../shared/components/Card/Card";
import CardBody from "../../../shared/components/Card/CardBody";
import Button from "../../../shared/components/CustomButtons/Button";
import {Grid} from "@material-ui/core";

import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import GridContainer from "../../../shared/components/Grid/GridContainer";
import GridItem from "../../../shared/components/Grid/GridItem";

import styles from "../../assets/jss/cards/attractionCardStyle"


const useStyles = makeStyles(styles);


export default function AttractionCard({title, desc, handleClickOpenDeleteDialog, handleClickOpenShowDialog, index}) {

    const classes = useStyles();

    return (
        <GridItem xs={12} sm={12} md={6} lg={4}>
            <GridContainer justify="space-around">
                <Grid item xs={10}>
                    <Card>
                        <img
                            alt="100%x180"
                            style={{height: "180px", width: "100%", display: "block"}}
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            data-holder-rendered="true"
                        />
                        <CardBody>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <Button color="primary">Подробнее</Button>
                        </CardBody>
                    </Card>
                </Grid>
                <Grid container item xs={1} direction="column" style={{marginTop: "30px"}}>
                    <Tooltip
                        title="Редактировать"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            size="small"
                            className={classes.tableActionButton}
                            onClick={handleClickOpenShowDialog}
                        >
                            <CreateIcon
                                className={
                                    classes.tableActionButtonIcon + " " + classes.edit
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title="Удалить"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <IconButton
                            size="small"
                            className={classes.tableActionButton}
                            onClick={() => handleClickOpenDeleteDialog(index)}
                        >
                            <CloseIcon
                                className={
                                    classes.tableActionButtonIcon + " " + classes.close
                                }
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </GridContainer>
        </GridItem>
    );
}

AttractionCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    handleClickOpenDeleteDialog: PropTypes.func.isRequired,
    handleClickOpenShowDialog: PropTypes.func.isRequired
};