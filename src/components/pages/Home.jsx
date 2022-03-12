import React from "react";
import Chart from "../chart/Chart";
import Features from "../features/Features";
import { data } from "../../data";
import WidgetSm from "../widget/WidgetSm";
import WidgetLg from "../widget/WidgetLg";

export default function Home({ users }) {
  return (
    <div className="home">
      <Features />
      <Chart data={data} title="User Analytics" dataKey="Active User" />
      <div className="widget">
        <WidgetSm users={users.slice(0, 7)} />
        <WidgetLg users={users.slice(0, 6)} />
      </div>
    </div>
  );
}
