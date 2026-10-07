window.TIMINGS = {
 "intro": {
  "dur": 6.24,
  "marks": {
   "sub": 1.805
  },
  "cues": [
   [
    0.0,
    "Learning module seven."
   ],
   [
    1.805,
    "How a swap is priced, and how its value changes over time."
   ]
  ]
 },
 "fra": {
  "dur": 35.28,
  "marks": {
   "pair": 0.0,
   "gain": 12.984,
   "diff": 18.779,
   "same": 28.563
  },
  "cues": [
   [
    0.0,
    "A single period of an interest rate swap looks just like an F R A."
   ],
   [
    4.665,
    "The fixed rate payer pays a fixed rate, and receives the market reference rate, on a notional amount for one period."
   ],
   [
    12.984,
    "If the reference rate sets above the fixed rate, the fixed rate payer receives the net difference."
   ],
   [
    18.779,
    "One difference: an F R A settles once, at the start of its period, on a present value basis."
   ],
   [
    25.464,
    "A swap settles at the end of each period."
   ],
   [
    28.563,
    "Otherwise they share a lot: a symmetric payoff, no cash upfront, and counterparty credit risk."
   ]
  ]
 },
 "series": {
  "dur": 35.88,
  "marks": {
   "head": 0.0,
   "fras": 3.107,
   "swap": 20.528,
   "vals": 28.029
  },
  "cues": [
   [
    0.0,
    "So why not just use a series of F R As?"
   ],
   [
    3.107,
    "Recall the forward rates from our three government bonds: two point three nine six percent for year one, four point four five for year two, and five point one seven for year three."
   ],
   [
    15.564,
    "A series of F R As would lock in a different fixed rate for each year."
   ],
   [
    20.528,
    "A swap instead uses one constant rate for every period: here, three point nine six four one percent."
   ],
   [
    28.029,
    "Some periods have a positive present value, and others negative, but together the swap is worth zero at the start."
   ]
  ]
 },
 "par": {
  "dur": 42.96,
  "marks": {
   "eq": 0.0,
   "float": 8.845,
   "fixed": 15.515,
   "ans": 22.739,
   "irr": 27.339,
   "net": 31.491
  },
  "cues": [
   [
    0.0,
    "The swap rate is the fixed rate that makes the present value of the fixed payments equal the present value of the expected floating payments."
   ],
   [
    8.845,
    "Discount each forward rate with its discount factor and add them: point one one one oh one seven."
   ],
   [
    15.515,
    "The fixed side is the swap rate times the sum of the discount factors, two point eight oh oh five four five."
   ],
   [
    22.739,
    "So the three-year swap rate is three point nine six four one percent."
   ],
   [
    27.339,
    "Think of it as an internal rate of return on the forward rates."
   ],
   [
    31.491,
    "In year one, a fixed rate receiver gets three point nine six four one percent and pays two point three nine six: a net one point five six eight one percent."
   ]
  ]
 },
 "esterr": {
  "dur": 47.328,
  "marks": {
   "setup": 0.0,
   "s1": 14.499,
   "s2": 29.083,
   "q": 41.0
  },
  "cues": [
   [
    0.0,
    "Esterr uses its swap to fix the cost of a floating-rate loan."
   ],
   [
    4.955,
    "It pays the lender M R R plus one point five percent, pays the dealer a fixed two point oh five, and receives M R R."
   ],
   [
    14.499,
    "If M R R sets at three point seven five percent, Esterr receives a net one point seven oh from the swap, and pays five point two five on the loan."
   ],
   [
    25.852,
    "Its cost: three point five five percent."
   ],
   [
    29.083,
    "If M R R is one point two five, it pays a net point eight oh on the swap, and two point seven five on the loan."
   ],
   [
    37.931,
    "Again, three point five five percent."
   ],
   [
    41.0,
    "Every quarter costs about two point two two million Canadian dollars, whatever the rate does."
   ]
  ]
 },
 "bond": {
  "dur": 26.64,
  "marks": {
   "head": 0.0,
   "recv": 2.531,
   "pay": 10.992,
   "why": 18.365
  },
  "cues": [
   [
    0.0,
    "A swap behaves like a pair of bonds."
   ],
   [
    2.531,
    "Receiving fixed is like owning a fixed-rate bond, financed by issuing a floating-rate note."
   ],
   [
    9.074,
    "It gains when rates fall."
   ],
   [
    10.992,
    "Paying fixed is like issuing a fixed-rate bond and holding a floating-rate note."
   ],
   [
    16.518,
    "It gains when rates rise."
   ],
   [
    18.365,
    "That is why portfolio managers often receive fixed on a swap, instead of buying bonds, when they expect rates to fall."
   ]
  ]
 },
 "settle": {
  "dur": 41.592,
  "marks": {
   "eq": 0.0,
   "curve": 8.973,
   "p1": 19.568,
   "p2": 29.288,
   "later": 36.043
  },
  "cues": [
   [
    0.0,
    "Each period, the fixed rate payer's settlement value is the reference rate minus the swap rate, times the notional, times the period."
   ],
   [
    8.973,
    "Esterr's forward curve starts at half a percent and rises to three point seven eight percent over fourteen quarters."
   ],
   [
    17.02,
    "Its swap rate is two point oh five."
   ],
   [
    19.568,
    "In period one, M R R is point five oh."
   ],
   [
    22.583,
    "Esterr pays nine hundred sixty-eight thousand seven hundred fifty Canadian dollars."
   ],
   [
    29.288,
    "In period two, at point seven four, it pays eight hundred eighteen thousand seven hundred fifty."
   ],
   [
    36.043,
    "Esterr expects to pay until period seven, and to receive from period eight on."
   ]
  ]
 },
 "time": {
  "dur": 29.688,
  "marks": {
   "head": 0.0,
   "pv": 5.496,
   "gain": 14.192
  },
  "cues": [
   [
    0.0,
    "What is the swap worth after those first two payments, if forward rates do not change?"
   ],
   [
    5.496,
    "Esterr has already made its net payments."
   ],
   [
    8.355,
    "What remains are mostly periods where the forward rate is above two point oh five."
   ],
   [
    14.192,
    "So the present value of the floating payments it will receive is now larger than the present value of the fixed payments."
   ],
   [
    22.181,
    "The swap has gained value for Esterr, simply with the passage of time, because the forward curve slopes upward."
   ]
  ]
 },
 "shift": {
  "dur": 27.72,
  "marks": {
   "head": 0.0,
   "up": 4.621,
   "gain": 10.907,
   "newrate": 18.109,
   "loss": 23.541
  },
  "cues": [
   [
    0.0,
    "Now suppose instead that forward rates rise right after the trade."
   ],
   [
    4.621,
    "Every expected floating payment grows, but Esterr's fixed rate stays at two point oh five."
   ],
   [
    10.907,
    "The present value of floating payments now exceeds the fixed: an M T M gain for the fixed rate payer."
   ],
   [
    18.109,
    "A new swap today would need a higher fixed rate."
   ],
   [
    21.337,
    "Esterr locked in the lower one."
   ],
   [
    23.541,
    "If forward rates fall instead, the fixed rate payer loses."
   ]
  ]
 },
 "fyleton": {
  "dur": 41.28,
  "marks": {
   "head": 0.0,
   "first": 7.821,
   "time": 22.299,
   "fall": 34.835
  },
  "cues": [
   [
    0.0,
    "Fyleton receives a fixed two point three eight percent on two hundred million pounds, against six-month M R R."
   ],
   [
    7.821,
    "The first M R R sets at point seven one percent."
   ],
   [
    11.487,
    "Fyleton receives two point three eight minus point seven one, times two hundred million, times one half: one point six seven million pounds."
   ],
   [
    22.299,
    "With an upward-sloping curve, the passage of time works against the fixed receiver: after that settlement, the remaining floating payments are worth more than the fixed."
   ],
   [
    33.765,
    "An M T M loss."
   ],
   [
    34.835,
    "But if forward rates fall, the fixed receiver gains, just like the owner of a fixed-rate bond."
   ]
  ]
 },
 "wrap": {
  "dur": 24.504,
  "marks": {
   "w1": 0.0,
   "w2": 5.027,
   "w3": 12.272,
   "w4": 18.195
  },
  "cues": [
   [
    0.0,
    "A swap is a series of forward exchanges at one constant fixed rate."
   ],
   [
    5.027,
    "The swap rate equates the present values of fixed and expected floating payments; its value starts at zero."
   ],
   [
    12.272,
    "Each period settles the reference rate minus the swap rate, times notional and period."
   ],
   [
    18.195,
    "Rising rates help the fixed payer; falling rates help the fixed receiver, like a bondholder."
   ]
  ]
 },
 "finish": {
  "dur": 2.664,
  "marks": {},
  "cues": [
   [
    0.0,
    "That's the end of learning module seven."
   ]
  ]
 }
};
