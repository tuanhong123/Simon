window.TIMINGS = {
 "intro": {
  "dur": 13.032,
  "marks": {
   "sub": 1.912
  },
  "cues": [
   [
    0.0,
    "Derivatives, module eight."
   ],
   [
    1.912,
    "What is an option worth before it expires, and what drives that value?"
   ],
   [
    7.019,
    "This chapter looks at European options, which can only be exercised at maturity."
   ]
  ]
 },
 "exercise": {
  "dur": 43.632,
  "marks": {
   "a": 0.0,
   "call": 11.021,
   "put": 17.563,
   "ex": 23.912,
   "res": 39.264
  },
  "cues": [
   [
    0.0,
    "At any time before expiry, an option's price has two parts."
   ],
   [
    4.288,
    "The first is its exercise value: what it would be worth if it could be exercised right now."
   ],
   [
    11.021,
    "For a call, that is the spot price minus the present value of the exercise price, or zero."
   ],
   [
    17.563,
    "For a put, it is the present value of the exercise price minus the spot price, or zero."
   ],
   [
    23.912,
    "Take a one-year put with an exercise price of one thousand euros, and a rate of one percent."
   ],
   [
    30.781,
    "Six months in, the spot price is nine fifty."
   ],
   [
    34.067,
    "The present value of the exercise price is nine ninety-five oh four."
   ],
   [
    39.264,
    "So the exercise value is forty-five euros and four cents."
   ]
  ]
 },
 "money": {
  "dur": 41.328,
  "marks": {
   "a": 0.0,
   "call": 3.981,
   "put": 12.336,
   "ex": 14.248,
   "sens": 21.984
  },
  "cues": [
   [
    0.0,
    "Moneyness compares the spot price with the exercise price."
   ],
   [
    3.981,
    "A call is in the money when the spot price is above the exercise price, at the money when equal, and out of the money when below."
   ],
   [
    12.336,
    "For a put, it is the reverse."
   ],
   [
    14.248,
    "The put with a spot price of nine fifty and an exercise price of a thousand is in the money by fifty euros."
   ],
   [
    21.984,
    "Moneyness also drives sensitivity."
   ],
   [
    24.499,
    "A deep in-the-money option, very likely to be exercised, moves nearly one for one with the underlying."
   ],
   [
    32.043,
    "A deep out-of-the-money option barely moves."
   ],
   [
    35.298,
    "And near the money, small price changes decide whether the option is exercised."
   ]
  ]
 },
 "time": {
  "dur": 37.92,
  "marks": {
   "a": 0.0,
   "ex": 6.733,
   "res": 12.421,
   "why": 15.443,
   "decay": 24.651,
   "atm": 34.093
  },
  "cues": [
   [
    0.0,
    "The second part of an option's price is its time value: the price minus the exercise value."
   ],
   [
    6.733,
    "The put is trading at fifty euros."
   ],
   [
    9.257,
    "Its exercise value is forty-five oh four."
   ],
   [
    12.421,
    "The time value is four euros ninety-six."
   ],
   [
    15.443,
    "It is always positive, because a longer time, and more volatility, give the underlying more room to move in the option holder's favor."
   ],
   [
    24.651,
    "As maturity approaches, time value shrinks to zero, a process called time decay."
   ],
   [
    30.918,
    "At expiry, the price equals the payoff."
   ],
   [
    34.093,
    "Time value is largest when the option is at the money."
   ]
  ]
 },
 "bounds": {
  "dur": 39.0,
  "marks": {
   "a": 0.0,
   "call": 3.128,
   "put": 14.107,
   "ex": 20.221,
   "res": 29.749
  },
  "cues": [
   [
    0.0,
    "No arbitrage puts bounds on option prices."
   ],
   [
    3.128,
    "A call can be worth no less than its exercise value, and no more than the underlying price."
   ],
   [
    9.153,
    "Nobody would pay more for the right to buy a share than the share itself."
   ],
   [
    14.107,
    "A put can be worth no less than its exercise value, and no more than the exercise price."
   ],
   [
    20.221,
    "Take a call with an exercise price of a thousand euros, a one percent rate, and six months left."
   ],
   [
    27.333,
    "The underlying is at ten fifty."
   ],
   [
    29.749,
    "The lower bound is fifty-four ninety-six."
   ],
   [
    32.723,
    "The upper bound is ten fifty."
   ],
   [
    34.827,
    "Any call price outside that range creates an arbitrage."
   ]
  ]
 },
 "replicate": {
  "dur": 50.064,
  "marks": {
   "a": 0.0,
   "call": 12.664,
   "adj": 25.029,
   "put": 35.859,
   "end": 41.76
  },
  "cues": [
   [
    0.0,
    "Replication works differently for options."
   ],
   [
    2.895,
    "A long forward can be copied by borrowing the present value of the forward price, and buying the underlying."
   ],
   [
    10.338,
    "The trade never needs to change."
   ],
   [
    12.664,
    "A call is copied by buying the underlying and borrowing, but only a proportion of the present value of the exercise price."
   ],
   [
    21.25,
    "That proportion reflects the likelihood of exercise."
   ],
   [
    25.029,
    "As the underlying moves, and the option goes further in or out of the money, the proportion changes, so the replicating position must be adjusted over time."
   ],
   [
    35.859,
    "A put is copied by selling the underlying short, and lending a proportion of the proceeds."
   ],
   [
    41.76,
    "At expiry, if the call is exercised, the underlying is sold to repay the loan."
   ],
   [
    47.685,
    "If not, nothing more happens."
   ]
  ]
 },
 "factors": {
  "dur": 55.128,
  "marks": {
   "a": 0.0,
   "s": 2.701,
   "x": 7.344,
   "t": 12.904,
   "r": 25.973,
   "v": 37.293,
   "i": 45.755
  },
  "cues": [
   [
    0.0,
    "Six factors drive an option's value."
   ],
   [
    2.701,
    "The underlying price."
   ],
   [
    4.14,
    "A higher price helps a call, and hurts a put."
   ],
   [
    7.344,
    "The exercise price."
   ],
   [
    8.76,
    "A higher exercise price hurts a call, and helps a put."
   ],
   [
    12.904,
    "Time to expiration."
   ],
   [
    14.294,
    "More time usually helps both."
   ],
   [
    16.416,
    "For a put there is an exception: a longer wait lowers the present value of the payoff, so a deep in-the-money put can lose value."
   ],
   [
    25.973,
    "The risk-free rate."
   ],
   [
    27.346,
    "A higher rate lowers the present value of the exercise price, so it helps a call and hurts a put."
   ],
   [
    34.355,
    "It does not directly affect time value."
   ],
   [
    37.293,
    "Volatility."
   ],
   [
    38.105,
    "More volatility helps both calls and puts, because it widens the upside without changing the downside."
   ],
   [
    45.755,
    "Income or cost of owning the underlying."
   ],
   [
    48.721,
    "Income, such as dividends, hurts a call and helps a put."
   ],
   [
    52.873,
    "Carry costs do the opposite."
   ]
  ]
 },
 "wrap": {
  "dur": 28.752,
  "marks": {
   "w1": 0.0,
   "w2": 7.053,
   "w3": 13.637,
   "w4": 24.04
  },
  "cues": [
   [
    0.0,
    "An option's price is its exercise value plus its time value, and time value decays to zero."
   ],
   [
    7.053,
    "Moneyness tells you how likely exercise is, and how sensitive the option is to the underlying."
   ],
   [
    13.637,
    "No arbitrage bounds a call between its exercise value and the underlying price, and a put between its exercise value and the exercise price."
   ],
   [
    24.04,
    "Replicating an option needs a changing position, unlike a forward."
   ]
  ]
 },
 "finish": {
  "dur": 3.768,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module eight complete."
   ],
   [
    1.792,
    "Next: put-call parity."
   ]
  ]
 }
};
