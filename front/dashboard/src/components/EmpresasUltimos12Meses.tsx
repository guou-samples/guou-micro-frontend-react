import React from "react";
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    "country": "AD",
    "hot dog": 111,
    "hot dogColor": "hsl(138, 70%, 50%)",
    "burger": 149,
    "burgerColor": "hsl(253, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(344, 70%, 50%)",
    "kebab": 118,
    "kebabColor": "hsl(334, 70%, 50%)",
    "fries": 40,
    "friesColor": "hsl(324, 70%, 50%)",
    "donut": 114,
    "donutColor": "hsl(12, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 125,
    "hot dogColor": "hsl(151, 70%, 50%)",
    "burger": 183,
    "burgerColor": "hsl(220, 70%, 50%)",
    "sandwich": 127,
    "sandwichColor": "hsl(300, 70%, 50%)",
    "kebab": 141,
    "kebabColor": "hsl(303, 70%, 50%)",
    "fries": 75,
    "friesColor": "hsl(138, 70%, 50%)",
    "donut": 47,
    "donutColor": "hsl(268, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 140,
    "hot dogColor": "hsl(291, 70%, 50%)",
    "burger": 194,
    "burgerColor": "hsl(105, 70%, 50%)",
    "sandwich": 187,
    "sandwichColor": "hsl(269, 70%, 50%)",
    "kebab": 91,
    "kebabColor": "hsl(126, 70%, 50%)",
    "fries": 144,
    "friesColor": "hsl(158, 70%, 50%)",
    "donut": 159,
    "donutColor": "hsl(183, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 181,
    "hot dogColor": "hsl(22, 70%, 50%)",
    "burger": 107,
    "burgerColor": "hsl(145, 70%, 50%)",
    "sandwich": 136,
    "sandwichColor": "hsl(166, 70%, 50%)",
    "kebab": 61,
    "kebabColor": "hsl(156, 70%, 50%)",
    "fries": 191,
    "friesColor": "hsl(241, 70%, 50%)",
    "donut": 59,
    "donutColor": "hsl(152, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 1,
    "hot dogColor": "hsl(157, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(21, 70%, 50%)",
    "sandwich": 85,
    "sandwichColor": "hsl(68, 70%, 50%)",
    "kebab": 154,
    "kebabColor": "hsl(98, 70%, 50%)",
    "fries": 80,
    "friesColor": "hsl(8, 70%, 50%)",
    "donut": 22,
    "donutColor": "hsl(133, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 197,
    "hot dogColor": "hsl(260, 70%, 50%)",
    "burger": 115,
    "burgerColor": "hsl(86, 70%, 50%)",
    "sandwich": 17,
    "sandwichColor": "hsl(203, 70%, 50%)",
    "kebab": 31,
    "kebabColor": "hsl(81, 70%, 50%)",
    "fries": 27,
    "friesColor": "hsl(219, 70%, 50%)",
    "donut": 11,
    "donutColor": "hsl(235, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 46,
    "hot dogColor": "hsl(108, 70%, 50%)",
    "burger": 82,
    "burgerColor": "hsl(267, 70%, 50%)",
    "sandwich": 78,
    "sandwichColor": "hsl(133, 70%, 50%)",
    "kebab": 132,
    "kebabColor": "hsl(140, 70%, 50%)",
    "fries": 120,
    "friesColor": "hsl(210, 70%, 50%)",
    "donut": 74,
    "donutColor": "hsl(192, 70%, 50%)"
  }
];

const EmpresasUltimos12Meses = () => (
  <ResponsiveBar
    data={data}
    keys={[
      'hot dog',
      'burger',
      'sandwich',
      'kebab',
      'fries',
      'donut'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    innerPadding={2}
    groupMode="grouped"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    legendLabel={datum => {
      console.log(datum.id, datum);
      return `${datum.id.toString().toLocaleUpperCase()}`
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
  />
)

export default EmpresasUltimos12Meses;
