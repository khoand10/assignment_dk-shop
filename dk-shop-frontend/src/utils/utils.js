import _ from "lodash";

export const argsToOject = (args) => {
    return _.keyBy(args, 'id');
};
