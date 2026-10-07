window.TIMINGS = {
 "intro": {
  "dur": 9.12,
  "marks": {
   "sub": 1.379
  },
  "cues": [
   [
    0.0,
    "Chapter twelve."
   ],
   [
    1.379,
    "Everything so far leads here: putting a value on a share."
   ],
   [
    5.451,
    "This chapter introduces the main valuation tools."
   ]
  ]
 },
 "mispriced": {
  "dur": 32.328,
  "marks": {
   "val": 5.261,
   "under": 8.581,
   "fair": 12.072,
   "over": 14.005,
   "conf": 16.067
  },
  "cues": [
   [
    0.0,
    "Valuation compares an estimate of intrinsic value with the market price."
   ],
   [
    5.261,
    "Say the analyst estimates the value at ten dollars."
   ],
   [
    8.581,
    "If the shares trade at five, they look undervalued."
   ],
   [
    12.072,
    "At ten, fairly valued."
   ],
   [
    14.005,
    "At twenty, overvalued."
   ],
   [
    16.067,
    "In practice, confidence matters."
   ],
   [
    18.461,
    "If the model or the inputs are uncertain, the analyst should demand a wide gap between value and price before acting."
   ],
   [
    27.214,
    "A ten dollar estimate against a ten oh five price is not a signal."
   ]
  ]
 },
 "models": {
  "dur": 41.328,
  "marks": {
   "pv": 3.256,
   "mult": 14.939,
   "asset": 28.157,
   "note": 36.981
  },
  "cues": [
   [
    0.0,
    "Valuation models fall into three families."
   ],
   [
    3.256,
    "Present value models: discount expected future payoffs, such as dividends or free cash flow to equity."
   ],
   [
    10.492,
    "They are rooted in fundamentals, but sensitive to the inputs."
   ],
   [
    14.939,
    "Multiplier models: compare a price or enterprise value with a fundamental like earnings or sales, against peers."
   ],
   [
    23.227,
    "Simple and quick, but they inherit mispricing of the comparables."
   ],
   [
    28.157,
    "Asset-based models: value the assets, then subtract the liabilities."
   ],
   [
    33.304,
    "Useful when assets are tangible and measurable."
   ],
   [
    36.981,
    "Each has strengths and weaknesses."
   ],
   [
    39.3,
    "Analysts often use several."
   ]
  ]
 },
 "dividends": {
  "dur": 44.16,
  "marks": {
   "types": 3.363,
   "chron": 24.048,
   "ex": 30.291,
   "rec": 37.835,
   "pay": 41.389
  },
  "cues": [
   [
    0.0,
    "Dividends are the cash flows behind many models."
   ],
   [
    3.363,
    "A regular dividend is paid on a schedule."
   ],
   [
    6.311,
    "An extra dividend is a one-off."
   ],
   [
    8.54,
    "A stock dividend pays in new shares."
   ],
   [
    11.129,
    "A stock split divides each share into more, and a reverse split combines them."
   ],
   [
    16.737,
    "Neither changes the company's value."
   ],
   [
    19.326,
    "A repurchase buys shares back, returning cash to those who sell."
   ],
   [
    24.048,
    "The payment follows a chronology."
   ],
   [
    26.268,
    "On the declaration date, the board announces the dividend."
   ],
   [
    30.291,
    "On the ex-dividend date, new buyers no longer receive it, and the price typically drops by about the dividend."
   ],
   [
    37.835,
    "The holder of record date identifies who is paid."
   ],
   [
    41.389,
    "And the payment date is when cash is sent."
   ]
  ]
 },
 "pv": {
  "dur": 31.92,
  "marks": {
   "eq": 3.277,
   "pref": 13.509,
   "note": 25.939
  },
  "cues": [
   [
    0.0,
    "The logic of present value models is simple."
   ],
   [
    3.277,
    "A share is a claim on future cash flows."
   ],
   [
    6.342,
    "Its value is the present value of all expected dividends, discounted at the required return."
   ],
   [
    13.509,
    "Preferred stock is the easy case."
   ],
   [
    15.942,
    "It pays a fixed dividend forever."
   ],
   [
    18.374,
    "Five dollars a year, discounted at eight percent, is worth five over point oh eight: sixty two fifty."
   ],
   [
    25.939,
    "For common stock, dividends are uncertain and may grow, so we need a growth assumption."
   ]
  ]
 },
 "gordon": {
  "dur": 60.816,
  "marks": {
   "base": 11.853,
   "sens": 25.52,
   "g": 37.949,
   "impl": 48.096
  },
  "cues": [
   [
    0.0,
    "The Gordon growth model assumes dividends grow at a constant rate forever."
   ],
   [
    5.36,
    "Value equals next year's dividend, divided by the required return minus the growth rate."
   ],
   [
    11.853,
    "This year's dividend is two dollars."
   ],
   [
    14.475,
    "Growth is four percent, so next year's is two oh eight."
   ],
   [
    18.481,
    "With a nine percent required return, value is two oh eight over point oh five: forty one sixty."
   ],
   [
    25.52,
    "It is very sensitive."
   ],
   [
    27.126,
    "At an eight percent required return, the value is fifty two."
   ],
   [
    31.713,
    "At ten percent, thirty four sixty seven."
   ],
   [
    34.771,
    "At five percent growth, fifty two fifty."
   ],
   [
    37.949,
    "Growth comes from reinvestment: retention rate times return on equity."
   ],
   [
    42.999,
    "Retaining forty percent, at a ten percent return, gives four percent."
   ],
   [
    48.096,
    "The model can also be turned around."
   ],
   [
    50.737,
    "If the price is forty one sixty, the required return implied is the dividend yield of five percent, plus growth of four, which is nine."
   ]
  ]
 },
 "twostage": {
  "dur": 42.288,
  "marks": {
   "hi": 8.312,
   "pvs": 14.939,
   "tv": 19.496,
   "sum": 33.845,
   "note": 36.547
  },
  "cues": [
   [
    0.0,
    "Gordon growth suits stable companies."
   ],
   [
    2.731,
    "For a company that grows fast now and slows later, use a multistage model."
   ],
   [
    8.312,
    "Say dividends grow ten percent for three years: two twenty, two forty two, and two sixty six."
   ],
   [
    14.939,
    "Discounted at nine percent, these are worth about two dollars each."
   ],
   [
    19.496,
    "After year three, growth settles at four percent."
   ],
   [
    22.914,
    "The terminal value at year three is the next dividend, two sixty eight, over point oh five: fifty five thirty seven."
   ],
   [
    31.005,
    "Discounted back, forty two seventy six."
   ],
   [
    33.845,
    "Total value: forty eight eighty seven."
   ],
   [
    36.547,
    "Most of the value sits in the terminal value, so the long-run assumptions matter most."
   ]
  ]
 },
 "multiples": {
  "dur": 47.544,
  "marks": {
   "pe": 2.381,
   "comp": 7.643,
   "just": 17.597,
   "more": 36.192
  },
  "cues": [
   [
    0.0,
    "Multiples are the quick alternative."
   ],
   [
    2.381,
    "Price to earnings: a price of sixty, on earnings of four, is fifteen times."
   ],
   [
    7.643,
    "Compare with comparable companies."
   ],
   [
    9.997,
    "If peers trade at eighteen times, the implied value is seventy two, which suggests the share is undervalued."
   ],
   [
    17.597,
    "Fundamentals explain multiples."
   ],
   [
    20.014,
    "The justified forward price to earnings ratio is the payout ratio, divided by required return minus growth."
   ],
   [
    28.355,
    "With a sixty percent payout, nine percent required return, and four percent growth, that is twelve."
   ],
   [
    36.192,
    "Higher growth, or a lower required return, justifies a higher multiple."
   ],
   [
    41.448,
    "Other price multiples are price to book, price to sales, and price to cash flow."
   ]
  ]
 },
 "ev": {
  "dur": 40.392,
  "marks": {
   "ev": 3.619,
   "mult": 14.491,
   "peer": 20.072,
   "eq": 26.144
  },
  "cues": [
   [
    0.0,
    "Enterprise value multiples look at the whole firm."
   ],
   [
    3.619,
    "Enterprise value is market capitalization, plus debt and preferred stock, minus cash."
   ],
   [
    9.631,
    "Eight hundred, plus three hundred, minus one hundred: one thousand."
   ],
   [
    14.491,
    "With EBITDA of one twenty five, enterprise value to EBITDA is eight times."
   ],
   [
    20.072,
    "If comparable companies trade at ten times, the implied enterprise value is twelve fifty."
   ],
   [
    26.144,
    "Subtract debt, and add back cash, and equity is worth ten fifty."
   ],
   [
    30.742,
    "That is above the market capitalization of eight hundred, which suggests undervaluation."
   ],
   [
    37.063,
    "It is useful when capital structures differ."
   ]
  ]
 },
 "asset": {
  "dur": 29.904,
  "marks": {
   "assets": 3.341,
   "liab": 9.221,
   "eqv": 11.475,
   "note": 16.352
  },
  "cues": [
   [
    0.0,
    "Asset-based valuation starts from the balance sheet."
   ],
   [
    3.341,
    "Take assets with a book value of one thousand, but a fair market value of thirteen hundred."
   ],
   [
    9.221,
    "Liabilities are six hundred."
   ],
   [
    11.475,
    "Equity is worth seven hundred, or seven dollars on one hundred shares."
   ],
   [
    16.352,
    "This works best for companies with tangible, measurable assets, or in liquidation."
   ],
   [
    22.006,
    "It works poorly when value comes from intangibles and future earnings, which are hard to put on a balance sheet."
   ]
  ]
 },
 "wrap": {
  "dur": 31.392,
  "marks": {
   "w1": 1.592,
   "w2": 7.707,
   "w3": 18.152,
   "w4": 25.312
  },
  "cues": [
   [
    0.0,
    "Four things to keep."
   ],
   [
    1.592,
    "Compare intrinsic value with price, and require a wider gap when confidence is lower."
   ],
   [
    7.707,
    "Present value models discount dividends or cash flows."
   ],
   [
    11.931,
    "Gordon growth is value equals next dividend over required return minus growth."
   ],
   [
    18.152,
    "Multiples, including enterprise value multiples, compare firms quickly, but depend on the comparables."
   ],
   [
    25.312,
    "Asset-based models value assets minus liabilities, and fit asset-heavy companies."
   ]
  ]
 },
 "finish": {
  "dur": 2.64,
  "marks": {},
  "cues": [
   [
    0.0,
    "That completes chapter twelve, and the book."
   ]
  ]
 }
};
