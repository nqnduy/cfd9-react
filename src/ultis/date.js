// export const dt = (e) => {
//     return Intl.DateTimeFormat("en-GB").format(e);
// };
import moment from "moment";

export const convertDate = (date) => {
    let temp = moment(date).format("DD/MM/YYYY");
    return temp == "01/01/0001" ? "" : temp;
};
