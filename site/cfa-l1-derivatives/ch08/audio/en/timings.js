window.TIMINGS = {
 "intro": {
  "dur": 6.528,
  "marks": {
   "sub": 1.741
  },
  "cues": [
   [
    0.0,
    "Learning module eight."
   ],
   [
    1.741,
    "What an option is worth before maturity, and what drives that value."
   ]
  ]
 },
 "exercise": {
  "dur": 42.504,
  "marks": {
   "head": 0.0,
   "call": 7.821,
   "put": 15.6,
   "ex": 21.949,
   "calc": 32.437
  },
  "cues": [
   [
    0.0,
    "Before maturity, ask: what would the option be worth if it could be exercised now?"
   ],
   [
    5.794,
    "That is its exercise value."
   ],
   [
    7.821,
    "For a call, it is the spot price minus the present value of the exercise price, or zero if that is negative."
   ],
   [
    15.6,
    "For a put, it is the present value of the exercise price minus the spot price, or zero."
   ],
   [
    21.949,
    "Take a one-year put with an exercise price of one thousand euros, and a one percent rate."
   ],
   [
    28.494,
    "Six months in, the spot price is nine hundred fifty."
   ],
   [
    32.437,
    "The present value of one thousand for six months is nine ninety-five oh four."
   ],
   [
    38.439,
    "So the exercise value is forty-five euros oh four."
   ]
  ]
 },
 "money": {
  "dur": 37.512,
  "marks": {
   "head": 0.0,
   "call": 3.981,
   "put": 12.272,
   "deep": 21.629
  },
  "cues": [
   [
    0.0,
    "Moneyness compares the spot price with the exercise price."
   ],
   [
    3.981,
    "A call is in the money when the spot price is above X, at the money when they are equal, and out of the money when the spot is below."
   ],
   [
    12.272,
    "For a put, it is the reverse: in the money when the spot is below X."
   ],
   [
    16.96,
    "Our put, with the spot at nine fifty, is fifty euros in the money."
   ],
   [
    21.629,
    "Moneyness also drives sensitivity."
   ],
   [
    24.078,
    "A deep in-the-money option moves almost one for one with the underlying."
   ],
   [
    29.264,
    "A deep out-of-the-money option barely moves."
   ],
   [
    32.433,
    "And near the money, small moves decide whether it will be exercised."
   ]
  ]
 },
 "timevalue": {
  "dur": 31.512,
  "marks": {
   "eq": 0.0,
   "ex": 4.792,
   "why": 13.979,
   "decay": 24.36
  },
  "cues": [
   [
    0.0,
    "An option's price is its exercise value plus its time value."
   ],
   [
    4.792,
    "If our put trades at fifty euros, and its exercise value is forty-five oh four, its time value is four euros ninety-six."
   ],
   [
    13.979,
    "Time value reflects the chance that the price moves favorably before maturity."
   ],
   [
    19.779,
    "More time, or more volatility, means more possible outcomes."
   ],
   [
    24.36,
    "Time value is always positive, and it shrinks to zero at maturity."
   ],
   [
    29.42,
    "This is time value decay."
   ]
  ]
 },
 "bounds": {
  "dur": 46.008,
  "marks": {
   "head": 0.0,
   "clow": 2.936,
   "cup": 11.12,
   "ex": 18.899,
   "exans": 28.149,
   "put": 37.443
  },
  "cues": [
   [
    0.0,
    "Arbitrage sets bounds on option prices."
   ],
   [
    2.936,
    "A call can never be worth less than its exercise value: the spot price minus the present value of X, or zero."
   ],
   [
    11.12,
    "And no one pays more than the underlying itself for the right to buy it."
   ],
   [
    15.874,
    "So the call's upper bound is the spot price."
   ],
   [
    18.899,
    "Example: a one-year call with X of one thousand euros, one percent rate."
   ],
   [
    24.47,
    "Six months in, the spot is one thousand fifty."
   ],
   [
    28.149,
    "The lower bound is one thousand fifty minus nine ninety-five oh four: fifty-four ninety-six."
   ],
   [
    34.641,
    "The upper bound is one thousand fifty."
   ],
   [
    37.443,
    "For a put, the lower bound is the present value of X minus the spot price, or zero."
   ],
   [
    43.494,
    "And the upper bound is X itself."
   ]
  ]
 },
 "replicate": {
  "dur": 45.144,
  "marks": {
   "call": 0.0,
   "fwd": 9.848,
   "part": 17.712,
   "put": 30.077,
   "adjust": 34.656
  },
  "cues": [
   [
    0.0,
    "Can we replicate an option, like a forward?"
   ],
   [
    3.145,
    "A call rises with the underlying, like a long forward, but only pays when it is exercised."
   ],
   [
    9.848,
    "For a forward, we borrow the present value of the forward price and buy the asset, and hold that until maturity."
   ],
   [
    17.712,
    "For a call, exercise is uncertain."
   ],
   [
    20.251,
    "So we borrow only a fraction of the present value of X, and buy a fraction of the underlying, based on the likelihood of exercise."
   ],
   [
    30.077,
    "A put is replicated the other way: short the underlying and lend."
   ],
   [
    34.656,
    "And because the likelihood of exercise keeps changing, an option's replicating position must be adjusted over time."
   ],
   [
    43.06,
    "A forward's never changes."
   ]
  ]
 },
 "underlying": {
  "dur": 29.784,
  "marks": {
   "head": 0.0,
   "s": 2.979,
   "sens": 11.547,
   "x": 17.917,
   "xp": 26.848
  },
  "cues": [
   [
    0.0,
    "Now the factors that drive an option's value."
   ],
   [
    2.979,
    "First, the underlying price."
   ],
   [
    4.966,
    "A higher price raises a call's value and lowers a put's, just like long and short forwards."
   ],
   [
    11.547,
    "But the effect is not one for one."
   ],
   [
    13.784,
    "It is stronger the more likely the option is to be exercised."
   ],
   [
    17.917,
    "Second, the exercise price."
   ],
   [
    19.883,
    "A lower X makes a call more valuable: more likely to be exercised, and paying more when it is."
   ],
   [
    26.848,
    "A higher X makes a put more valuable."
   ]
  ]
 },
 "others": {
  "dur": 40.272,
  "marks": {
   "t": 0.0,
   "tp": 9.101,
   "r": 18.565,
   "vol": 27.069
  },
  "cues": [
   [
    0.0,
    "Third, time to expiration."
   ],
   [
    1.962,
    "More time raises a call's value: the upside is unlimited, the downside capped at the premium."
   ],
   [
    9.101,
    "For a put it usually helps too, but not always: a deep in-the-money put waits longer to collect its payoff, which lowers its present value."
   ],
   [
    18.565,
    "Fourth, the risk-free rate."
   ],
   [
    20.484,
    "A higher rate lowers the present value of X."
   ],
   [
    23.61,
    "That raises a call's value, and lowers a put's."
   ],
   [
    27.069,
    "Fifth, volatility."
   ],
   [
    28.41,
    "A wider range of possible prices raises the chance of a big payoff, while the loss is still capped."
   ],
   [
    35.784,
    "Higher volatility raises the value of both calls and puts."
   ]
  ]
 },
 "carry": {
  "dur": 23.976,
  "marks": {
   "inc": 0.0,
   "cost": 14.733,
   "table": 18.096
  },
  "cues": [
   [
    0.0,
    "Last, income and costs of owning the underlying."
   ],
   [
    3.579,
    "Income, such as dividends or a convenience yield, goes to the owner of the asset, not the option holder."
   ],
   [
    11.333,
    "It lowers a call's value and raises a put's."
   ],
   [
    14.733,
    "Carrying costs, such as storage, do the opposite."
   ],
   [
    18.096,
    "Here is the full picture."
   ],
   [
    19.752,
    "An increase in each factor, and its effect on calls and puts."
   ]
  ]
 },
 "wrap": {
  "dur": 32.112,
  "marks": {
   "w1": 0.0,
   "w2": 5.987,
   "w3": 12.763,
   "w4": 21.8
  },
  "cues": [
   [
    0.0,
    "Exercise value compares the spot price with the present value of the exercise price."
   ],
   [
    5.987,
    "Option price equals exercise value plus time value, which decays to zero at maturity."
   ],
   [
    12.763,
    "Arbitrage bounds: a call lies between its exercise value and the spot price; a put between its exercise value and X."
   ],
   [
    21.8,
    "Volatility and time raise option values; the underlying, exercise price, rate and income push calls and puts in opposite directions."
   ]
  ]
 },
 "finish": {
  "dur": 2.52,
  "marks": {},
  "cues": [
   [
    0.0,
    "That's the end of learning module eight."
   ]
  ]
 }
};
