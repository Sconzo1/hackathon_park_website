import React from "react";

import {makeStyles} from "@material-ui/core/styles";
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

import styles from "../assets/jss/workersStyle"
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(styles);

export default function Workers() {

    const classes = useStyles();

    const mockPeople = [
        ["Dakota Rice", "Niger", "Oud-Turnhout", "₽36,738"],
        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "₽23,789"],
        ["Sage Rodriguez", "Netherlands", "Baileux", "₽56,142"],
        ["Philip Chaney", "Korea, South", "Overland Park", "₽38,735"],
        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "₽63,542"],
        ["Mason Porter", "Chile", "Gloucester", "₽78,615"]
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
                            <p className={classes.cardCategory}>План (мес.)</p>
                            <h3 className={classes.cardTitle}>
                                46<small>%</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning/>
                                </Danger>
                                <a onClick={e => e.preventDefault()}>
                                    Вы отстаете от графика
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
                            <p className={classes.cardCategory}>Выручка</p>
                            <h3 className={classes.cardTitle}>₽34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                За 24 часа
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
                            <p className={classes.cardCategory}>Отзывов</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer/>
                                С сайта "Яндекс"
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
                            <h3 className={classes.cardTitle}>42</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/> За последнее время
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
                                <IconButton color="inherit">
                                    <GetAppRoundedIcon/>
                                </IconButton>
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
