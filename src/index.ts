import * as express from 'express'
import * as _ from 'lodash'
import app from './app'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})

export interface Stock {
    name: string,
    getQuote(d:Date): number
}

export interface Position {
    stock: Stock,
    quantity: number
}

export interface Portfolio {
    positions: {
        [x:string]: number
    },
    valuation: number,
    availableFunds: number
}

export interface Operation {
    name: string,
    quantity: number,
    side: number,
    date: Date
    // include fee
}

function getQuote(name: string, date: Date): number {
    return 10;
}

function refreshPortfolioValuation(portfolio: Portfolio, date: Date) {
    let valuation: number = 0;
    _.forEach(portfolio.positions, (quantity: number, name: string) => {
        valuation += getQuote(name, date) * quantity;
    });
    portfolio.valuation = valuation + portfolio.availableFunds;
    return portfolio;
}

function executeOperation(portfolio: Portfolio, operation: Operation) {
    // assume that operation is valid
    portfolio.availableFunds -= getQuote(operation.name, operation.date) * operation.quantity * operation.side; // fees
    portfolio.positions[operation.name] = portfolio.positions[operation.name] || 0;
    portfolio.positions[operation.name] += operation.quantity * operation.side;
    if (portfolio.positions[operation.name] == 0) {
        delete portfolio.positions[operation.name];
    }
    return portfolio;
}

let portfolio: Portfolio = {
    positions: {},
    availableFunds: 100,
    valuation: 100
}

const operation: Operation = {
    name: 'AXA',
    quantity: 10,
    side: +1,
    date: new Date()
}

portfolio = executeOperation(portfolio, {
    name: 'AXA',
    quantity: 10,
    side: +1,
    date: new Date()
});

console.log(portfolio);

portfolio = executeOperation(portfolio, {
    name: 'YAHOO',
    quantity: 3,
    side: -1,
    date: new Date()
});

console.log(portfolio);
