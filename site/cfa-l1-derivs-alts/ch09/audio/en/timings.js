window.TIMINGS = {
 "intro": {
  "dur": 10.296,
  "marks": {
   "sub": 2.019
  },
  "cues": [
   [
    0.0,
    "Derivatives, module nine."
   ],
   [
    2.019,
    "Calls, puts, the underlying and a bond are all tied together by one no-arbitrage relationship: put-call parity."
   ]
  ]
 },
 "portfolios": {
  "dur": 47.448,
  "marks": {
   "a": 0.0,
   "fid": 2.168,
   "prot": 15.408,
   "tab": 22.483,
   "pt": 40.8
  },
  "cues": [
   [
    0.0,
    "Consider two portfolios."
   ],
   [
    2.168,
    "The first is a fiduciary call: a call option, plus a risk-free bond that pays the exercise price at maturity."
   ],
   [
    10.387,
    "The bond covers the exercise cost, and the call gives the upside."
   ],
   [
    15.408,
    "The second is a protective put: the underlying, plus a put option."
   ],
   [
    19.864,
    "The put sets a floor under the price."
   ],
   [
    22.483,
    "At maturity, if the price ends below the exercise price, the call expires worthless and the bond pays X."
   ],
   [
    30.303,
    "The put is exercised, and the underlying plus the put are worth X."
   ],
   [
    35.266,
    "If the price ends above, both portfolios are worth the underlying price."
   ],
   [
    40.8,
    "The payoffs are identical in every scenario, so the two portfolios must cost the same today."
   ]
  ]
 },
 "parity": {
  "dur": 54.12,
  "marks": {
   "a": 0.0,
   "ex": 16.035,
   "bond": 27.888,
   "res": 30.803,
   "arb": 39.307
  },
  "cues": [
   [
    0.0,
    "That is put-call parity."
   ],
   [
    1.768,
    "The underlying plus the put equals the call plus the present value of the exercise price."
   ],
   [
    8.326,
    "It holds for European options with the same exercise price and expiry, on an underlying with no income."
   ],
   [
    16.035,
    "Biomian shares are at two ninety-five rupees."
   ],
   [
    19.508,
    "A six-month call at an exercise price of two sixty-five trades at fifty-nine, and the rate is four percent."
   ],
   [
    27.888,
    "The bond is worth two fifty-nine eighty-five."
   ],
   [
    30.803,
    "So the put should cost two ninety-five minus fifty-nine minus two fifty-nine eighty-five, which is twenty-three eighty-five."
   ],
   [
    39.307,
    "If the put actually trades at thirty, the left side is too expensive."
   ],
   [
    44.232,
    "Sell the shares and the put, buy the call and the bond."
   ],
   [
    48.159,
    "You collect six rupees fifteen today, and every outcome at maturity nets to zero."
   ]
  ]
 },
 "blocks": {
  "dur": 48.744,
  "marks": {
   "a": 0.0,
   "put": 4.408,
   "call": 9.328,
   "und": 13.779,
   "bond": 17.611,
   "cc": 21.827,
   "ex": 31.76
  },
  "cues": [
   [
    0.0,
    "Rearranging the equation gives a recipe for each building block."
   ],
   [
    4.408,
    "A long put is a long call, plus a long bond, minus the underlying."
   ],
   [
    9.328,
    "A long call is the underlying, plus a put, minus the bond."
   ],
   [
    13.779,
    "The underlying is a call, minus a put, plus a bond."
   ],
   [
    17.611,
    "And a bond is the underlying, plus a put, minus a call."
   ],
   [
    21.827,
    "A covered call is the underlying minus a call."
   ],
   [
    25.438,
    "By the same equation, that is a bond minus a put: a long bond, plus a sold put."
   ],
   [
    31.76,
    "Biomian again, at two ninety-five."
   ],
   [
    34.394,
    "A call at an exercise price of three twenty-five is replicated with a put priced at fifty-six."
   ],
   [
    41.676,
    "The bond is worth three eighteen sixty-nine, so the call must cost thirty-two thirty-one."
   ]
  ]
 },
 "forward": {
  "dur": 42.072,
  "marks": {
   "a": 0.0,
   "eq": 10.403,
   "diff": 18.373,
   "ex": 30.184
  },
  "cues": [
   [
    0.0,
    "The underlying can itself be replicated, with a long forward and a bond that pays the forward price."
   ],
   [
    7.191,
    "Substituting gives put-call forward parity."
   ],
   [
    10.403,
    "The present value of the forward price, plus the put, equals the call, plus the present value of the exercise price."
   ],
   [
    18.373,
    "Rearranged, a long put and a short call equals a long bond and a short forward, with a value equal to the exercise price minus the forward price, discounted."
   ],
   [
    30.184,
    "For Biomian, the forward price is three hundred rupees and eighty-four paise."
   ],
   [
    35.717,
    "The put works out to twenty-three eighty-six, the same as before, apart from rounding."
   ]
  ]
 },
 "firm": {
  "dur": 48.144,
  "marks": {
   "a": 0.0,
   "solv": 9.229,
   "insol": 16.048,
   "eq": 21.971,
   "debt": 28.448,
   "v": 33.816
  },
  "cues": [
   [
    0.0,
    "Put-call parity even explains a company's capital structure."
   ],
   [
    4.555,
    "Suppose a firm owes debt with a face value D, due at time T."
   ],
   [
    9.229,
    "If the firm's value then exceeds D, debtholders are repaid in full and shareholders keep the rest."
   ],
   [
    16.048,
    "If it falls short, debtholders take everything the firm has, and shareholders get nothing."
   ],
   [
    21.971,
    "So shareholders hold a call option on the firm's assets, with the debt as the exercise price."
   ],
   [
    28.448,
    "Debtholders hold a risk-free bond, and have sold a put option to the shareholders."
   ],
   [
    33.816,
    "Applying parity, the firm's value equals the call, plus the present value of debt, minus the put."
   ],
   [
    40.816,
    "Shareholders have unlimited upside and limited downside."
   ],
   [
    44.857,
    "Debtholders' upside is capped at repayment."
   ]
  ]
 },
 "wrap": {
  "dur": 23.712,
  "marks": {
   "w1": 0.0,
   "w2": 5.88,
   "w3": 12.848,
   "w4": 18.835
  },
  "cues": [
   [
    0.0,
    "A fiduciary call and a protective put have identical payoffs, so they cost the same."
   ],
   [
    5.88,
    "Put-call parity: underlying plus put equals call plus the present value of the exercise price."
   ],
   [
    12.848,
    "Any mispricing is a riskless arbitrage, and any one position can be built from the others."
   ],
   [
    18.835,
    "Equity is a call on the firm, and risky debt is a bond minus a put."
   ]
  ]
 },
 "finish": {
  "dur": 4.824,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module nine complete."
   ],
   [
    1.713,
    "Next: the one-period binomial model."
   ]
  ]
 }
};
