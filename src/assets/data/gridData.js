let gridData = [
  {
    "country":"Austria",
    "carbon":0.18,
    "nox":0.32,
    "nmvoc":0.02,
    "pm":0.05,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Bosnia and Herzegovina",
    "carbon":1.17,
    "nox":0.89,
    "nmvoc":0.02,
    "pm":0.29,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Belgium",
    "carbon":0.22,
    "nox":0.43,
    "nmvoc":0.02,
    "pm":0.07,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Bulgaria",
    "carbon":0.87,
    "nox":0.93,
    "nmvoc":0.03,
    "pm":0.26,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Switzerland",
    "carbon": 0.01,
    "nox":0.06,
    "nmvoc":0.01,
    "pm": 0.02,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Czech Republic",
    "carbon":0.77,
    "nox":0.89,
    "nmvoc":0.03,
    "pm":0.19,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Germany",
    "carbon":0.65,
    "nox":0.88,
    "nmvoc":0.04,
    "pm":0.1,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Denmark",
    "carbon":0.48,
    "nox":1.48,
    "nmvoc":0.04,
    "pm":0.13,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Estonia",
    "carbon":1.38,
    "nox":1.18,
    "nmvoc":0.03,
    "pm":0.35,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Greece",
    "carbon":0.88,
    "nox":0.83,
    "nmvoc":0.05,
    "pm":0.16,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Spain",
    "carbon":0.34,
    "nox":0.85,
    "nmvoc":0.04,
    "pm":0.12,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Finland",
    "carbon":0.29,
    "nox":0.85,
    "nmvoc":0.03,
    "pm":0.08,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"France",
    "carbon":0.09,
    "nox":0.28,
    "nmvoc":0.01,
    "pm":0.06,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Croatia",
    "carbon":0.36,
    "nox":1.10,
    "nmvoc":0.03,
    "pm":0.11,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Hungary",
    "carbon":0.48,
    "nox":0.65,
    "nmvoc":0.03,
    "pm":0.11,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Ireland",
    "carbon":0.57,
    "nox":0.98,
    "nmvoc":0.03,
    "pm":0.07,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Italy",
    "carbon":0.51,
    "nox":1.27,
    "nmvoc":0.07,
    "pm":0.11,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },

  {
    "country":"Lithuania",
    "carbon":0.53,
    "nox":1.18,
    "nmvoc":0.09,
    "pm":0.09,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Luxembourg",
    "carbon":0.42,
    "nox":0.58,
    "nmvoc":0.04,
    "pm":0.05,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Latvia",
    "carbon":0.29,
    "nox":0.72,
    "nmvoc":0.05,
    "pm":0.05,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Montenegro",
    "carbon":0.59,
    "nox":0.45,
    "nmvoc":0.01,
    "pm":0.15,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Netherlands",
    "carbon":0.57,
    "nox":0.92,
    "nmvoc":0.04,
    "pm":0.11,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Norway",
    "carbon":0.01,
    "nox":0.02,
    "nmvoc":0.00,
    "pm":0.01,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Poland",
    "carbon":1.09,
    "nox": 2.26,
    "nmvoc":0.04,
    "pm":0.42,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Portugal",
    "carbon":0.42,
    "nox":1.32,
    "nmvoc":0.05,
    "pm":0.11,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Romania",
    "carbon":0.58,
    "nox":0.58,
    "nmvoc":0.03,
    "pm":0.14,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Serbia",
    "carbon":1.18,
    "nox":0.9,
    "nmvoc":0.02,
    "pm":0.29,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Russian Federation",
    "carbon":0.76,
    "nox":1.49,
    "nmvoc":0.09,
    "pm":0.18,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Sweden",
    "carbon":0.03,
    "nox":0.19,
    "nmvoc":0.01,
    "pm":0.03,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Slovenia",
    "carbon":0.43,
    "nox":0.39,
    "nmvoc":0.01,
    "pm":0.1,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Slovakia",
    "carbon":0.28,
    "nox":0.52,
    "nmvoc":0.02,
    "pm":0.09,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"Turkey",
    "carbon":0.75,
    "nox":1.06,
    "nmvoc":0.07,
    "pm":0.1,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  },
  {
    "country":"United Kingdom",
    "carbon":0.6,
    "nox":1.55,
    "nmvoc":1.55,
    "pm":0.16,
    "source": "IEA 2015, Eurostat 2015, ifeu 2016"
  }
]

export default  gridData;
