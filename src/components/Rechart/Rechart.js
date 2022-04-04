import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const Rechart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="md:grid grid-cols-2 mt-14 mx-auto">
      <div>
          <h1 style={{color:"#581c87"}} className="text-center text-xl font-bold mb-7">Monthwise seell</h1>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <XAxis dataKey="month"></XAxis>
        <YAxis dataKey="sell"></YAxis>
        <Tooltip></Tooltip>
        <Legend />
      </LineChart>
      </div>
      <div>
      <h1 style={{color:"#581c87"}} className="text-center text-xl font-bold mb-7">Invesment vs Revenue</h1>
      <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stroke="#ffd150" fill="#ffd150" />
        </AreaChart>
      </div>
      <div className="mt-6">
      <h1 style={{color:"#581c87"}} className="text-center text-xl font-bold mb-7">Invesment vs Revenue</h1>
      <BarChart width={400} height={300} data={data}>
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#ffd150" />
          <XAxis dataKey='month'></XAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
      <div className="mt-6 text-center">
      <h1 style={{color:"#581c87"}} className="text-center text-xl font-bold mb-7">Invesment vs Revenue</h1>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="investment"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="revenue" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Rechart;
