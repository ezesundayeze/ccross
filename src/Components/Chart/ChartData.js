let data = [
  {
    horizontal: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],

      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#9ac802 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          data: [
            -25.0,
            -32.4,
            -22.2,
            -39.4,
            0,
            34.2,
            22.0,
            23.2,
            24.1,
            20.0,
            18.4,
            19.1,
            17.4,
          ],
        },
      ],
    },
    vertical: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#9ac802 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          strokeColor: "#ff6c23",

          data: [
            25.0,
            32.4,
            22.2,
            39.4,
            34.2,
            22.0,
            23.2,
            24.1,
            20.0,
            18.4,
            19.1,
            17.4,
          ],
        },
      ],
    },
  },

  {
    horizontal: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#9ac802 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          data: [
            -25.0,
            -32.4,
            -22.2,
            -39.4,
            0,
            34.2,
            22.0,
            23.2,
            24.1,
            20.0,
            18.4,
            19.1,
            17.4,
          ],
        },
      ],
    },

    vertical: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#9ac802 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          strokeColor: "#ff6c23",

          data: [
            25.0,
            32.4,
            22.2,
            39.4,
            34.2,
            22.0,
            23.2,
            24.1,
            20.0,
            18.4,
            19.1,
            17.4,
          ],
        },
      ],
    },
  },

  {
    horizontal: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#FA4F4F ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          data: [-25.0, -32.4, -22.2, -39.4, 0, 34.2, 22.0, -23.2, -10],
        },
      ],
    },
    vertical: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#9ac802 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          strokeColor: "#ff6c23",
          data: [0, 0, 2, 1, 1, 42.0, 0, 0, 0, 0, 0, 0],
        },
      ],
    },
  },
  {
    horizontal: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
      ],
      datasets: [
        {
          // backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: "#666e79 ",
          pointColor: "#fff",
          pointStrokeColor: "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#ff6c23",
          data: [-25.0, -32.4, -22.2, -39.4, 0, 34.2, 22.0, -23.2, -10],
        },
      ],
    },

    vertical: {
      labels: [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
      ],
      datasets: [
        {
          backgroundColor: "rgba(250,174,50,0)", // Put the gradient here as a fill color
          strokeColor: "#ff6c23",
          data: [],
        },
      ],
    },
  },
];

const options = {
  responsive: true,
  legend: {
    display: false,
  },

  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    xAxes: [
      {
        ticks: {
          display: false,
        },

        gridLines: {
          color: " rgba(0, 0, 0,0)",
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },

        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
};
export { options, data };
