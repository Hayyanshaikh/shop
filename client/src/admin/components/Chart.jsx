import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ chartData }) => {
  const seriesData = chartData.map(dataPoint => dataPoint.value);
  const categories = chartData.map(dataPoint => dataPoint.category);
  if (!seriesData.length) {
    return <div className="p-3">No data available for the chart.</div>;
  }
  const chartOptions = {
    chart: {
      id: 'dynamic-bar-chart',
      toolbar: {
        show: true,
      }, 
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20px',
        borderRadius: 2
      },
    },
    fill: {
      colors: "#fb923c"
    },
    xaxis: {
      categories: categories || [],
    },
    dataLabels: {
      enabled: false,
    },
  };

  return <ReactApexChart options={chartOptions} series={[{ name: 'Value', data: seriesData }]} type="bar" height={300} />;
};

export default Chart;