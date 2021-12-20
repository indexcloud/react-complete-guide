import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
	return (
		<div className="chart">
			{props.dataPoints.map(dataPoint => (
				<CharBar key={dataPoint.key} value={dataPoint.value} maxValue={null} label={dataPoint.lable} />
			))}
		</div>
	);
};

export default Chart;
