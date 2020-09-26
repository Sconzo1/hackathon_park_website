import {dangerColor, primaryColor} from "shared/assets/jss/theme.js";
import tooltipStyle from "shared/assets/jss/material-dashboard-react/tooltipStyle.js";

const attractionCardStyle = {
    ...tooltipStyle,
    tableActionButton: {
        width: "27px",
        height: "27px",
        padding: "0"
    },
    tableActionButtonIcon: {
        width: "17px",
        height: "17px"
    },
    edit: {
        backgroundColor: "transparent",
        color: primaryColor[0],
        boxShadow: "none"
    },
    close: {
        backgroundColor: "transparent",
        color: dangerColor[0],
        boxShadow: "none"
    },
};
export default attractionCardStyle;
