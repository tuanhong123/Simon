window.TIMINGS = {
 "intro": {
  "dur": 9.72,
  "marks": {
   "sub": 1.933
  },
  "cues": [
   [
    0.0,
    "Derivatives, module ten."
   ],
   [
    1.933,
    "To price an option, we need a model of how the underlying can move."
   ],
   [
    6.747,
    "The simplest one has just two outcomes."
   ]
  ]
 },
 "tree": {
  "dur": 46.656,
  "marks": {
   "a": 0.0,
   "up": 14.371,
   "down": 23.216,
   "call": 31.741,
   "q": 41.269
  },
  "cues": [
   [
    0.0,
    "Forwards can be priced without any view on future prices."
   ],
   [
    4.102,
    "Options cannot, because their payoff depends on where the price ends up."
   ],
   [
    9.285,
    "The one-period binomial model gives the underlying just two outcomes."
   ],
   [
    14.371,
    "Today the price is eighty euros."
   ],
   [
    16.737,
    "In one year it goes up to a hundred ten, a gross return of one point three seven five."
   ],
   [
    23.216,
    "Or it goes down to sixty, a gross return of point seven five."
   ],
   [
    27.714,
    "The gap between the two outcomes sets the volatility."
   ],
   [
    31.741,
    "Take a one-year call with an exercise price of a hundred."
   ],
   [
    35.866,
    "If the price rises, the call pays ten."
   ],
   [
    38.616,
    "If it falls, the call pays nothing."
   ],
   [
    41.269,
    "We never need to know the probability of an up move."
   ],
   [
    44.611,
    "Only the two outcomes matter."
   ]
  ]
 },
 "hedge": {
  "dur": 40.608,
  "marks": {
   "a": 0.0,
   "eq": 7.544,
   "calc": 19.333,
   "up": 24.381,
   "dn": 32.779,
   "pt": 36.739
  },
  "cues": [
   [
    0.0,
    "To price the call, build a portfolio that has no risk."
   ],
   [
    3.892,
    "Sell the call, and buy h units of the underlying."
   ],
   [
    7.544,
    "Choose h so the portfolio is worth the same in both scenarios."
   ],
   [
    12.01,
    "The hedge ratio is the difference in option payoffs, divided by the difference in underlying prices."
   ],
   [
    19.333,
    "Here that is ten minus zero, over a hundred ten minus sixty: point two."
   ],
   [
    24.381,
    "If the price rises, the portfolio is point two times a hundred ten, minus the ten owed on the call: twelve euros."
   ],
   [
    32.779,
    "If it falls, it is point two times sixty: twelve euros."
   ],
   [
    36.739,
    "Twelve euros in every scenario: a risk-free payoff."
   ]
  ]
 },
 "price": {
  "dur": 34.68,
  "marks": {
   "a": 0.0,
   "rate": 9.677,
   "c0": 13.872,
   "chk": 25.747
  },
  "cues": [
   [
    0.0,
    "A risk-free portfolio must earn the risk-free rate, otherwise there is an arbitrage."
   ],
   [
    6.036,
    "So today's value is the twelve euros, discounted."
   ],
   [
    9.677,
    "With a rate of five percent, that is eleven euros forty-three."
   ],
   [
    13.872,
    "The portfolio holds point two shares worth sixteen euros, minus the call."
   ],
   [
    19.517,
    "So the call is worth sixteen, minus eleven forty-three: four euros fifty-seven."
   ],
   [
    25.747,
    "Check: eleven forty-three growing at five percent is twelve euros."
   ],
   [
    30.557,
    "The hedged portfolio earns exactly the risk-free rate."
   ]
  ]
 },
 "example": {
  "dur": 63.36,
  "marks": {
   "a": 0.0,
   "s20": 8.781,
   "s40": 29.403,
   "vol": 46.291,
   "view": 49.099,
   "put": 58.115
  },
  "cues": [
   [
    0.0,
    "Hightest Capital sells a call on a fifty-dollar stock, with an exercise price of fifty-five and a rate of five percent."
   ],
   [
    8.781,
    "If the stock moves up or down twenty percent, it ends at sixty or forty."
   ],
   [
    13.997,
    "The call pays five or nothing."
   ],
   [
    16.171,
    "The hedge ratio is point two five, the hedged portfolio is worth ten, and today that is nine fifty-two."
   ],
   [
    23.632,
    "The call is worth twelve fifty minus nine fifty-two: two dollars ninety-eight."
   ],
   [
    29.403,
    "If the stock moves forty percent, it ends at seventy or thirty."
   ],
   [
    33.937,
    "The call pays fifteen or nothing."
   ],
   [
    36.311,
    "The hedge ratio is point three seven five, the portfolio is worth eleven twenty-five, and the call is worth eight dollars and four cents."
   ],
   [
    46.291,
    "More volatility, a higher call price."
   ],
   [
    49.099,
    "And if Hightest believes the stock is more likely to rise?"
   ],
   [
    53.068,
    "The price does not change."
   ],
   [
    54.847,
    "The hedge removes any dependence on direction."
   ],
   [
    58.115,
    "Using put-call parity, the puts are worth five thirty-six, and ten forty-two."
   ]
  ]
 },
 "rn": {
  "dur": 60.216,
  "marks": {
   "a": 0.0,
   "pi": 8.803,
   "ex1": 18.971,
   "ex2": 37.8,
   "pt": 48.267
  },
  "cues": [
   [
    0.0,
    "There is a shortcut."
   ],
   [
    1.378,
    "The call value is the expected payoff, discounted at the risk-free rate, using risk-neutral probabilities."
   ],
   [
    8.803,
    "The risk-neutral probability of an up move is one plus the rate, minus the down return, divided by the up return minus the down return."
   ],
   [
    18.971,
    "For the eighty euro stock, that is one point oh five minus point seven five, over one point three seven five minus point seven five: point four eight."
   ],
   [
    30.333,
    "The call is point four eight times ten, over one point oh five: four fifty-seven."
   ],
   [
    36.468,
    "The same answer."
   ],
   [
    37.8,
    "For Hightest at twenty percent, the probability is point six two five, and the call is three twenty-five, over one point oh five: two ninety-eight."
   ],
   [
    48.267,
    "These are not real-world probabilities."
   ],
   [
    51.0,
    "Neither the real probabilities, nor the stock's expected return, are needed."
   ],
   [
    56.328,
    "Only the up and down returns, and the risk-free rate."
   ]
  ]
 },
 "put": {
  "dur": 40.2,
  "marks": {
   "a": 0.0,
   "pay": 11.704,
   "h": 16.411,
   "v1": 23.763,
   "v0": 28.32,
   "res": 33.389
  },
  "cues": [
   [
    0.0,
    "The same method prices a put."
   ],
   [
    2.061,
    "A stock is at twenty pounds, the put has an exercise price of twenty-one, and the stock moves ten percent either way, over six months."
   ],
   [
    11.704,
    "At twenty-two, the put pays nothing."
   ],
   [
    14.063,
    "At eighteen, it pays three pounds."
   ],
   [
    16.411,
    "The hedge ratio is negative point seven five: buy the put, and also buy point seven five shares."
   ],
   [
    23.763,
    "In both scenarios, the portfolio is worth sixteen pounds fifty."
   ],
   [
    28.32,
    "Discounted at four percent for six months, that is sixteen eighteen today."
   ],
   [
    33.389,
    "Subtract point seven five shares, worth fifteen pounds."
   ],
   [
    37.399,
    "The put is worth one pound eighteen."
   ]
  ]
 },
 "wrap": {
  "dur": 26.4,
  "marks": {
   "w1": 0.0,
   "w2": 6.691,
   "w3": 13.381,
   "w4": 20.243
  },
  "cues": [
   [
    0.0,
    "An option needs a model for the underlying's price, and the binomial model gives it two outcomes."
   ],
   [
    6.691,
    "Selling a call and buying h shares creates a risk-free portfolio, which must earn the risk-free rate."
   ],
   [
    13.381,
    "Equivalently, price the option as its discounted expected payoff under risk-neutral probabilities."
   ],
   [
    20.243,
    "The real probabilities do not matter."
   ],
   [
    22.783,
    "Volatility, through the up and down returns, does."
   ]
  ]
 },
 "finish": {
  "dur": 6.528,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module ten complete."
   ],
   [
    1.478,
    "The derivatives section is finished."
   ],
   [
    4.14,
    "Next: alternative investments."
   ]
  ]
 }
};
