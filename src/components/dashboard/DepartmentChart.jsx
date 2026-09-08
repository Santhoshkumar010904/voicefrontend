import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

function DepartmentChart() {

  const data = [
    { name: "Development", value: 40 },
    { name: "Marketing", value: 25 },
    { name: "HR", value: 15 },
    { name: "Support", value: 20 },
  ];

  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
  ];

  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Department Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >

            {
              data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))
            }

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DepartmentChart;