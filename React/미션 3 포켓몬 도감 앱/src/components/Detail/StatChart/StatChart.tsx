import styled from '@emotion/styled'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import { Color, Colors } from '../../../constant/Colors'
import dataRefine from './dataRefine'

interface StatChartProps {
  stat: number[]
  color: Color
}

function StatChart({ stat, color }: StatChartProps) {
  const data = dataRefine(stat)
  console.log(data)
  const Container = styled.div`
    width: 500px;
  `
  return (
    <Container>
      <RadarChart outerRadius={150} width={400} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 1]} angle={30} tick={false}/>
        <Radar dataKey="A" stroke="#8884d8" fill={Colors[color]} fillOpacity={0.7} />
      </RadarChart>
    </Container>
  )
}

export default StatChart
