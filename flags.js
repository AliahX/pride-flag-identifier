flagList = {
  "progress": [
    {
      "style": "progress",
      "colors": [
        "red",
        "orange",
        "yellow",
        "green",
        "darkblue",
        "purple",
        "black",
        "brown",
        "lightblue",
        "pink",
        "white"
      ]
    }
  ],
  "agender": [
    {
      "style": "7-stripe",
      "colors": [
        "black",
        "gray",
        "white",
        "lightgreen",
        "white",
        "gray",
        "black"
      ]
    }, {
      "style": "5-stripe",
      "colors": [
        "green",
        "lightgreen",
        "yellow",
        "orange",
        "red"
      ]
    }, {
      "style": "3-stripe",
      "colors": [
        "white",
        "black",
        "white"
      ]
    }, {
      "style": "9-stripe",
      "colors": [
        "black",
        "gray",
        "white",
        "lavender",
        "green",
        "lavender",
        "white",
        "gray",
        "black"
      ]
    }
  ],
  "aromantic": [
    {
      "style": "5-stripe",
      "colors": [
        "green",
        "lightgreen",
        "white",
        "gray",
        "black"
      ]
    }
  ],
  "asexual": [
    {
      "style": "4-stripe",
      "colors": [
        "black",
        "gray",
        "white",
        "purple"
      ]
    }
  ],
  "bisexual": [
    {
      "style": "3-stripe-bi",
      "colors": [
        "redpurple",
        "lightpurple",
        "darkblue"
      ]
    }
  ],
  "demiboy": [
    {
      "style": "7-stripe",
      "colors": [
        "darkgray",
        "gray",
        "lightblue",
        "white",
        "lightblue",
        "gray",
        "darkgray"
      ]
    }
  ],
  "demigirl": [
    {
      "style": "7-stripe",
      "colors": [
        "darkgray",
        "gray",
        "pink",
        "white",
        "pink",
        "gray",
        "darkgray"
      ]
    }
  ],
  "demiromantic": [
    {
      "style": "demi",
      "colors": [
        "white",
        "green",
        "gray",
        "black"
      ]
    }
  ],
  "demisexual": [
    {
      "style": "demi",
      "colors": [
        "white",
        "purple",
        "gray",
        "black"
      ]
    }
  ],
  "rainbow": [
    {
      "style": "6-stripe",
      "colors": [
        "red",
        "orange",
        "yellow",
        "green",
        "darkblue",
        "purple"
      ]
    }
  ],
  "genderfluid": [
    {
      "style": "5-stripe",
      "colors": [
        "pink",
        "white",
        "purple",
        "black",
        "darkblue"
      ]
    }
  ],
  "genderqueer": [
    {
      "style": "3-stripe",
      "colors": [
        "lavender",
        "white",
        "green"
      ]
    }
  ],
  "intersex": [
    {
      "style": "intersex",
      "colors": [
        "yellow",
        "purple"
      ]
    }
  ],
  "lesbian": [
    {
      "style": "5-stripe",
      "colors": [
        "darkorange",
        "lightorange",
        "white",
        "pink",
        "redpurple"
      ]
    }
  ],
  "nonbinary": [
    {
      "style": "4-stripe",
      "colors": [
        "yellow",
        "white",
        "lavender",
        "black"
      ]
    }
  ],
  "pansexual": [
    {
      "style": "3-stripe",
      "colors": [
        "redpurple",
        "yellow",
        "blue"
      ]
    }
  ],
  "polysexual": [
    {
      "style": "3-stripe",
      "colors": [
        "redpurple",
        "palegreen",
        "blue"
      ]
    }
  ],
  "transgender": [
    {
      "style": "5-stripe",
      "colors": [
        "lightblue",
        "pink",
        "white",
        "pink",
        "lightblue"
      ]
    }
  ],
  "androgyne": [
    {
      "style": "3-stripe-vertical",
      "colors": [
        "redpurple",
        "blueviolet",
        "cyan"
      ]
    }
  ],
  "gender-nonconforming": [
    {
      "style": "3-stripe-bi",
      "colors": [
        "purple",
        "white",
        "purple"
      ]
    }
  ],
  "ingender": [
    {
      "style": "solid",
      "colors": [
        "white"
      ]
    }
  ]
}

colorList = {
  "red": "#ee2724",
  "darkorange": "#d62902",
  "orange": "#f46d1e",
  "lightorange": "#ff9b54",
  "yellow": "#FFD800",
  "green": "#52bf37",
  "palegreen": "#00d568",
  "lightgreen": "#b8f483",
  "darkblue": "#2851a9",
  "blue": "#1d92f6",
  "cyan": "#00b9e8",
  "lightblue": "#88c4ed",
  "redpurple": "#d60370",
  "purple": "#9c158e",
  "lightpurple": "#9b4f96",
  "lavender": "#ab6cce",
  "blueviolet": "#8f2ff2",
  "pink": "#f67cc5",
  "brown": "#593219",
  "black": "#000000",
  "darkgray": "#7f7f7f",
  "gray": "#a9a9a9",
  "white": "#ffffff"
}

colorGroups = {
  "red": ["red", "darkorange", "orange", "redpurple", "purple"],
  "orange": ["red", "darkorange", "orange", "lightorange"],
  "yellow": ["orange", "lightorange", "yellow"],
  "green": ["green", "palegreen", "lightgreen"],
  "blue": ["darkblue", "blue", "cyan", "lightblue"],
  "purple": ["red", "redpurple", "purple", "lightpurple", "lavender", "blueviolet", "pink"],
  "pink": ["red", "redpurple", "purple", "lightpurple", "lavender", "blueviolet", "pink"],
  "brown": ["brown"],
  "black": ["black"],
  "gray": ["darkgray", "gray", "white"],
  "white": ["white", "gray"]
}

