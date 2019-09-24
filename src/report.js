// report.js

const path = require('path');
// Object.assign(global, require(path.join(__dirname, '../src/hoffy.js')));
// Object.assign(global, require(path.join(__dirname, '../src/nba.js')));
const hoffy = require('../src/hoffy.js');
const nba = require('../src/nba.js');


const util = require('util');
const config = require('../data/0021800952.json');

// console.log(config.resultSets);
//console.log(util.inspect(config.resultSets, {depth: null}));

const pathOfFile = process.argv[2];

const rawData = JSON.parse(pathOfFile);
const headers = rawData.headers;
const rows = rawData.rows;
const data = {
    headers: headers,
    rows: rows
};

const players = rowsToObjects(data);    // Array of player objects

const report = {
    totalScore: totalScore,
    bestPasser: nba.bestPasser(data),
    totalReboundsPerTeam: nba.reboundTotals(data),

}

console.log(players);