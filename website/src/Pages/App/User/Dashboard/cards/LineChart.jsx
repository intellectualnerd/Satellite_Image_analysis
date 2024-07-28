import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Typography } from '@mui/material';
import {useTheme} from '@mui/material';
import { format } from 'date-fns'; 
import {useMediaQuery} from '@mui/material';

export default function MarkOptimization() {


   const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  let cardWidth = 1200;
  let cardHeight = 350;
  let chartWidth = 350;
  let chartHeight = 300;

  if (isSmallScreen) {
    cardWidth = 300;
    cardHeight = 360;
    chartWidth = 310;
    chartHeight = 300;
  } else if (isMediumScreen) {
    cardWidth = 600;
    cardHeight = 300;
    chartWidth = 600;
    chartHeight = 260;
  } else if (isLargeScreen) {
    cardWidth = 1200;
    cardHeight = 330;
    chartWidth = 1200;
    chartHeight = 280;
  }


  return (
    <Card sx={{ width: cardWidth ,height:cardHeight}} >
        <CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          TIME V/S Deforestation And Air Pollution(%)
        </Typography>

    <LineChart
      xAxis={
        [
            {
                
              label: "Date And Time",
              type: 'date',
                data:[new Date(2024,2,1),new Date(2024,2,2),new Date(2024,2,3),new Date(2024,2,4),new Date(2024,2,5)],
          valueFormatter: (value) =>  format(value, 'MMM dd'),
         
            
            }
        ]
        }
    yAxis={[
        {
            label:"Deforestation And Air Pollution"
        }
    ]}
    title='TIME V/S Deforestation And Air Pollution(%)'
      series={[
        {
           curve: "monotoneX",data: [2,  5.5, 8.5,1,1] ,
         color:'#e7be5b',
          showMark: ({ index }) => index % 2 === 0,
          
        },
        {
          curve: "monotoneX", data: [6, 3, 7, 9.5, 4] , 
        },
    
      ]}
 
      width={chartWidth}
      height={chartHeight}
      
    />
        </CardContent>
    </Card>
  );
}