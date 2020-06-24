import stateNames from "./stateNames";

function number(num) {
    if (num === null || num === undefined) {
        return 'unknown';
    }

    return num.toLocaleString();
}

function stateFullName(stateAbbreviation) {
   return  stateNames.find(n => n.abbreviation === stateAbbreviation);
}

export default { number, stateFullName }
