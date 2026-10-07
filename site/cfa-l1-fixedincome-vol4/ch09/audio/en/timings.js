window.TIMINGS = {
 "intro": {
  "dur": 6.84,
  "marks": {
   "sub": 1.421
  },
  "cues": [
   [
    0.0,
    "Module nine."
   ],
   [
    1.421,
    "How interest rates change with maturity: spot, par, and forward curves."
   ]
  ]
 },
 "spot": {
  "dur": 40.2,
  "marks": {
   "ideal": 5.752,
   "shape": 22.661,
   "inv": 27.539,
   "prac": 32.224
  },
  "cues": [
   [
    0.0,
    "So far we discounted every cash flow at one rate."
   ],
   [
    3.538,
    "But rates differ by maturity."
   ],
   [
    5.752,
    "The ideal data are yields on default-risk-free zero-coupon bonds."
   ],
   [
    10.436,
    "They are spot rates, and together they form the spot curve."
   ],
   [
    14.687,
    "With no coupons, there is no reinvestment risk, and the bonds share the same currency, credit, and liquidity."
   ],
   [
    22.661,
    "Usually the spot curve slopes upward, and flattens for long maturities."
   ],
   [
    27.539,
    "Sometimes short rates exceed long rates."
   ],
   [
    30.306,
    "That is an inverted curve."
   ],
   [
    32.224,
    "In practice, spot curves are built from recently issued government coupon bonds, and filled in by interpolation."
   ]
  ]
 },
 "price": {
  "dur": 38.088,
  "marks": {
   "ex": 2.061,
   "each": 9.52,
   "p1": 12.691,
   "p2": 15.968,
   "p3": 18.499,
   "sum": 24.165,
   "ytm": 27.187
  },
  "cues": [
   [
    0.0,
    "Spot rates price any bond."
   ],
   [
    2.061,
    "Take a three year bond with a five percent annual coupon."
   ],
   [
    6.045,
    "The spot rates are two, three, and four percent."
   ],
   [
    9.52,
    "Discount each cash flow at its own spot rate."
   ],
   [
    12.691,
    "The first coupon is worth four point nine oh two."
   ],
   [
    15.968,
    "The second, four point seven one three."
   ],
   [
    18.499,
    "The final payment, one hundred five, is worth ninety three point three four five."
   ],
   [
    24.165,
    "The price is one hundred two point nine six."
   ],
   [
    27.187,
    "Solving for the single rate that gives the same price gives a yield to maturity of three point nine three five percent."
   ],
   [
    35.533,
    "Different discounting, same price."
   ]
  ]
 },
 "par": {
  "dur": 33.432,
  "marks": {
   "def": 3.683,
   "how": 7.429,
   "ex": 14.675,
   "note": 23.221
  },
  "cues": [
   [
    0.0,
    "A par rate is the yield that prices a bond at par."
   ],
   [
    3.683,
    "It is derived from the spot rates up to that maturity."
   ],
   [
    7.429,
    "The par rate equals one minus the final discount factor, divided by the sum of all the discount factors."
   ],
   [
    14.675,
    "With spot rates of two, three, and four percent, the par rates are two percent, two point nine nine, and three point nine five."
   ],
   [
    23.221,
    "On an upward sloping curve, par rates sit below spot rates."
   ],
   [
    27.301,
    "Published government par curves, like the Treasury yield curve, are made of par rates."
   ]
  ]
 },
 "forward": {
  "dur": 49.608,
  "marks": {
   "def": 4.344,
   "eq": 14.875,
   "ex": 22.888,
   "also": 38.389,
   "use": 43.416
  },
  "cues": [
   [
    0.0,
    "A forward rate is the rate for a period that starts in the future."
   ],
   [
    4.344,
    "It is implied by spot rates."
   ],
   [
    6.287,
    "Investing for three years must give the same result as investing for two years, and then rolling over at the forward rate."
   ],
   [
    14.875,
    "One plus the three year spot, cubed, equals one plus the two year spot, squared, times one plus the forward rate."
   ],
   [
    22.888,
    "With our spot rates, one point oh four cubed is one point one two four nine."
   ],
   [
    28.428,
    "One point oh three squared is one point oh six oh nine."
   ],
   [
    32.438,
    "So the one year forward rate, two years from now, is six point oh three percent."
   ],
   [
    38.389,
    "Likewise, the one year rate, one year from now, is four point oh one percent."
   ],
   [
    43.416,
    "A forward rate is the marginal return from extending the maturity by one more period."
   ]
  ]
 },
 "curves": {
  "dur": 24.696,
  "marks": {
   "spot": 1.912,
   "par": 4.613,
   "fwd": 6.461,
   "inv": 11.168,
   "why": 18.861
  },
  "cues": [
   [
    0.0,
    "Now compare the three curves."
   ],
   [
    1.912,
    "Here is an upward sloping spot curve."
   ],
   [
    4.613,
    "The par curve is below it."
   ],
   [
    6.461,
    "And the forward curve, the one year rate for each future year, is above it."
   ],
   [
    11.168,
    "For a downward sloping spot curve, it reverses."
   ],
   [
    14.495,
    "Par rates are above spot rates, and forward rates are below."
   ],
   [
    18.861,
    "When the spot curve rises, each extra year must pay more than the average so far."
   ]
  ]
 },
 "wrap": {
  "dur": 24.624,
  "marks": {
   "w1": 1.293,
   "w2": 7.685,
   "w3": 11.368,
   "w4": 16.224
  },
  "cues": [
   [
    0.0,
    "Let's recap."
   ],
   [
    1.293,
    "Spot rates are zero-coupon yields, and each cash flow is discounted at its own spot rate."
   ],
   [
    7.685,
    "A par rate is the yield that prices a bond at par."
   ],
   [
    11.368,
    "Forward rates are implied by spot rates, and are marginal returns."
   ],
   [
    16.224,
    "On an upward curve, forward rates exceed spot rates, which exceed par rates."
   ],
   [
    21.605,
    "On a downward curve, the order reverses."
   ]
  ]
 },
 "end": {
  "dur": 1.968,
  "marks": {},
  "cues": [
   [
    0.0,
    "Module nine is complete."
   ]
  ]
 }
};
