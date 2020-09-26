import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import {hexToRgb, primaryColor} from "../../assets/jss/theme";

const styles = {
    displayNone: {
        display: "none !important"
    },
    tabsRoot: {
        minHeight: "unset !important",
        overflowX: "visible",
        "& $tabRootButton": {
            fontSize: "0.875rem"
        }
    },
    tabRootButton: {
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        padding: "10px 15px",
        borderRadius: "3px",
        lineHeight: "24px",
        border: "0 !important",
        marginLeft: "4px",
        "&:last-child": {
            marginLeft: "0px"
        }
    },
    tabSelected: {
        backgroundColor: "rgba(" + hexToRgb(primaryColor[1]) + ", 0.2)",
        transition: "0.2s background-color 0.1s",
        color: primaryColor[1] + " !important",
    },
    tabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        fontWeight: "500",
        fontSize: "12px",
        marginTop: "1px",
        "& > svg,& > .material-icons": {
            verticalAlign: "middle",
            margin: "-1px 5px 0 0 !important"
        }
    }
}

const useStyles = makeStyles(styles)

const TabSelector = ({value, handleChange, tabs}) => {

    const classes = useStyles()

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            classes={{
                root: classes.tabsRoot,
                indicator: classes.displayNone,
                scrollButtons: classes.displayNone
            }}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
        >
            {tabs.map((element, i) => {
                return (
                    <Tab
                        classes={{
                            root: classes.tabRootButton,
                            selected: classes.tabSelected,
                            wrapper: classes.tabWrapper
                        }}
                        key={i}
                        label={element.tabName}
                        icon={element.tabIcon ? <element.tabIcon/> : null}
                        value={element.value}
                    />
                );
            })}
        </Tabs>
    )
}

export default TabSelector