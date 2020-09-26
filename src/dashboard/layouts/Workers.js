import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import Button from "shared/components/CustomButtons/Button";
import GridItem from "shared/components/Grid/GridItem";
import GridContainer from "shared/components/Grid/GridContainer";
import Table from "shared/components/Table/Table";
import Card from "shared/components/Card/Card";
import CardHeader from "shared/components/Card/CardHeader";
import CardBody from "shared/components/Card/CardBody";
import CardIcon from "../../shared/components/Card/CardIcon";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../../shared/components/Card/CardFooter";
import Danger from "../../shared/components/Typography/Danger";
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Accessibility from "@material-ui/icons/Accessibility";
import Update from "@material-ui/icons/Update";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

import styles from "./../jss/workersStyle"
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(styles);

export default function Workers() {

    const classes = useStyles();

    const mockPeople = [
        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
    ]

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>content_copy</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Used Space</p>
                            <h3 className={classes.cardTitle}>
                                49/50 <small>GB</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning/>
                                </Danger>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    Get more space
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Store/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenue</p>
                            <h3 className={classes.cardTitle}>$34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                Last 24 Hours
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>info_outline</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Fixed Issues</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer/>
                                Tracked from Github
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Сотрудники</p>
                            <h3 className={classes.cardTitle}>6</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update/>
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <Card>
                <CardHeader color="primary">
                    <GridContainer justify="space-between">
                        <GridItem xs={10}>
                            <h4 className={classes.cardTitleWhite}>Список работников</h4>
                            <p className={classes.cardCategoryWhite}>
                                Отслеживайте продуктивность своих сотрудников и многое другое
                            </p>
                        </GridItem>
                        <GridItem xs={1}>
                            <Tooltip
                                title="Скачать"
                                placement="top"
                                classes={{tooltip: classes.tooltip}}
                            >
                                <Button justIcon round color="transparent">
                                    <GetAppRoundedIcon/>
                                </Button>
                            </Tooltip>
                        </GridItem>
                    </GridContainer>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="primary"
                        tableHead={["Имя", "Страна", "Город", "Зарплата"]}
                        tableData={mockPeople}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