styleList = {
  "solid": [
    "rect width='100%' height='100%'"
  ],
  "2-stripe": [
    "rect width='100%' height='50%' y='00%'",
    "rect width='100%' height='50%' y='50%'"
  ],
  "3-stripe": [
    "rect width='100%' height='33.33%' y='00.00%'",
    "rect width='100%' height='33.33%' y='33.33%'",
    "rect width='100%' height='33.33%' y='66.66%'"
  ],
  "3-stripe-bi": [
    "rect width='100%' height='40.00%' y='00.00%'",
    "rect width='100%' height='20.00%' y='40.00%'",
    "rect width='100%' height='40.00%' y='60.00%'"
  ],
  "3-stripe-vertical": [
    "rect width='33.33%' height='100%' x='00.00%'",
    "rect width='33.33%' height='100%' x='33.33%'",
    "rect width='33.33%' height='100%' x='66.66%'"
  ],
  "4-stripe": [
    "rect width='100%' height='25.00%' y='00.00%'",
    "rect width='100%' height='25.00%' y='25.00%'",
    "rect width='100%' height='25.00%' y='50.00%'",
    "rect width='100%' height='25.00%' y='75.00%'"
  ],
  "5-stripe": [
    "rect width='100%' height='20.00%' y='00.00%'",
    "rect width='100%' height='20.00%' y='20.00%'",
    "rect width='100%' height='20.00%' y='40.00%'",
    "rect width='100%' height='20.00%' y='60.00%'",
    "rect width='100%' height='20.00%' y='80.00%'"
  ],
  "6-stripe": [
    "rect width='100%' height='16.66%' y='00.00%'",
    "rect width='100%' height='16.66%' y='16.66%'",
    "rect width='100%' height='16.66%' y='33.32%'",
    "rect width='100%' height='16.66%' y='49.98%'",
    "rect width='100%' height='16.66%' y='66.64%'",
    "rect width='100%' height='16.66%' y='83.30%'"
  ],
  "7-stripe": [
    "rect width='100%' height='14.28%' y='00.00%'",
    "rect width='100%' height='14.28%' y='14.28%'",
    "rect width='100%' height='14.28%' y='28.56%'",
    "rect width='100%' height='14.28%' y='42.84%'",
    "rect width='100%' height='14.28%' y='57.12%'",
    "rect width='100%' height='14.28%' y='71.40%'",
    "rect width='100%' height='14.28%' y='85.68%'"
  ],
  "8-stripe": [
    "rect width='100%' height='12.50%' y='00.00%'",
    "rect width='100%' height='12.50%' y='12.50%'",
    "rect width='100%' height='12.50%' y='25.00%'",
    "rect width='100%' height='12.50%' y='37.50%'",
    "rect width='100%' height='12.50%' y='50.00%'",
    "rect width='100%' height='12.50%' y='62.50%'",
    "rect width='100%' height='12.50%' y='75.00%'",
    "rect width='100%' height='12.50%' y='87.50%'"
  ],
  "9-stripe": [
    "rect width='100%' height='11.11%' y='00.00%'",
    "rect width='100%' height='11.11%' y='11.11%'",
    "rect width='100%' height='11.11%' y='22.22%'",
    "rect width='100%' height='11.11%' y='33.33%'",
    "rect width='100%' height='11.11%' y='44.44%'",
    "rect width='100%' height='11.11%' y='55.55%'",
    "rect width='100%' height='11.11%' y='66.66%'",
    "rect width='100%' height='11.11%' y='77.77%'",
    "rect width='100%' height='11.11%' y='88.88%'"
  ],
  "intersex": [
    "rect width='100%' height='100.00%' y='00.00%'",
    "circle cx='150' cy='100' r='50.00' fill='none' stroke-width='15.94'"
  ],
  "demi": [
    "rect width='100%' height='40.00%' y='00.00%'",
    "rect width='100%' height='20.00%' y='40.00%'",
    "rect width='100%' height='40.00%' y='60.00%'",
    "polygon points='0,0 0,200 114.75,100'"
  ],
  "progress": [
    "rect width='100%' height='16.66%' y='00.00%'",
    "rect width='100%' height='16.66%' y='16.66%'",
    "rect width='100%' height='16.66%' y='33.32%'",
    "rect width='100%' height='16.66%' y='49.98%'",
    "rect width='100%' height='16.66%' y='66.64%'",
    "rect width='100%' height='16.66%' y='83.30%'",
    "polygon points='0,-50.39 0,250.39 141.55,100'",
    "polygon points='0,-25.19 0,225.19 118.05,100'",
    "polygon points='0,00.00 0,200.00 95.65,100'",
    "polygon points='0,25.19 0,174.81 71.05,100'",
    "polygon points='0,50.39 0,149.61 47.55,100'",
  ]
}

function generateFlag(style, colors, strip=false) {
  SVGData = "";
  styleList[style].forEach(function(element, i) {
    if(element.split(" ")[0] == "circle") {
      element = element + "stroke='" + (colors[i] == undefined ? "#8C8273" : colorList[colors[i]]) + "'"
    } else {
      element = element + " fill='" + (colors[i] == undefined ? "#1E2021' stroke='#8C8273" : colorList[colors[i]]) + "'"
    }
    SVGData += "\n  <" + element + " />";
  });
  if(strip) {
    return SVGData;
  } else {
    return `<svg version="1.1" width="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${SVGData}\n</svg>`
  }
}
