/*import * as d3 from "d3";
import { newPlot, ScatterData } from "plotly.js";


export function addPlotlyPlot(root: HTMLElement | string) {
    d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv", (err, csvData) => {
        let trace: Partial<ScatterData> = {
            x: csvData.map(d => typeof d.x1 !== "undefined" ? parseFloat(d.x1 as string) : ""),
            y: csvData.map(d => typeof d.y1 !== "undefined" ? parseFloat(d.y1 as string) : ""),
            z: csvData.map(d => typeof d.z1 !== "undefined" ? parseFloat(d.z1 as string) : ""),
            mode: "markers",
            marker: {
                size: 10,
                color: "#ff0000"
            },
            type: "scattergl",
        }
    
        newPlot(root, [trace]);
    });
}

*/