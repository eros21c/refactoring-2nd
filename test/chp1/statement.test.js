import { expect } from 'chai';
import {statement, htmlStatement} from '../../src/chp1/statement.js'

let playsJson =
    {
        "hamlet": {"name": "Hamlet", "type": "tragedy"},
        "as-like": {"name": "As You Like It", "type": "comedy"},
        "othello": {"name": "Othello", "type": "tragedy"}
    };

let  invoicesJson =
    [
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ];

describe('statement', () => {

    it('should print a statement for multiple plays, single customer and multiple seats in plain text', () => {
        let expected = "청구 내역 (고객명: BigCo)\n" +
        " Hamlet: $650.00 (55석)\n" +
        " As You Like It: $580.00 (35석)\n" +
        " Othello: $500.00 (40석)\n" +
        "총액: $1,730.00\n" +
        "적립 포인트: 47점\n";

        expect(statement(invoicesJson[0], playsJson)).to.equal(expected);
    });
});

describe('htmlStatement', () => {

    it('should print a htmlStatement for multiple plays, single customer and multiple seats in html', () => {
        let expected = "<h1>청구 내역 (고객명: BigCo)</h1>\n" +
            "<table>\n" +
            "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>" +
            "  <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>\n" +
            "  <tr><td>As You Like It</td><td>(35석)</td><td>$580.00</td></tr>\n" +
            "  <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>\n" +
            "</table>\n" +
            "<p>총액: <em>$1,730.00</em></p>\n" +
            "<p>적립 포인트: <em>47</em>점</p>\n";

        expect(htmlStatement(invoicesJson[0], playsJson)).to.equal(expected);
    });
});
