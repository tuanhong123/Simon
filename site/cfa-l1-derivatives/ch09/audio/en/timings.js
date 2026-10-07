window.TIMINGS = {
 "intro": {
  "dur": 6.984,
  "marks": {
   "sub": 1.656
  },
  "cues": [
   [
    0.0,
    "Learning module nine."
   ],
   [
    1.656,
    "Put-call parity: how calls, puts, the underlying and a bond fit together."
   ]
  ]
 },
 "portfolios": {
  "dur": 46.92,
  "marks": {
   "goal": 0.0,
   "fid": 6.819,
   "fidsum": 16.411,
   "pp": 27.368,
   "ppsum": 34.357,
   "same": 41.197
  },
  "cues": [
   [
    0.0,
    "An investor wants the upside of an asset, with protection against a fall."
   ],
   [
    4.842,
    "There are two ways to do it."
   ],
   [
    6.819,
    "Portfolio one: buy a call with exercise price X, and a risk-free bond that pays X at maturity."
   ],
   [
    14.301,
    "This is a fiduciary call."
   ],
   [
    16.411,
    "If the price ends below X, the call is worthless and the bond pays X."
   ],
   [
    22.076,
    "Above X, the call adds S sub T minus X, for a total of S sub T."
   ],
   [
    27.368,
    "Portfolio two: buy the asset, and a put with the same exercise price."
   ],
   [
    32.41,
    "This is a protective put."
   ],
   [
    34.357,
    "Below X, the put tops the asset up to X."
   ],
   [
    37.344,
    "Above X, you simply hold the asset, worth S sub T."
   ],
   [
    41.197,
    "Both portfolios pay the larger of S sub T and X."
   ],
   [
    45.231,
    "Identical payoffs."
   ]
  ]
 },
 "table": {
  "dur": 24.576,
  "marks": {
   "head": 0.0,
   "low": 2.381,
   "mid": 6.533,
   "high": 9.811,
   "rule": 13.579
  },
  "cues": [
   [
    0.0,
    "Check every scenario at maturity."
   ],
   [
    2.381,
    "If the put is exercised, both portfolios are worth X."
   ],
   [
    6.533,
    "If S sub T equals X, both are worth X."
   ],
   [
    9.811,
    "If the call is exercised, both are worth S sub T."
   ],
   [
    13.579,
    "Identical cash flows must have the same price today."
   ],
   [
    17.353,
    "That is put-call parity: the spot price plus the put equals the call plus the present value of X."
   ]
  ]
 },
 "parity": {
  "dur": 30.432,
  "marks": {
   "ex": 0.0,
   "bond": 14.328,
   "solve": 20.507,
   "ans": 27.197
  },
  "cues": [
   [
    0.0,
    "Back to the Viswan Family Office and its Biomian shares at two hundred ninety-five rupees."
   ],
   [
    6.591,
    "A six-month call with an exercise price of two sixty-five trades at fifty-nine."
   ],
   [
    12.377,
    "The rate is four percent."
   ],
   [
    14.328,
    "The bond paying two sixty-five in six months is worth two fifty-nine eighty-five today."
   ],
   [
    20.507,
    "So two ninety-five plus the put must equal fifty-nine plus two fifty-nine eighty-five."
   ],
   [
    27.197,
    "The put should cost twenty-three rupees eighty-five."
   ]
  ]
 },
 "arb": {
  "dur": 32.016,
  "marks": {
   "mis": 0.0,
   "trade": 7.736,
   "cash": 15.216,
   "zero": 25.085
  },
  "cues": [
   [
    0.0,
    "Suppose the put trades at thirty instead."
   ],
   [
    2.865,
    "Now the protective put side costs more than the fiduciary call side."
   ],
   [
    7.736,
    "So sell the expensive side: sell the shares and sell the put."
   ],
   [
    11.932,
    "And buy the cheap side: the call and the bond."
   ],
   [
    15.216,
    "Today, V F O collects two ninety-five plus thirty, minus fifty-nine, minus two fifty-nine eighty-five: six rupees fifteen."
   ],
   [
    25.085,
    "At maturity, the positions cancel in every scenario."
   ],
   [
    29.037,
    "The six fifteen is a riskless profit."
   ]
  ]
 },
 "synth": {
  "dur": 22.056,
  "marks": {
   "head": 0.0,
   "put": 4.643,
   "stock": 9.477,
   "tab": 13.949
  },
  "cues": [
   [
    0.0,
    "Rearranging parity lets us build any position from the other three."
   ],
   [
    4.643,
    "A put equals a long call, plus a long bond, minus the underlying."
   ],
   [
    9.477,
    "The underlying equals a long call, minus a put, plus a bond."
   ],
   [
    13.949,
    "Each position can be replicated with the other three: long the ones on the same side of the equation, short the ones on the other."
   ]
  ]
 },
 "covered": {
  "dur": 34.464,
  "marks": {
   "head": 0.0,
   "eq": 10.808,
   "pay": 20.485,
   "ans": 23.891
  },
  "cues": [
   [
    0.0,
    "V F O also wants income from its shares."
   ],
   [
    2.948,
    "It considers a covered call: hold the shares and sell a call with an exercise price of three twenty-five."
   ],
   [
    10.808,
    "From parity, the shares minus the call equal the bond minus the put."
   ],
   [
    15.807,
    "A covered call behaves like a risk-free bond plus a short put."
   ],
   [
    20.485,
    "Its payoff is the smaller of S sub T and X."
   ],
   [
    23.891,
    "With the put at fifty-six, the bond worth three eighteen sixty-nine, and the shares at two ninety-five, the call should be worth thirty-two rupees thirty-one."
   ]
  ]
 },
 "fwdparity": {
  "dur": 37.944,
  "marks": {
   "head": 0.0,
   "eq": 3.811,
   "rearr": 12.357,
   "ex": 18.92,
   "ans": 27.147
  },
  "cues": [
   [
    0.0,
    "We can also replace the shares with a forward plus a bond."
   ],
   [
    3.811,
    "Put-call forward parity: the present value of the forward price, plus the put, equals the call plus the present value of X."
   ],
   [
    12.357,
    "Rearranged: the put minus the call equals the present value of X minus the forward price."
   ],
   [
    18.92,
    "The Biomian forward price is two ninety-five grown at four percent for half a year: three hundred point eight four."
   ],
   [
    27.147,
    "So the put is fifty-nine plus the discounted difference, two sixty-five minus three hundred point eight four."
   ],
   [
    34.971,
    "Again, twenty-three rupees eighty-five."
   ]
  ]
 },
 "firm": {
  "dur": 45.72,
  "marks": {
   "head": 0.0,
   "solv": 7.693,
   "insolv": 14.405,
   "eq": 19.453,
   "debt": 25.952,
   "val": 32.685,
   "spread": 37.883
  },
  "cues": [
   [
    0.0,
    "Put-call parity also describes a company."
   ],
   [
    3.268,
    "A firm worth V has zero-coupon debt with face value D."
   ],
   [
    7.693,
    "At maturity, if the firm is worth more than D, debtholders get D, and shareholders keep the rest."
   ],
   [
    14.405,
    "If it is worth less, debtholders take the whole firm, and shareholders get nothing."
   ],
   [
    19.453,
    "So equity pays the maximum of zero and V minus D: a call option on the firm's assets."
   ],
   [
    25.952,
    "Debt pays the minimum of V and D: a risk-free bond, minus a put sold to the shareholders."
   ],
   [
    32.685,
    "Firm value equals the call, plus the present value of D, minus the put."
   ],
   [
    37.883,
    "That put is the credit risk premium."
   ],
   [
    40.259,
    "The more likely insolvency, the more valuable the put, and the riskier the debt."
   ]
  ]
 },
 "wrap": {
  "dur": 27.48,
  "marks": {
   "w1": 0.0,
   "w2": 5.773,
   "w3": 14.917,
   "w4": 22.376
  },
  "cues": [
   [
    0.0,
    "A fiduciary call and a protective put both pay the larger of S sub T and X."
   ],
   [
    5.773,
    "So S sub zero plus p sub zero equals c sub zero plus the present value of X; any mispricing is an arbitrage."
   ],
   [
    14.917,
    "Rearranged, parity replicates any one position with the other three, including covered calls and forwards."
   ],
   [
    22.376,
    "Equity is a call on firm value; risky debt is a bond minus a put."
   ]
  ]
 },
 "finish": {
  "dur": 2.544,
  "marks": {},
  "cues": [
   [
    0.0,
    "That's the end of learning module nine."
   ]
  ]
 }
};
