window.TIMINGS = {
 "intro": {
  "dur": 10.872,
  "marks": {
   "sub": 1.315
  },
  "cues": [
   [
    0.0,
    "Chapter four."
   ],
   [
    1.315,
    "A probability distribution describes every possible outcome and how likely each one is."
   ],
   [
    7.501,
    "We meet the ones that matter most in finance."
   ]
  ]
 },
 "discrete": {
  "dur": 42.36,
  "marks": {
   "a": 0.0,
   "ev": 13.581,
   "var": 25.435,
   "sd": 38.717
  },
  "cues": [
   [
    0.0,
    "A discrete random variable takes countable values, each with a probability."
   ],
   [
    5.37,
    "Here, the number of rate cuts this year: zero, one, or two, with probabilities twenty, fifty, and thirty percent."
   ],
   [
    13.581,
    "The expected value weights each outcome by its probability: zero times point two, plus one times point five, plus two times point three, is one point one."
   ],
   [
    25.435,
    "The variance weights squared distances from the mean: point two times one point two one, plus point five times point oh one, plus point three times point eight one, is point four nine."
   ],
   [
    38.717,
    "Its square root, the standard deviation, is point seven."
   ]
  ]
 },
 "q1": {
  "dur": 2.688,
  "marks": {},
  "cues": [
   [
    0.0,
    "Quick check."
   ],
   [
    0.839,
    "Find the expected value."
   ]
  ]
 },
 "uniform": {
  "dur": 34.824,
  "marks": {
   "d": 0.0,
   "cum": 7.821,
   "c": 10.971,
   "area": 22.184,
   "pt": 30.773
  },
  "cues": [
   [
    0.0,
    "In a discrete uniform distribution, every outcome is equally likely."
   ],
   [
    4.988,
    "A fair die gives each face one sixth."
   ],
   [
    7.821,
    "The probability of four or less is four sixths."
   ],
   [
    10.971,
    "A continuous uniform distribution spreads probability evenly over an interval, here zero to ten."
   ],
   [
    18.265,
    "The height is one tenth, so the total area is one."
   ],
   [
    22.184,
    "For a continuous variable, probability is area."
   ],
   [
    25.42,
    "Between two and five, the width is three, so the probability is point three."
   ],
   [
    30.773,
    "And the probability of any single exact value is zero."
   ]
  ]
 },
 "binomial": {
  "dur": 53.88,
  "marks": {
   "a": 0.0,
   "bars": 13.645,
   "x2": 23.067,
   "formula": 36.627,
   "mv": 45.643
  },
  "cues": [
   [
    0.0,
    "A binomial random variable counts successes in n independent trials, each with the same success probability p."
   ],
   [
    8.22,
    "Say a trade works with probability point six, and we make three trades."
   ],
   [
    13.645,
    "The chance of zero, one, two, or three winners is point oh six four, point two eight eight, point four three two, and point two one six."
   ],
   [
    23.067,
    "For two winners, there are three ways to choose which trades win."
   ],
   [
    27.57,
    "Each way has probability point six squared times point four."
   ],
   [
    31.726,
    "Three times point three six times point four is point four three two."
   ],
   [
    36.627,
    "In general, the probability of x successes is n choose x, times p to the x, times one minus p to the n minus x."
   ],
   [
    45.643,
    "The mean is n times p: one point eight."
   ],
   [
    48.788,
    "The variance is n times p times one minus p: point seven two."
   ]
  ]
 },
 "q2": {
  "dur": 2.784,
  "marks": {},
  "cues": [
   [
    0.0,
    "Quick check."
   ],
   [
    0.844,
    "Use the binomial formula."
   ]
  ]
 },
 "normal": {
  "dur": 30.0,
  "marks": {
   "a": 0.0,
   "s1": 11.555,
   "s2": 17.157,
   "s3": 19.901,
   "note": 23.392
  },
  "cues": [
   [
    0.0,
    "The normal distribution is the bell curve."
   ],
   [
    3.119,
    "It is fully described by its mean and standard deviation."
   ],
   [
    7.351,
    "It is symmetric, so the mean, median and mode coincide."
   ],
   [
    11.555,
    "About sixty-eight percent of outcomes fall within one standard deviation of the mean."
   ],
   [
    17.157,
    "About ninety-five percent fall within two."
   ],
   [
    19.901,
    "And about ninety-nine point seven percent within three."
   ],
   [
    23.392,
    "Many financial models assume normal returns, though real returns often have fatter tails."
   ]
  ]
 },
 "zscore": {
  "dur": 36.984,
  "marks": {
   "a": 0.0,
   "ex": 8.333,
   "z": 18.203,
   "tail": 27.027
  },
  "cues": [
   [
    0.0,
    "To find probabilities, we standardize."
   ],
   [
    2.762,
    "The z-score is the value minus the mean, divided by the standard deviation."
   ],
   [
    8.333,
    "Suppose returns are normal with mean eight percent and standard deviation twelve."
   ],
   [
    14.098,
    "What is the chance of a return below minus four percent?"
   ],
   [
    18.203,
    "Minus four minus eight, divided by twelve, is minus one."
   ],
   [
    22.674,
    "The value sits one standard deviation below the mean."
   ],
   [
    27.027,
    "From the standard normal table, the area to the left of minus one is about point one five nine."
   ],
   [
    33.852,
    "So the chance is roughly sixteen percent."
   ]
  ]
 },
 "tdist": {
  "dur": 34.032,
  "marks": {
   "a": 0.0,
   "curve": 6.541,
   "df": 10.224,
   "conv": 16.168,
   "crit": 19.829
  },
  "cues": [
   [
    0.0,
    "When we estimate the standard deviation from a small sample, the Student's t distribution applies."
   ],
   [
    6.541,
    "It is symmetric like the normal, but with fatter tails."
   ],
   [
    10.224,
    "Its shape depends on the degrees of freedom."
   ],
   [
    12.979,
    "With few degrees of freedom, the tails are heavy."
   ],
   [
    16.168,
    "As degrees of freedom grow, it approaches the normal."
   ],
   [
    19.829,
    "For a ninety-five percent two-sided interval, the critical value is two point five seven one with five degrees of freedom, two point zero four two with thirty, and one point nine six for the normal."
   ]
  ]
 },
 "chisq": {
  "dur": 35.352,
  "marks": {
   "a": 0.0,
   "df": 10.829,
   "use": 15.301,
   "f": 17.661,
   "end": 30.005
  },
  "cues": [
   [
    0.0,
    "The chi-square distribution describes a sum of squared standard normal variables."
   ],
   [
    5.596,
    "It starts at zero, so it is never negative, and it is skewed to the right."
   ],
   [
    10.829,
    "With more degrees of freedom, it shifts right and looks more symmetric."
   ],
   [
    15.301,
    "We use it to test a variance."
   ],
   [
    17.661,
    "The F distribution is the ratio of two chi-square variables, each divided by its degrees of freedom."
   ],
   [
    25.07,
    "It is also right-skewed, and it is used to compare two variances."
   ],
   [
    30.005,
    "Both depend on degrees of freedom, so tables list critical values for each."
   ]
  ]
 },
 "wrap": {
  "dur": 34.128,
  "marks": {
   "w1": 1.144,
   "w2": 8.261,
   "w3": 15.016,
   "w4": 25.099,
   "end": 31.853
  },
  "cues": [
   [
    0.0,
    "To sum up."
   ],
   [
    1.144,
    "A discrete distribution has an expected value and a variance built from probability-weighted outcomes."
   ],
   [
    8.261,
    "Uniform distributions are equally likely; for a continuous variable, probability is area."
   ],
   [
    15.016,
    "The binomial counts successes in independent trials."
   ],
   [
    18.716,
    "The normal is described by its mean and standard deviation, and z-scores standardize it."
   ],
   [
    25.099,
    "The t, chi-square and F distributions depend on degrees of freedom and drive the tests ahead."
   ],
   [
    31.853,
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
  "dur": 3.0,
  "marks": {},
  "cues": [
   [
    0.0,
    "Well done."
   ],
   [
    0.67,
    "That is the end of chapter four."
   ]
  ]
 }
};
