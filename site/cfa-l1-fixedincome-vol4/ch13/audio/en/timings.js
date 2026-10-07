window.TIMINGS = {
 "intro": {
  "dur": 8.328,
  "marks": {
   "sub": 1.592
  },
  "cues": [
   [
    0.0,
    "Module thirteen."
   ],
   [
    1.592,
    "Risk measures for bonds with uncertain cash flows, and for changes in the shape of the yield curve."
   ]
  ]
 },
 "effective": {
  "dur": 60.624,
  "marks": {
   "opt": 3.299,
   "ed": 10.672,
   "f": 18.6,
   "ec": 29.515,
   "mod": 39.32,
   "ex": 49.275
  },
  "cues": [
   [
    0.0,
    "Yield duration assumes cash flows are certain."
   ],
   [
    3.299,
    "A callable bond breaks that."
   ],
   [
    5.197,
    "If rates fall, it may be called early, so there is no single yield to maturity."
   ],
   [
    10.672,
    "The right measure is effective duration: how much the price changes when the benchmark yield curve shifts in parallel."
   ],
   [
    18.6,
    "Effective duration is the price after a downward shift, minus the price after an upward shift, divided by twice the shift, times the original price."
   ],
   [
    29.515,
    "Effective convexity adds the two shifted prices, subtracts twice the original, and divides by the shift squared, times the original price."
   ],
   [
    39.32,
    "The shifted prices come from an option pricing model."
   ],
   [
    42.915,
    "It uses the call schedule, credit spreads, and an assumption about interest rate volatility."
   ],
   [
    49.275,
    "For the five year bond, shifted prices of one hundred point two four one, and ninety nine point seven six, give an effective duration of four point eight one."
   ]
  ]
 },
 "callable": {
  "dur": 51.696,
  "marks": {
   "nc": 5.069,
   "c": 10.203,
   "hi": 17.32,
   "lo": 22.517,
   "neg": 28.931,
   "put": 35.813,
   "mbs": 44.723
  },
  "cues": [
   [
    0.0,
    "Compare a callable bond with an otherwise identical non-callable bond."
   ],
   [
    5.069,
    "The non-callable price rises steadily as the benchmark yield falls."
   ],
   [
    10.203,
    "The callable price is always lower."
   ],
   [
    12.604,
    "The difference is the value of the call option, held by the issuer."
   ],
   [
    17.32,
    "When yields are high, the option is worth little, and the two bonds behave alike."
   ],
   [
    22.517,
    "When yields are low, the issuer is likely to call, and the callable bond's price stops rising."
   ],
   [
    28.931,
    "Its slope flattens, so its effective duration falls, and its effective convexity turns negative."
   ],
   [
    35.813,
    "A putable bond is the mirror image."
   ],
   [
    38.443,
    "The put protects the investor when yields rise, so duration falls when rates rise."
   ],
   [
    44.723,
    "Mortgage-backed securities behave like callable bonds, because homeowners refinance when rates fall."
   ]
  ]
 },
 "est": {
  "dur": 41.04,
  "marks": {
   "f": 6.2,
   "ex": 13.147,
   "dur": 25.149,
   "cvx": 29.472,
   "tot": 33.475,
   "note": 36.517
  },
  "cues": [
   [
    0.0,
    "With effective duration and convexity, we can estimate the price change for a parallel shift."
   ],
   [
    6.2,
    "Minus effective duration times the shift, plus half the effective convexity times the shift squared."
   ],
   [
    13.147,
    "Take a callable bond with effective duration six point oh nine four, and effective convexity of minus two hundred thirty."
   ],
   [
    21.808,
    "The benchmark curve rises fifty basis points."
   ],
   [
    25.149,
    "The duration effect is minus three point oh four seven percent."
   ],
   [
    29.472,
    "The negative convexity subtracts another point two eight eight."
   ],
   [
    33.475,
    "The total is minus three point three three percent."
   ],
   [
    36.517,
    "For a callable bond, the convexity term hurts in both directions."
   ]
  ]
 },
 "keyrate": {
  "dur": 58.152,
  "marks": {
   "def": 9.165,
   "sum": 16.581,
   "ex": 20.392,
   "bars": 29.6,
   "sc": 40.451,
   "use": 50.043
  },
  "cues": [
   [
    0.0,
    "Effective duration assumes the whole curve moves together."
   ],
   [
    4.265,
    "Key rate duration measures sensitivity to one maturity at a time."
   ],
   [
    9.165,
    "Shift only the two year rate, then only the five year, then only the ten year, and measure each price change."
   ],
   [
    16.581,
    "The key rate durations add up to the effective duration."
   ],
   [
    20.392,
    "Take a portfolio of two, five, and ten year government bonds, with equal par."
   ],
   [
    26.223,
    "Its duration is five point three four five."
   ],
   [
    29.6,
    "The key rate durations are zero point six seven six at two years, one point six three two at five years, and three point oh three seven at ten years."
   ],
   [
    40.451,
    "Suppose only the two year rate rises twenty five basis points, flattening the curve."
   ],
   [
    46.433,
    "The price falls by about point one seven percent."
   ],
   [
    50.043,
    "Managers use key rate durations to tilt a portfolio toward the curve changes they expect, and to see shaping risk."
   ]
  ]
 },
 "empirical": {
  "dur": 43.512,
  "marks": {
   "emp": 8.909,
   "ex": 14.683,
   "gov": 18.216,
   "spr": 21.557,
   "net": 26.051,
   "use": 34.043
  },
  "cues": [
   [
    0.0,
    "So far, durations are analytical."
   ],
   [
    2.458,
    "They use formulas, and assume benchmark yields and credit spreads move independently."
   ],
   [
    8.909,
    "Empirical duration instead uses historical data and statistical models."
   ],
   [
    14.683,
    "In a crisis, investors flee to government bonds."
   ],
   [
    18.216,
    "Benchmark yields fall, which raises prices."
   ],
   [
    21.557,
    "But credit spreads widen, which lowers the prices of risky bonds."
   ],
   [
    26.051,
    "The net gain is smaller than analytical duration predicts."
   ],
   [
    30.441,
    "So empirical duration is lower for such bonds."
   ],
   [
    34.043,
    "For government bonds, the two measures are similar."
   ],
   [
    37.497,
    "For a corporate portfolio, especially high yield, empirical duration is more relevant."
   ]
  ]
 },
 "wrap": {
  "dur": 22.584,
  "marks": {
   "w1": 1.293,
   "w2": 5.488,
   "w3": 11.005,
   "w4": 17.248
  },
  "cues": [
   [
    0.0,
    "Let's recap."
   ],
   [
    1.293,
    "Effective duration and convexity handle embedded options."
   ],
   [
    5.488,
    "Callable bonds have lower duration, and negative convexity, when yields fall."
   ],
   [
    11.005,
    "Key rate durations measure the risk of curve shape changes, and sum to effective duration."
   ],
   [
    17.248,
    "Empirical duration reflects the correlation between yields and credit spreads."
   ]
  ]
 },
 "end": {
  "dur": 2.184,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module thirteen is complete."
   ]
  ]
 }
};
