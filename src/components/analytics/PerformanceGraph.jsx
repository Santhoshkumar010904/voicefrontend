import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PerformanceGraph() {

  const data = [
    { month: "Jan", performance: 60 },
    { month: "Feb", performance: 75 },
    { month: "Mar", performance: 82 },
    { month: "Apr", performance: 90 },
    { month: "May", performance: 84 },
    { month: "Jun", performance: 96 },
  ];

  return (
    <div className="analytics-widget">

      <h2 className="widget-title">
        Performance Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <AreaChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="performance"
            stroke="#3b82f6"
            fill="#3b82f6"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceGraph;