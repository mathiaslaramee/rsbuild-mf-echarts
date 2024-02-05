import { useEffect, useRef, useState } from "react";
import "./App.css";
import { init, EChartsOption } from "echarts";

const App = () => {
	const ref = useRef(null);
	const loaded = useRef(false);

	useEffect(() => {
		if (ref.current && !loaded.current) {
			loaded.current = true;

			const chart = init(ref.current);

			const option: EChartsOption = {
				xAxis: {
					type: "time",
				},
				yAxis: {
					name: "test",
					type: "value",
				},
			};

			chart.setOption(option);
		}
	}, []);

	return (
		<div className="content">
			<h1>Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild.</p>
			<div ref={ref} style={{ height: "400px", width: "400px" }} id="chart" />
		</div>
	);
};

export default App;

