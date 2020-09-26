import React, {useCallback, useEffect, useState} from "react";
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


export default function AttractionCard({title, desc, image, handleClickOpenDeleteDialog, handleClickOpenShowDialog, index}) {

    const classes = useStyles();

    const [src, setSrc] = useState("");

    const dynLoadImage = useCallback(() => {
        if (image) {
            image.then(mod => {
                setSrc(mod.default);
            });
        }
    }, [image, setSrc]);

    useEffect(dynLoadImage, []);

    return (
        <GridItem xs={12} sm={12} md={6} lg={4}>
            <GridContainer justify="space-around">
                <Grid item xs={10}>
                    <Card>
                        <img
                            alt="Profile"
                            style={{
                                height: "180px",
                                width: "100%",
                                display: "block",
                                objectFit: "cover"
                            }}
                            src={src}
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