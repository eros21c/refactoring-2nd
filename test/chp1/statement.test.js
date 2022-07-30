import { expect } from 'chai';
import {statement} from '../../src/chp1/statement.js'

describe('statement', () => {
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
