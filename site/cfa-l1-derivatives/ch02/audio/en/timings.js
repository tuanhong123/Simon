window.TIMINGS = {
 "intro": {
  "dur": 5.808,
  "marks": {
   "sub": 1.699
  },
  "cues": [
   [
    0.0,
    "Learning module two."
   ],
   [
    1.699,
    "The main derivative instruments, and the payoffs they create."
   ]
  ]
 },
 "firm": {
  "dur": 26.184,
  "marks": {
   "head": 0.0,
   "f1": 5.987,
   "f2": 8.475,
   "f3": 10.429,
   "f4": 13.301,
   "k1": 15.213,
   "k2": 19.259,
   "k3": 23.539
  },
  "cues": [
   [
    0.0,
    "Forwards, futures and swaps are firm commitments: both sides are obliged to perform."
   ],
   [
    5.987,
    "Each has a specific contract size,"
   ],
   [
    8.475,
    "a specific underlying,"
   ],
   [
    10.429,
    "one or more exchanges on future dates,"
   ],
   [
    13.301,
    "and a price agreed today."
   ],
   [
    15.213,
    "A forward is a single, customized O T C exchange."
   ],
   [
    19.259,
    "A future is a standardized forward, traded on an exchange."
   ],
   [
    23.539,
    "And a swap is a series of exchanges."
   ]
  ]
 },
 "fwdpay": {
  "dur": 34.248,
  "marks": {
   "axes": 0.0,
   "f0": 8.141,
   "long": 12.443,
   "short": 20.797,
   "nocash": 23.883,
   "linear": 27.48
  },
  "cues": [
   [
    0.0,
    "Here is the payoff of a forward at maturity."
   ],
   [
    3.427,
    "Across, the spot price at maturity, S sub T."
   ],
   [
    6.853,
    "Up, the payoff."
   ],
   [
    8.141,
    "The forward price, F sub zero of T, is agreed at the start."
   ],
   [
    12.443,
    "The buyer, who is long, receives S sub T minus the forward price."
   ],
   [
    17.138,
    "Above the forward price, a gain."
   ],
   [
    19.449,
    "Below it, a loss."
   ],
   [
    20.797,
    "The seller's payoff is the exact mirror image."
   ],
   [
    23.883,
    "Nothing is paid upfront, so payoff equals profit."
   ],
   [
    27.48,
    "And because the payoff is a straight line in the underlying, firm commitments are called linear derivatives."
   ]
  ]
 },
 "gold": {
  "dur": 35.184,
  "marks": {
   "head": 0.0,
   "spot": 13.069,
   "st": 17.925,
   "pay": 21.992,
   "total": 28.917
  },
  "cues": [
   [
    0.0,
    "An example."
   ],
   [
    0.774,
    "Procam Investments agrees to buy one hundred ounces of gold in three months, at a forward price of one thousand seven hundred ninety-two dollars and thirteen cents an ounce."
   ],
   [
    13.069,
    "Today's spot price, seventeen seventy, plays no role in the settlement."
   ],
   [
    17.925,
    "At maturity, gold is at seventeen eighty dollars fifty."
   ],
   [
    21.992,
    "The payoff per ounce is S sub T minus the forward price: minus eleven dollars sixty-three."
   ],
   [
    28.917,
    "Times one hundred ounces, Procam pays the dealer one thousand one hundred sixty-three dollars."
   ]
  ]
 },
 "futures": {
  "dur": 45.048,
  "marks": {
   "ex": 0.0,
   "im": 3.939,
   "mtm": 11.824,
   "gain": 19.645,
   "loss": 25.227,
   "mm": 30.957,
   "call": 34.939
  },
  "cues": [
   [
    0.0,
    "Now the same trade as a futures contract on an exchange."
   ],
   [
    3.939,
    "No price is paid upfront, but each side deposits initial margin: four thousand nine hundred fifty dollars."
   ],
   [
    11.824,
    "Every day the clearinghouse marks the contract to market."
   ],
   [
    15.965,
    "On day one, the futures price rises five dollars."
   ],
   [
    19.645,
    "Procam, the buyer, gains five hundred dollars, credited to its margin account."
   ],
   [
    25.227,
    "The seller loses five hundred."
   ],
   [
    27.23,
    "Its balance falls to four thousand four hundred fifty,"
   ],
   [
    30.957,
    "below the maintenance margin of four thousand five hundred."
   ],
   [
    34.939,
    "That triggers a margin call: the seller must top up five hundred dollars, back to the initial margin."
   ],
   [
    42.095,
    "This top up is called variation margin."
   ]
  ]
 },
 "margin": {
  "dur": 39.96,
  "marks": {
   "head": 0.0,
   "d1": 3.256,
   "d2": 6.939,
   "c1": 12.584,
   "d3": 16.565,
   "c2": 18.179,
   "d5": 20.88,
   "sum": 22.685,
   "timing": 37.12
  },
  "cues": [
   [
    0.0,
    "Follow Procam's margin account to maturity."
   ],
   [
    3.256,
    "Day one, a gain: five thousand four hundred fifty."
   ],
   [
    6.939,
    "Day two, the price drops ten dollars eighty-eight."
   ],
   [
    10.151,
    "The balance falls below maintenance,"
   ],
   [
    12.584,
    "so Procam pays a margin call of five hundred eighty-eight."
   ],
   [
    16.565,
    "Two more down days,"
   ],
   [
    18.179,
    "and a second call, eight hundred eighty."
   ],
   [
    20.88,
    "Then two small gains."
   ],
   [
    22.685,
    "In total, Procam paid one thousand four hundred sixty-eight in margin calls, and gets back three hundred five more than it deposited."
   ],
   [
    31.582,
    "The net loss is one thousand one hundred sixty-three, exactly the forward's loss."
   ],
   [
    37.12,
    "Only the timing of the cash flows differs."
   ]
  ]
 },
 "rules": {
  "dur": 26.544,
  "marks": {
   "head": 0.0,
   "r1": 2.125,
   "r2": 6.917,
   "r3": 14.824,
   "r4": 19.189
  },
  "cues": [
   [
    0.0,
    "A few more futures rules."
   ],
   [
    2.125,
    "Exchanges can raise margins, or call for margin during the day."
   ],
   [
    6.917,
    "Price limits stop trading outside a band around the previous settlement price."
   ],
   [
    11.855,
    "A circuit breaker pauses trading for a while."
   ],
   [
    14.824,
    "To exit early, a trader simply enters the offsetting contract."
   ],
   [
    19.189,
    "And at expiration, physical delivery or cash settlement makes the futures price converge to the spot price."
   ]
  ]
 },
 "swaps": {
  "dur": 20.688,
  "marks": {
   "pair": 0.0,
   "periods": 9.613,
   "float": 12.613,
   "series": 15.507
  },
  "cues": [
   [
    0.0,
    "A swap is a series of exchanges."
   ],
   [
    2.186,
    "The fixed rate payer pays a fixed rate, the swap rate."
   ],
   [
    5.874,
    "The floating rate payer pays a market reference rate."
   ],
   [
    9.613,
    "Each period, the fixed payment stays the same,"
   ],
   [
    12.613,
    "while the floating payment resets with the market."
   ],
   [
    15.507,
    "So a swap is like a series of forward contracts, one for each payment date."
   ]
  ]
 },
 "fyleton": {
  "dur": 48.672,
  "marks": {
   "head": 0.0,
   "fix": 12.813,
   "flt": 23.237,
   "net": 30.653,
   "notional": 35.573,
   "zero": 40.429
  },
  "cues": [
   [
    0.0,
    "Fyleton Investments enters a five-year swap on two hundred million pounds."
   ],
   [
    5.658,
    "It receives a fixed two point two five percent, paid semiannually, and pays six-month M R R."
   ],
   [
    12.813,
    "The fixed leg for one half-year: two hundred million times two point two five percent, divided by two."
   ],
   [
    20.541,
    "Two point two five million pounds."
   ],
   [
    23.237,
    "M R R is set at one point nine five percent, so the floating leg is one point nine five million."
   ],
   [
    30.653,
    "The payments are netted: the dealer pays Fyleton three hundred thousand pounds."
   ],
   [
    35.573,
    "The notional itself is never exchanged."
   ],
   [
    38.372,
    "It only sizes the payments."
   ],
   [
    40.429,
    "At inception the swap is worth zero to both sides."
   ],
   [
    44.233,
    "As rates move, one side gains value and the other loses."
   ]
  ]
 },
 "options": {
  "dur": 43.776,
  "marks": {
   "right": 0.0,
   "prem": 9.976,
   "up": 19.355,
   "down": 25.853,
   "styles": 31.861,
   "cp": 39.917
  },
  "cues": [
   [
    0.0,
    "Options are contingent claims."
   ],
   [
    2.174,
    "The buyer has the right, but not the obligation, to transact."
   ],
   [
    6.595,
    "The seller must perform if the buyer chooses."
   ],
   [
    9.976,
    "For that right, the buyer pays a premium upfront."
   ],
   [
    13.337,
    "Say five dollars, for a call: the right to buy a stock at an exercise price of thirty."
   ],
   [
    19.355,
    "If the stock ends at forty, the buyer exercises: a payoff of ten, a profit of five."
   ],
   [
    25.853,
    "If it ends at twenty-five, the buyer walks away and loses only the five dollar premium."
   ],
   [
    31.861,
    "A European option can be exercised only at maturity."
   ],
   [
    35.988,
    "An American option can be exercised at any time."
   ],
   [
    39.917,
    "A call is the right to buy; a put is the right to sell."
   ]
  ]
 },
 "longcall": {
  "dur": 46.584,
  "marks": {
   "axes": 0.0,
   "payoff": 1.955,
   "profit": 11.675,
   "be": 16.872,
   "hi": 20.917,
   "pts": 27.544,
   "nonlin": 41.083
  },
  "cues": [
   [
    0.0,
    "The long call at maturity."
   ],
   [
    1.955,
    "The payoff is the maximum of zero and S sub T minus X."
   ],
   [
    6.385,
    "Flat at zero below the exercise price, then rising one for one."
   ],
   [
    11.675,
    "Subtract the premium to get profit."
   ],
   [
    13.953,
    "The most the buyer can lose is the premium."
   ],
   [
    16.872,
    "Profit is zero at the breakeven point, X plus the premium."
   ],
   [
    20.917,
    "Hightest's index call has an exercise price of twelve forty, and cost twenty-four eighty-five."
   ],
   [
    27.544,
    "At twelve eighty, the payoff is forty and the profit fifteen fifteen."
   ],
   [
    32.443,
    "At twelve sixty, a payoff of twenty, but a loss of four eighty-five."
   ],
   [
    37.271,
    "At or below twelve forty, the whole premium is lost."
   ],
   [
    41.083,
    "This bent, asymmetric shape is why options are called non-linear derivatives."
   ]
  ]
 },
 "money": {
  "dur": 32.976,
  "marks": {
   "line": 0.0,
   "itm": 4.429,
   "atm": 13.253,
   "otm": 15.592,
   "tv": 21.131
  },
  "cues": [
   [
    0.0,
    "Before maturity, compare the spot price with the exercise price."
   ],
   [
    4.429,
    "A call is in the money when the spot price is above X."
   ],
   [
    8.822,
    "Its exercise value, or intrinsic value, is S minus X."
   ],
   [
    13.253,
    "At the money means S equals X,"
   ],
   [
    15.592,
    "and out of the money means S is below X."
   ],
   [
    18.645,
    "Both have zero intrinsic value."
   ],
   [
    21.131,
    "Yet the option still has a price."
   ],
   [
    23.568,
    "That extra is time value: the chance that the price moves favorably before maturity."
   ],
   [
    29.772,
    "Time value shrinks to zero at expiration."
   ]
  ]
 },
 "shortcall": {
  "dur": 19.464,
  "marks": {
   "mirror": 0.0,
   "max": 2.957,
   "unl": 5.509,
   "credit": 9.341
  },
  "cues": [
   [
    0.0,
    "The call seller's profit is the mirror image."
   ],
   [
    2.957,
    "The most the seller can earn is the premium,"
   ],
   [
    5.509,
    "and the loss is unlimited as the underlying rises."
   ],
   [
    9.341,
    "Credit risk runs one way."
   ],
   [
    11.044,
    "Once the premium is paid, the seller has no exposure to the buyer."
   ],
   [
    15.538,
    "But the buyer depends on the seller to pay at maturity."
   ]
  ]
 },
 "puts": {
  "dur": 30.576,
  "marks": {
   "axes": 0.0,
   "payoff": 2.232,
   "profit": 8.88,
   "short": 13.928,
   "maxloss": 18.421
  },
  "cues": [
   [
    0.0,
    "A put is the right to sell at X."
   ],
   [
    2.232,
    "Its payoff is the maximum of zero and X minus S sub T: it pays when the price falls."
   ],
   [
    8.88,
    "Subtract the premium for profit, with breakeven at X minus the premium."
   ],
   [
    13.928,
    "The put seller's profit mirrors it."
   ],
   [
    16.213,
    "The maximum gain is the premium."
   ],
   [
    18.421,
    "The loss is large, but limited, because a price cannot fall below zero."
   ],
   [
    23.51,
    "With an exercise price of thirty and a premium of five, the seller can lose at most twenty-five."
   ]
  ]
 },
 "cds": {
  "dur": 41.88,
  "marks": {
   "pair": 0.0,
   "spread": 8.525,
   "event": 12.592,
   "ins": 21.053,
   "mig": 29.024
  },
  "cues": [
   [
    0.0,
    "Credit derivatives transfer the risk that a borrower defaults."
   ],
   [
    4.04,
    "In a credit default swap, the protection buyer pays a fixed spread,"
   ],
   [
    8.525,
    "say one hundred basis points a year, to the protection seller."
   ],
   [
    12.592,
    "If a credit event occurs, such as bankruptcy or failure to pay, the seller pays the loss given default times the notional."
   ],
   [
    21.053,
    "It works much like insurance."
   ],
   [
    23.104,
    "The buyer is short credit risk; the seller is long credit risk, like a bondholder."
   ],
   [
    29.024,
    "If the issuer's credit spread widens to two hundred fifty basis points, the buyer is still paying only one hundred."
   ],
   [
    36.694,
    "The contract has gained value for the buyer, and lost value for the seller."
   ]
  ]
 },
 "compare": {
  "dur": 33.264,
  "marks": {
   "axes": 0.0,
   "fwd": 4.877,
   "call": 6.683,
   "up": 11.283,
   "down": 16.779,
   "cross": 21.549,
   "put": 26.896
  },
  "cues": [
   [
    0.0,
    "Forward commitments and contingent claims can create similar exposures."
   ],
   [
    4.877,
    "Here is a long forward,"
   ],
   [
    6.683,
    "and a long call with an exercise price equal to the forward price."
   ],
   [
    11.283,
    "When the price rises, the forward earns more, because the call buyer paid a premium."
   ],
   [
    16.779,
    "When it falls far enough, the call is better: its loss stops at the premium."
   ],
   [
    21.549,
    "They cross where S sub T minus the forward price equals minus the premium."
   ],
   [
    26.896,
    "A short put also gains when prices rise, but its upside is capped at the premium received."
   ]
  ]
 },
 "wrap": {
  "dur": 18.0,
  "marks": {
   "w1": 0.0,
   "w2": 4.493,
   "w3": 8.517,
   "w4": 13.48
  },
  "cues": [
   [
    0.0,
    "Forwards, futures and swaps are firm commitments with linear payoffs."
   ],
   [
    4.493,
    "Futures are marked to market daily through margin accounts."
   ],
   [
    8.517,
    "Options give the buyer a right for a premium: the payoffs are non-linear."
   ],
   [
    13.48,
    "Credit default swaps transfer default risk, much like insurance."
   ]
  ]
 },
 "finish": {
  "dur": 2.472,
  "marks": {},
  "cues": [
   [
    0.0,
    "That's the end of learning module two."
   ]
  ]
 }
};
