import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryStack,
  VictoryTooltip,
  VictoryPie
} from 'victory'

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 50vh);
  grid-gap: 1px; */

  > * {
    height: 300px;
    /* background: #0c1015 */
    /* border: 1px solid pink; */
  }
`

const GS = createGlobalStyle` body { background: #0c1015 } `

const data = [
  {
    "covariateId": 7003,
    "covariateName": "age group: 35-39",
    "conceptId": 0,
    "count": 7,
    "proportion": null
  },
  {
    "covariateId": 8003,
    "covariateName": "age group: 40-44",
    "conceptId": 0,
    "count": 8,
    "proportion": null
  },
  {
    "covariateId": 9003,
    "covariateName": "age group: 45-49",
    "conceptId": 0,
    "count": 1
  },
  {
    "covariateId": 10003,
    "covariateName": "age group: 50-54",
    "conceptId": 0,
    "count": 4,
    "proportion": null
  },
  {
    "covariateId": 11003,
    "covariateName": "age group: 55-59",
    "conceptId": 0,
    "count": 13,
    "proportion": null
  },
  {
    "covariateId": 12003,
    "covariateName": "age group: 60-64",
    "count": 12
  },
  {
    "covariateId": 13003,
    "covariateName": "age group: 65-69",
    "count": 21
  },
  {
    "covariateId": 14003,
    "covariateName": "age group: 70-74",
    "count": 32
  },
  {
    "covariateId": 15003,
    "covariateName": "age group: 75-79",
    "count": 32
  },
  {
    "covariateId": 16003,
    "covariateName": "age group: 80-84",
    "count": 12
  },
  {
    "covariateId": 17003,
    "covariateName": "age group: 85-89",
    "conceptId": 0,
    "count": 3,
    "proportion": null
  },
  {
    "covariateId": 18003,
    "covariateName": "age group: 90-94",
    "conceptId": 0,
    "count": 10,
    "proportion": null
  },
  {
    "covariateId": 19003,
    "covariateName": "age group: 95-99",
    "conceptId": 0,
    "count": 1,
    "proportion": null
  },
]

function App() {
  const parsedData = data.map(row => ({ x: row.covariateName.split(':')[1].trim(), y: row.count }))
  const w = window.innerWidth / 4
  const h = 300
  const primary = '#5b9bea'
  const secondary = '#c19'

  return (
    <Gallery>
      <GS />

      <VictoryChart width={w}>
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => datum.y}
          animate={true}
          data={parsedData}
          style={{ data: { fill: "#7DC1EF" } }}
        />
        <VictoryAxis
          style={{ tickLabels: { padding: 15, angle: 60, fill: '#fff', fontSize: 10, fontFamily: 'Heebo', fontWeight: 100 } }}
          domain={[0, 20]}
        />
        <VictoryAxis dependentAxis
          domain={[0, 20]}
          style={{ grid: { stroke: "#5b9bea44", strokeWidth: 0.5 }, tickLabels: { fill: '#fff', fontSize: 10, fontFamily: 'Heebo', fontWeight: 100 } }}
        />
      </VictoryChart>


      {/* <VictoryPie
        animate={true}
        // style={{ labels: { fill: "white" } }}
        innerRadius={60}
        radius={100}
        labelRadius={80}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryTooltip />}
        data={parsedData}
      />
      


      <VictoryPie
        data={parsedData}
        animate={true}
        // labelRadius={55}
        innerRadius={20}
        radius={({ datum }) => datum.y * 2 + 50}
      >
      </VictoryPie>



      <VictoryChart horizontal
        animate={true}
        // height={height}
        // width={width}
        // padding={40}
      >
        <VictoryStack
        style={{ data: { width: 25 }, labels: { fontSize: 15 } }}
        >
          <VictoryBar
          style={{ data: { fill: "tomato" } }}
          data={parsedData}
          y={(data) => (-Math.abs(data.y))}
          labels={({ datum }) => -datum.y}
          />
          <VictoryBar
          style={{ data: { fill: "orange" } }}
          data={parsedData}
          labels={({ datum }) => Math.abs(datum.y)}
          />
        </VictoryStack>

        <VictoryAxis
          style={{
            // axis: { stroke: "transparent" },
            // ticks: { stroke: "transparent" },
            // tickLabels: { fontSize: 15, fill: "black" }
          }}
     
          tickLabelComponent={
            <VictoryLabel
            x={200}
            textAnchor="middle"
            />
          }
        tickValues={data.map((point) => point.x).reverse()}
        />
      </VictoryChart> */}
      

    </Gallery>
  )
}

export default App
