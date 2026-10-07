window.TIMINGS = {
 "intro": {
  "dur": 8.952,
  "marks": {
   "sub": 1.955
  },
  "cues": [
   [
    0.0,
    "Derivatives, module six."
   ],
   [
    1.955,
    "Futures are forwards with daily settlement."
   ],
   [
    4.833,
    "This chapter shows what that changes, and what it does not."
   ]
  ]
 },
 "price": {
  "dur": 49.8,
  "marks": {
   "a": 0.0,
   "ex": 11.896,
   "calc": 18.949,
   "st": 32.68,
   "note": 43.872
  },
  "cues": [
   [
    0.0,
    "A futures contract starts with a value of zero, and its price follows the same no-arbitrage logic as a forward: the spot price, compounded at the risk-free rate."
   ],
   [
    11.896,
    "Gold is at seventeen seventy, the rate is two percent, and the contract settles in ninety-one days."
   ],
   [
    18.949,
    "The futures price is seventeen seventy-eight seventy-six per ounce, or one hundred seventy-seven thousand eight hundred seventy-six dollars for a hundred ounces."
   ],
   [
    30.422,
    "The same as the forward price."
   ],
   [
    32.68,
    "Add storage and insurance of two dollars at the end, with a present value of one ninety-nine, and the futures price rises to seventeen eighty seventy-six."
   ],
   [
    43.872,
    "As with forwards, a futures price far below that level may point to a convenience yield."
   ]
  ]
 },
 "mtm": {
  "dur": 81.096,
  "marks": {
   "a": 0.0,
   "fwd": 9.144,
   "fut": 31.579,
   "call": 45.608,
   "reset": 50.144,
   "tab": 53.123,
   "pt": 72.421
  },
  "cues": [
   [
    0.0,
    "The difference shows up after inception."
   ],
   [
    2.755,
    "Procam holds a forward and a futures contract, both at seventeen seventy-eight seventy-six."
   ],
   [
    9.144,
    "The forward price never changes."
   ],
   [
    11.425,
    "Its value is the spot price minus the present value of that price."
   ],
   [
    16.131,
    "Seventy-one days in, gold has fallen to seventeen twenty."
   ],
   [
    20.194,
    "The value is negative fifty-six eighty-three per ounce, a loss of fifty-six hundred eighty-three dollars on a hundred ounces."
   ],
   [
    29.106,
    "It is not settled until maturity."
   ],
   [
    31.579,
    "The futures contract settles every day."
   ],
   [
    34.389,
    "On day one, the futures price falls five dollars."
   ],
   [
    37.921,
    "Procam loses five hundred, and the margin account drops to forty-four fifty, below the maintenance level."
   ],
   [
    45.608,
    "A margin call of five hundred restores it to forty-nine fifty."
   ],
   [
    50.144,
    "And the contract's value resets to zero."
   ],
   [
    53.123,
    "After day one, the forward carries an unsettled loss of four ninety-eight, while the futures contract has a value of zero and has paid out five hundred."
   ],
   [
    63.96,
    "After day two, the forward's unsettled loss is eight ninety-five, and the futures loss paid that day is four hundred."
   ],
   [
    72.421,
    "Cumulatively, the realized gains and losses are about the same."
   ],
   [
    76.77,
    "What differs is the timing of the cash, and the credit risk."
   ]
  ]
 },
 "irfut": {
  "dur": 61.152,
  "marks": {
   "a": 0.0,
   "ex": 5.709,
   "dir": 12.528,
   "bpv": 24.189,
   "bw": 35.509,
   "res": 47.64
  },
  "cues": [
   [
    0.0,
    "Interest rate futures trade on a price, not a rate: one hundred minus the yield."
   ],
   [
    5.709,
    "A price of ninety-eight twenty-five means a market reference rate of one point seven five percent."
   ],
   [
    12.528,
    "A long position gains when prices rise, which means rates fall."
   ],
   [
    17.072,
    "A short position gains when rates rise, just like a fixed-rate payer in a forward rate agreement."
   ],
   [
    24.189,
    "The value of one basis point is the notional, times point zero one percent, times the period."
   ],
   [
    30.782,
    "On a million dollars for three months, it is twenty-five dollars."
   ],
   [
    35.509,
    "Baywhite funds a loan with one-month floating money, and fears higher rates."
   ],
   [
    40.943,
    "It sells futures on fifty million dollars."
   ],
   [
    43.945,
    "One basis point is worth four sixteen sixty-seven."
   ],
   [
    47.64,
    "It sells at ninety-eight seventy-five, and the contract settles at ninety-seven seventy-five."
   ],
   [
    54.166,
    "That is a hundred basis points, and a gain of forty-one thousand six hundred sixty-seven dollars."
   ]
  ]
 },
 "diff": {
  "dur": 39.816,
  "marks": {
   "a": 0.0,
   "pos": 9.933,
   "neg": 26.139,
   "rule": 31.848,
   "pt": 35.616
  },
  "cues": [
   [
    0.0,
    "Forward and futures prices are equal under two conditions: interest rates are constant, or they are uncorrelated with futures prices."
   ],
   [
    9.933,
    "If futures prices rise along with interest rates, a long futures position is more attractive than a long forward."
   ],
   [
    17.905,
    "Profits arrive when rates are high, so they are reinvested at higher rates, and losses arrive when rates are lower."
   ],
   [
    26.139,
    "If prices and rates move in opposite directions, the long forward is more attractive."
   ],
   [
    31.848,
    "The more attractive contract tends to have the higher price."
   ],
   [
    35.616,
    "For short maturities, the differences are usually very small."
   ]
  ]
 },
 "convex": {
  "dur": 47.664,
  "marks": {
   "a": 0.0,
   "fut": 6.072,
   "fra": 14.405,
   "tab": 20.072,
   "pt": 38.048
  },
  "cues": [
   [
    0.0,
    "For interest rates, one difference remains even at short maturities: convexity bias."
   ],
   [
    6.072,
    "A futures contract has a fixed value per basis point."
   ],
   [
    9.825,
    "Each one is worth exactly twenty-five dollars on this contract."
   ],
   [
    14.405,
    "A forward rate agreement settles at the start of the period, so its payment is discounted."
   ],
   [
    20.072,
    "With rates at two point two one percent, a fall of ten basis points pays two hundred fifty on the futures, but two forty-eight sixty-nine on the FRA."
   ],
   [
    31.345,
    "A rise of ten costs two fifty on the futures, and two forty-eight fifty-six on the FRA."
   ],
   [
    38.048,
    "The futures payoff is a straight line."
   ],
   [
    40.804,
    "The FRA payoff is not."
   ],
   [
    42.4,
    "That curvature is convexity, and it grows with the discounting period."
   ]
  ]
 },
 "clearing": {
  "dur": 36.264,
  "marks": {
   "a": 0.0,
   "stress": 2.872,
   "ccp": 12.891,
   "res": 20.392,
   "cost": 26.741
  },
  "cues": [
   [
    0.0,
    "Central clearing narrows the gap further."
   ],
   [
    2.872,
    "Under stress, a futures counterparty that cannot meet a margin call is closed out early, while a flexible OTC forward may stay open."
   ],
   [
    12.891,
    "But dealers must now post margin to a central counterparty, and they usually ask their end users for margin too."
   ],
   [
    20.392,
    "So forwards increasingly behave like futures, and the cash flow differences between them shrink."
   ],
   [
    26.741,
    "Either way, participants need cash or eligible collateral on hand, and must weigh financing, transaction, and administrative costs."
   ]
  ]
 },
 "wrap": {
  "dur": 29.04,
  "marks": {
   "w1": 0.0,
   "w2": 7.309,
   "w3": 15.045,
   "w4": 21.971
  },
  "cues": [
   [
    0.0,
    "A futures price equals the forward price: spot compounded at the risk-free rate, adjusted for carry."
   ],
   [
    7.309,
    "Futures settle daily and reset to zero."
   ],
   [
    10.28,
    "Forwards settle at maturity."
   ],
   [
    12.412,
    "Cumulative gains are about equal."
   ],
   [
    15.045,
    "Interest rate futures are priced at one hundred minus the yield, with a fixed value per basis point."
   ],
   [
    21.971,
    "Correlation and convexity can separate futures from forwards, and central clearing narrows the gap."
   ]
  ]
 },
 "finish": {
  "dur": 3.096,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module six complete."
   ],
   [
    1.827,
    "Next: swaps."
   ]
  ]
 }
};
