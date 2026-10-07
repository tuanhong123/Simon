window.TIMINGS = {
 "intro": {
  "dur": 5.472,
  "marks": {
   "sub": 1.699
  },
  "cues": [
   [
    0.0,
    "Learning module ten."
   ],
   [
    1.699,
    "Pricing an option with a one-period binomial model."
   ]
  ]
 },
 "model": {
  "dur": 35.328,
  "marks": {
   "why": 0.0,
   "tree": 11.021,
   "up": 17.648,
   "down": 19.965,
   "q": 24.224,
   "vol": 29.315
  },
  "cues": [
   [
    0.0,
    "A forward can be replicated without knowing where the price will go."
   ],
   [
    4.942,
    "An option cannot: its payoff is one-sided, so we need a model of the future price."
   ],
   [
    11.021,
    "The simplest is the binomial model."
   ],
   [
    13.609,
    "Over one period, the price either goes up to S one u,"
   ],
   [
    17.648,
    "which is R u times S zero,"
   ],
   [
    19.965,
    "or down to S one d, which is R d times S zero."
   ],
   [
    24.224,
    "Call the probability of an up move q."
   ],
   [
    26.814,
    "Surprisingly, we will not need it."
   ],
   [
    29.315,
    "What matters is the spread between the up and down prices: that spread is the volatility."
   ]
  ]
 },
 "tree": {
  "dur": 29.376,
  "marks": {
   "ex": 0.0,
   "up": 8.355,
   "down": 14.043,
   "cu": 18.259,
   "cd": 23.584,
   "unk": 26.243
  },
  "cues": [
   [
    0.0,
    "An example."
   ],
   [
    0.839,
    "A one-year European call with an exercise price of one hundred euros."
   ],
   [
    6.1,
    "The underlying is at eighty."
   ],
   [
    8.355,
    "It can rise to one hundred ten, a gross return of one point three seven five."
   ],
   [
    14.043,
    "Or fall to sixty, a gross return of point seven five."
   ],
   [
    18.259,
    "If it rises, the call pays one hundred ten minus one hundred: ten euros."
   ],
   [
    23.584,
    "If it falls, the call expires worthless."
   ],
   [
    26.243,
    "The only unknown is the call's value today."
   ]
  ]
 },
 "hedge": {
  "dur": 33.48,
  "marks": {
   "idea": 0.0,
   "vu": 6.669,
   "vd": 12.229,
   "eq": 15.059,
   "h": 17.312,
   "check": 25.197
  },
  "cues": [
   [
    0.0,
    "The trick: build a portfolio with no risk."
   ],
   [
    3.023,
    "Sell one call, and buy h units of the underlying."
   ],
   [
    6.669,
    "If the price goes up, the portfolio is worth one hundred ten h, minus ten."
   ],
   [
    12.229,
    "If it goes down, it is worth sixty h."
   ],
   [
    15.059,
    "Choose h so the two are equal."
   ],
   [
    17.312,
    "The hedge ratio is the change in the option, ten, divided by the change in the underlying, fifty: point two."
   ],
   [
    25.197,
    "With h equal to point two, the portfolio is worth twelve euros either way."
   ],
   [
    30.857,
    "Twenty-two minus ten, or twelve."
   ]
  ]
 },
 "price": {
  "dur": 30.432,
  "marks": {
   "rf": 0.0,
   "v0": 5.176,
   "c0": 11.312,
   "arb": 23.784
  },
  "cues": [
   [
    0.0,
    "A portfolio with a certain payoff must earn the risk-free rate, five percent."
   ],
   [
    5.176,
    "So today it is worth twelve divided by one point oh five: eleven euros forty-three."
   ],
   [
    11.312,
    "The portfolio is point two units of the underlying, worth sixteen euros, minus the call."
   ],
   [
    17.86,
    "So the call is worth sixteen minus eleven forty-three: four euros fifty-seven."
   ],
   [
    23.784,
    "At any other price, someone could build a synthetic risk-free asset earning more than the risk-free rate."
   ]
  ]
 },
 "rn": {
  "dur": 47.592,
  "marks": {
   "eq": 0.0,
   "pi": 9.827,
   "val": 18.885,
   "q": 35.731
  },
  "cues": [
   [
    0.0,
    "There is a shortcut."
   ],
   [
    1.781,
    "Define the risk-neutral probability, pi: one plus r, minus R d, divided by R u minus R d."
   ],
   [
    9.827,
    "Here, one point oh five minus point seven five, over one point three seven five minus point seven five: point four eight."
   ],
   [
    18.885,
    "The option's value is its expected payoff using pi, discounted at the risk-free rate."
   ],
   [
    25.56,
    "Point four eight times ten, plus point five two times zero, is four eighty."
   ],
   [
    31.449,
    "Divided by one point oh five: four fifty-seven again."
   ],
   [
    35.731,
    "Notice what is missing: the real-world probability q, and investors' attitude to risk."
   ],
   [
    41.975,
    "Only volatility and the risk-free rate matter."
   ],
   [
    45.316,
    "This is risk-neutral pricing."
   ]
  ]
 },
 "hightest": {
  "dur": 64.44,
  "marks": {
   "setup": 0.0,
   "pi": 12.707,
   "call": 20.229,
   "put": 29.395,
   "parity": 38.752,
   "vol": 49.325,
   "view": 59.685
  },
  "cues": [
   [
    0.0,
    "Hightest considers selling a one-year call on a fifty dollar stock, with an exercise price of fifty-five."
   ],
   [
    7.684,
    "The stock can rise or fall twenty percent."
   ],
   [
    10.757,
    "The rate is five percent."
   ],
   [
    12.707,
    "The risk-neutral probability is one point oh five minus point eight, over point four: point six two five."
   ],
   [
    20.229,
    "The call pays five dollars in the up state, so it is worth point six two five times five, discounted: two dollars ninety-eight."
   ],
   [
    29.395,
    "A put with the same terms pays fifteen in the down state: point three seven five times fifteen, discounted, is five thirty-six."
   ],
   [
    38.752,
    "Check put-call parity: fifty plus five thirty-six equals two ninety-eight plus fifty-five discounted."
   ],
   [
    46.403,
    "Both sides are fifty-five thirty-six."
   ],
   [
    49.325,
    "If the stock could move forty percent instead, the call rises to eight oh four, and the put to ten forty-two."
   ],
   [
    57.076,
    "More volatility, more option value."
   ],
   [
    59.685,
    "And Hightest's own view on the stock does not change the price at all."
   ]
  ]
 },
 "wrap": {
  "dur": 25.152,
  "marks": {
   "w1": 0.0,
   "w2": 7.715,
   "w3": 13.68,
   "w4": 18.621
  },
  "cues": [
   [
    0.0,
    "The binomial model lets the price move up by R u or down by R d; the spread is the volatility."
   ],
   [
    7.715,
    "A hedge ratio of the option change over the price change makes a risk-free portfolio."
   ],
   [
    13.68,
    "That portfolio earns the risk-free rate, which pins down the option price."
   ],
   [
    18.621,
    "Equivalently, value equals the risk-neutral expected payoff, discounted at the risk-free rate."
   ]
  ]
 },
 "finish": {
  "dur": 4.608,
  "marks": {},
  "cues": [
   [
    0.0,
    "That's the end of learning module ten, and of the derivatives volume."
   ]
  ]
 }
};
