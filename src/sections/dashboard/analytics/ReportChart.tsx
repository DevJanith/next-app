'use client';

// material-ui
import { useTheme } from '@mui/material/styles';

import { chartsGridClasses, LineChart } from '@mui/x-charts';

const data = [58, 90, 38, 83, 63, 75, 35];
const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ==============================|| REPORT AREA CHART ||============================== //

export default function ReportChart() {
  const theme = useTheme();
  const axisFonstyle = { fill: theme.palette.text.secondary };

  return (
    <LineChart
      grid={{ horizontal: true }}
      xAxis={[{ data: labels, scaleType: 'point', disableLine: true, disableTicks: true, tickLabelStyle: axisFonstyle }]}
      leftAxis={null}
      series={[
        {
          data,
          showMark: false,
          id: 'ReportAreaChart',
          color: theme.palette.warning.main,
          label: 'Income',
          valueFormatter: (value: number | null) => `$ ${value}`
        }
      ]}
      slotProps={{ legend: { hidden: true } }}
      height={340}
      margin={{ top: 30, bottom: 50, left: 20, right: 20 }}
      sx={{ '& .MuiLineElement-root': { strokeWidth: 1 }, [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3' } }}
    />
  );
}
