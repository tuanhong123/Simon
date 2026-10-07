window.TIMINGS = {
 "intro": {
  "dur": 8.952,
  "marks": {
   "sub": 1.357
  },
  "cues": [
   [
    0.0,
    "Chapter five."
   ],
   [
    1.357,
    "We rarely see a whole population."
   ],
   [
    3.691,
    "Sampling and estimation tell us how far we can trust what a sample says."
   ]
  ]
 },
 "sampling": {
  "dur": 26.832,
  "marks": {
   "a": 0.0,
   "pop": 6.328,
   "s1": 11.397,
   "s2": 14.739,
   "s3": 17.333,
   "dist": 18.477
  },
  "cues": [
   [
    0.0,
    "A population is everything we want to know about."
   ],
   [
    3.38,
    "A sample is the part we actually observe."
   ],
   [
    6.328,
    "Here is a population of one hundred values, with a true mean we call mu."
   ],
   [
    11.397,
    "Draw a random sample, and its mean estimates mu."
   ],
   [
    14.739,
    "Draw another, and we get a different answer."
   ],
   [
    17.333,
    "And another."
   ],
   [
    18.477,
    "Sample means vary from sample to sample, and that variation has a distribution of its own: the sampling distribution."
   ]
  ]
 },
 "clt": {
  "dur": 33.432,
  "marks": {
   "a": 0.0,
   "pop": 15.864,
   "n4": 19.461,
   "n25": 22.973,
   "n100": 24.715,
   "note": 26.733
  },
  "cues": [
   [
    0.0,
    "The central limit theorem says that for large samples, the sample mean is approximately normal, whatever the shape of the population."
   ],
   [
    9.144,
    "It centers on the population mean, with a standard deviation of sigma over the square root of n."
   ],
   [
    15.864,
    "Here the population has a standard deviation of ten."
   ],
   [
    19.461,
    "With four observations, the standard error is five."
   ],
   [
    22.973,
    "With twenty-five, two."
   ],
   [
    24.715,
    "With one hundred, just one."
   ],
   [
    26.733,
    "Bigger samples give tighter estimates, but slowly: to halve the error, we need four times the data."
   ]
  ]
 },
 "se": {
  "dur": 40.392,
  "marks": {
   "a": 0.0,
   "ex": 11.704,
   "ci": 17.605,
   "z": 25.0
  },
  "cues": [
   [
    0.0,
    "In practice we do not know sigma, so we use the sample standard deviation, s."
   ],
   [
    5.868,
    "The standard error of the sample mean is s divided by the square root of n."
   ],
   [
    11.704,
    "With s equal to twelve and thirty-six observations, that is twelve over six: two."
   ],
   [
    17.605,
    "A confidence interval is the estimate, plus or minus a reliability factor, times the standard error."
   ],
   [
    25.0,
    "For ninety-five percent confidence, the factor is one point nine six."
   ],
   [
    29.904,
    "With a sample mean of eight percent, the interval is eight plus or minus three point nine two: from four point oh eight to eleven point nine two."
   ]
  ]
 },
 "q1": {
  "dur": 2.472,
  "marks": {},
  "cues": [
   [
    0.0,
    "Quick check."
   ],
   [
    0.768,
    "Find the standard error."
   ]
  ]
 },
 "ci": {
  "dur": 33.168,
  "marks": {
   "a": 0.0,
   "draw": 3.299,
   "hit": 9.221,
   "miss": 12.797,
   "rule": 13.984
  },
  "cues": [
   [
    0.0,
    "What does ninety-five percent confidence really mean?"
   ],
   [
    3.299,
    "Imagine drawing twenty different samples from the same population, each with its own interval."
   ],
   [
    9.221,
    "Nineteen of the twenty intervals capture the true mean."
   ],
   [
    12.797,
    "One misses."
   ],
   [
    13.984,
    "In the long run, ninety-five percent of such intervals contain the true mean."
   ],
   [
    19.445,
    "A given interval either does or does not, but the procedure is right ninety-five percent of the time."
   ],
   [
    26.609,
    "With a small sample and unknown variance, we use a t factor instead of one point nine six."
   ]
  ]
 },
 "samplesize": {
  "dur": 32.664,
  "marks": {
   "a": 0.0,
   "solve": 7.8,
   "ex": 12.997,
   "up": 25.277,
   "note": 29.451
  },
  "cues": [
   [
    0.0,
    "How big should a sample be?"
   ],
   [
    1.938,
    "The margin of error is the reliability factor times s over the square root of n."
   ],
   [
    7.8,
    "Solve for n: n equals the factor times s, over the margin, squared."
   ],
   [
    12.997,
    "For ninety-five percent confidence, s of twelve, and a margin of two: one point nine six times twelve over two, squared, is about one hundred thirty-eight point three."
   ],
   [
    25.277,
    "We always round up: one hundred thirty-nine observations."
   ],
   [
    29.451,
    "Halving the margin needs four times the sample."
   ]
  ]
 },
 "q2": {
  "dur": 2.448,
  "marks": {},
  "cues": [
   [
    0.0,
    "Quick check."
   ],
   [
    0.822,
    "Find the sample size."
   ]
  ]
 },
 "biases": {
  "dur": 33.048,
  "marks": {
   "a": 0.0,
   "ds": 5.325,
   "ss": 10.587,
   "la": 20.285,
   "tp": 25.952
  },
  "cues": [
   [
    0.0,
    "Even a perfect formula cannot fix a bad sample."
   ],
   [
    3.598,
    "Four biases to watch."
   ],
   [
    5.325,
    "Data snooping: testing many ideas on the same data until one looks good."
   ],
   [
    10.587,
    "Sample selection bias: the sample leaves out part of the population, as when funds that closed are missing."
   ],
   [
    18.293,
    "That is survivorship bias."
   ],
   [
    20.285,
    "Look-ahead bias: using information that was not available on the date of the decision."
   ],
   [
    25.952,
    "Time-period bias: the sample period is too short, or too unusual, to represent the long run."
   ]
  ]
 },
 "wrap": {
  "dur": 27.504,
  "marks": {
   "w1": 1.144,
   "w2": 6.0,
   "w3": 12.648,
   "w4": 20.149,
   "end": 25.24
  },
  "cues": [
   [
    0.0,
    "To sum up."
   ],
   [
    1.144,
    "Sample means vary, and their distribution is the sampling distribution."
   ],
   [
    6.0,
    "By the central limit theorem, it is approximately normal with a standard error of s over root n."
   ],
   [
    12.648,
    "A confidence interval is the estimate plus or minus a reliability factor times the standard error."
   ],
   [
    20.149,
    "Watch for data snooping, selection, look-ahead and time-period biases."
   ],
   [
    25.24,
    "Now try the chapter practice."
   ]
  ]
 },
 "final1": {
  "dur": 2.472,
  "marks": {},
  "cues": [
   [
    0.0,
    "Chapter practice."
   ],
   [
    1.187,
    "Three questions."
   ]
  ]
 },
 "finish": {
  "dur": 2.952,
  "marks": {},
  "cues": [
   [
    0.0,
    "Well done."
   ],
   [
    0.66,
    "That is the end of chapter five."
   ]
  ]
 }
};
