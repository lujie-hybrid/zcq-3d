// export const businessJyLeftChart = ({
//   x,
//   y1,
//   y2,
//   y1Name,
//   y2Name,
//   legendName,
// }) => {
//   return {
//     height: 275,
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//     },
//     legend: {
//       data: legendName || [y1Name, y2Name],
//       top: 15,
//       right: 15,
//       itemWidth: 10,
//       itemHeight: 10,
//       icon: "rect",
//       textStyle: {
//         color: "rgba(255, 255, 255, 0.8)",
//         fontSize: 10,
//         fontWeight: 400,
//       },
//       orient: "vertical",
//     },
//     xAxis: {
//       data: x || [],
//       axisLabel: {
//         rotate: 30,
//       },
//       type: "category",
//       axisLine: {
//         show: true,
//       },
//     },
//     grid: {
//       left: 40,
//       top: 40,
//       right: 15,
//       bottom: 0,
//       height: 190,
//       containLabel: false,
//     },
//     yAxis: {
//       type: "value",
//       splitLine: {
//         show: false,
//       },
//       nameTextStyle: {
//         padding: [0, 0, 0, -10],
//       },
//       axisLine: {
//         show: true,
//       },
//       axisLabel: {
//         verticalAlign: "top",
//       },
//     },
//     series: [
//       {
//         data: y1 || [],
//         name: y1Name || "",
//         type: "line",
//         symbolSize: 6,
//         itemStyle: {
//           color: "#A46CEF",
//         },
//         smooth: true,
//         label: {
//           show: true,
//           fontSize: 8,
//           fontWeight: 500,
//           color: "#A46CEF",
//         },
//       },
//       {
//         data: y2 || [],
//         name: y2Name || "",
//         type: "line",
//         smooth: true,
//         symbolSize: 6,
//         itemStyle: {
//           color: "#F9A901",
//         },
//         label: {
//           show: true,
//           fontSize: 8,
//           fontWeight: 500,
//           color: "#F9A901",
//         },
//       },
//     ],
//   };
// };

// export const cultureMsLeftChart = ({
//   x,
//   y1,
//   y2,
//   y1Name,
//   y2Name,
//   legendName,
//   yAxisName,
//   multi = true,
// }) => {
//   return {
//     height: 275,
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//     },
//     legend: {
//       data: legendName || [y1Name, y2Name],
//       top: 15,
//       right: 15,
//       itemWidth: 10,
//       itemHeight: 10,
//       icon: "rect",
//       textStyle: {
//         color: "rgba(255, 255, 255, 0.8)",
//         fontSize: 10,
//         fontWeight: 400,
//       },
//       orient: "vertical",
//     },
//     xAxis: {
//       data: x || [],
//       axisLabel: {
//         rotate: 30,
//       },
//       type: "category",
//       axisLine: {
//         show: true,
//       },
//     },
//     grid: {
//       left: 40,
//       top: 45,
//       right: 15,
//       bottom: 0,
//       height: 185,
//       containLabel: false,
//     },
//     yAxis: {
//       type: "value",
//       name: yAxisName || "",
//       splitLine: {
//         show: false,
//       },
//       nameTextStyle: {
//         padding: [0, 0, 0, -10],
//       },
//       axisLine: {
//         show: true,
//       },
//       axisLabel: {
//         verticalAlign: "top",
//       },
//     },
//     series: multi
//       ? [
//           {
//             data: y1 || [],
//             name: y1Name || "",
//             type: "line",
//             symbolSize: 6,
//             itemStyle: {
//               color: "#A46CEF",
//             },
//             smooth: true,
//             label: {
//               show: true,
//               fontSize: 8,
//               fontWeight: 500,
//               color: "#A46CEF",
//             },
//           },
//           {
//             data: y2 || [],
//             name: y2Name || "",
//             type: "line",
//             smooth: true,
//             symbolSize: 6,
//             itemStyle: {
//               color: "#F9A901",
//             },
//             label: {
//               show: true,
//               fontSize: 8,
//               fontWeight: 500,
//               color: "#F9A901",
//             },
//           },
//         ]
//       : [
//           {
//             data: y1 || [],
//             name: y1Name || "",
//             type: "line",
//             symbolSize: 6,
//             itemStyle: {
//               color: "#3C71FF",
//             },
//             smooth: true,
//             label: {
//               show: true,
//               fontSize: 8,
//               fontWeight: 500,
//               color: "#3C71FF",
//             },
//           },
//         ],
//   };
// };

export const businessLeftBottomChart = ({
  xData = [],
  yData = [],
  name = "",
  yName = "",
}) => {
  return {
    height: 260,
    xAxis: {
      data: xData,
      type: "category",
      axisLine: {
        show: true,
      },
    },
    grid: {
      left: 42,
      top: 46,
      right: 16,
      bottom: 0,
      height: 181,
      containLabel: false,
    },
    yAxis: {
      type: "value",
      max: 200,
      interval: 50,
      name: yName,
      splitLine: {
        show: false,
      },
      nameGap: 18,
      axisLine: {
        show: true,
      },
      axisLabel: {
        verticalAlign: "top",
      },
    },
    series: [
      {
        barWidth: 20,
        data: yData,
        name,
        itemStyle: {
          color: "#3C71FF",
          borderWidth: 1,
          borderColor: "#3C71FF",
          shadowColor: "#3C71FF",
          shadowBlur: "3px",
          shadowOffsetX: 0,
          shadowOffsetY: "1px",
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 8,
          fontWeight: 400,
          position: "top",
        },
      },
    ],
  };
};

export const businessRightTopChart = ({
  name = "",
  title = "",
  data = [],
  height = 235,
}) => {
  return {
    height,
    title: {
      text: title,
    },
    series: [
      {
        name,
        data,
        label: {
          formatter: "{c}",
        },
      },
    ],
  };
};

export const businessRightMiddleChart = ({
  title = "",
  height = 243,
  yData = [],
  xData = [],
  name = "",
}) => ({
  title: {
    text: title,
  },
  grid: {
    top: 44,
    left: 100,
    height: 165,
  },
  height,
  yAxis: {
    data: yData,
  },
  series: [
    {
      name,
      data: xData,
      barWidth: 14,
    },
    {
      type: "",
    },
  ],
});

export const manageRightBottomChart = ({
  title = "",
  height = 243,
  yData = [],
  xData = [],
  name = "",
}) => ({
  title: {
    text: title,
  },
  grid: {
    top: 44,
    left: 75,
    height: 165,
  },
  height,
  yAxis: {
    data: yData,
  },
  series: [
    {
      name,
      data: xData,
      barWidth: 14,
      itemStyle: {
        color: "#A46CEF",
      },
    },
    {
      type: "",
    },
  ],
});

export const mettingDetailBarChart = ({
  title = "",
  height = 243,
  yData = [],
  xData = [],
  name = "",
}) => ({
  title: {
    text: title,
  },
  grid: {
    top: 44,
    left: 65,
    height: 165,
  },
  xAxis: {
    min: 0,
    max: 50,
    interval: 10,
  },
  height,
  yAxis: {
    data: yData,
  },
  series: [
    {
      name,
      data: xData,
      barWidth: 14,
    },
    {
      type: "",
    },
  ],
});

export const showPieChart = ({
  name = "",
  title = "",
  data = [],
  height = 235,
}) => {
  return {
    height,
    title: {
      text: title,
      left: "28%",
    },
    legend: {
      left: "64%",
    },
    series: [
      {
        name,
        data,
        center: ["34%", "50%"],
        label: {
          formatter: "{c}",
        },
      },
    ],
  };
};
