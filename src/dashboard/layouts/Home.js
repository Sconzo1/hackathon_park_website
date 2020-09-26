import React from "react";

import ChartistGraph from "react-chartist";

import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';

import GridItem from "shared/components/Grid/GridItem.js";
import GridContainer from "shared/components/Grid/GridContainer.js";
import Table from "shared/components/Table/Table.js";
import Tasks from "shared/components/Tasks/Tasks.js";
import CustomTabs from "shared/components/CustomTabs/CustomTabs.js";
import Danger from "shared/components/Typography/Danger.js";
import Card from "shared/components/Card/Card.js";
import CardHeader from "shared/components/Card/CardHeader.js";
import CardIcon from "shared/components/Card/CardIcon.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardFooter from "shared/components/Card/CardFooter.js";

import {complaints, suggestions} from "dashboard/variables/general.js";

import {complaintsChart, revenueChart, visitsChart} from "dashboard/variables/charts.js";

import styles from "../assets/jss/homeStyle.js";


const useStyles = makeStyles(styles);


export default function Home() {

    const classes = useStyles();

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
                            <p className={classes.cardCategory}>Посетители</p>
                            <h3 className={classes.cardTitle}>+2453</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                За 1 неделю
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={revenueChart.data}
                                type="Line"
                                options={revenueChart.options}
                                listener={revenueChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Выручка</h4>
                            <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                                за последний месяц
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> обновлено 3 часа назад
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph
                                className="ct-chart"
                                data={visitsChart.data}
                                type="Bar"
                                options={visitsChart.options}
                                responsiveOptions={visitsChart.responsiveOptions}
                                listener={visitsChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Посетители</h4>
                            <p className={classes.cardCategory}>
                <span className={classes.successText}>+4621
                </span>{" "}
                                за последний месяц
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/>только что
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartistGraph
                                className="ct-chart"
                                data={complaintsChart.data}
                                type="Line"
                                options={complaintsChart.options}
                                listener={complaintsChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Жалобы</h4>
                            <p className={classes.cardCategory}>За последний месяц</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> обновлено 12 минут назад
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title="Мнения:"
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Жалобы",
                                tabIcon: AssignmentLateRoundedIcon,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={complaints}
                                    />
                                )
                            },
                            {
                                tabName: "Предложения",
                                tabIcon: AssignmentTurnedInRoundedIcon,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0]}
                                        tasksIndexes={[0, 1]}
                                        tasks={suggestions}
                                    />
                                )
                            }
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Сотрудники</h4>
                            <p className={classes.cardCategoryWhite}>
                                Новые сотрудники на 22.09
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Имя", "Зарплата", "Страна"]}
                                tableData={[
                                    ["1", "Дакота Райс", "₽36,738", "Россия"],
                                    ["2", "Елена Разных", "₽23,789", "Россия"],
                                    ["3", "Иван Иванов", "₽56,142", "Россия"],
                                    ["4", "Данил Ирукин", "₽38,735", "Казахстан"]
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
