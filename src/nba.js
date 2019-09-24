// nba.js
const path = require('path');
Object.assign(global, require(path.join(__dirname, '../src/hoffy.js')));


function bestPasser(data) {

    let bestPasser = data.reduce((bestPasser, element) => {
        if(bestPasser.AST <= element.AST) {
            bestPasser = element;
        }
    }, data[0]);
    return bestPasser;
}

function getTeamCities(data) {


}

function teamRebounds(city, data) {

}

function reboundTotals(data) {

}



module.exports = {
    bestPasser: bestPasser,
    getTeamCities: getTeamCities,
    teamRebounds: teamRebounds,
    reboundTotals: reboundTotals
};