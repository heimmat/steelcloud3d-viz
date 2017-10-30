import {SteelCloud3DViz, IDataPoint, IVisualizationOptionsArg, IVisualizationOptions} from "./common";
import * as d3 from "d3";

export interface IStockDatum extends IDataPoint {
    name: string,
    inStock: number
}

export class InStockGraph extends SteelCloud3DViz{
    protected data: IStockDatum[];
    protected vizOptions: IVisualizationOptions;
    protected visualization: HTMLDivElement;

    constructor(stockData: IStockDatum[], vizOptions?: IVisualizationOptionsArg) {
        super()
        this.data = stockData;
        this.vizOptions = new IVisualizationOptions(vizOptions)

        this.visualization = this.createVisualization();
    }

    private createVisualization() {
        let opts = this.vizOptions;
        let canvasWidth = opts.width - opts.margin.left - opts.margin.right;
        let canvasHeight = opts.height - opts.margin.top - opts.margin.bottom;
        let div = document.createElement("div");
        let svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let svg = d3.select(svgNode)
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("viewBox", `0 0 ${opts.width} ${opts.height}`);
        div.appendChild(svgNode);
        let canvas = svg.append("g")
            .attr("transform", `translate( ${opts.margin.left}, ${opts.margin.top})`)
        let scales = {
            x: d3.scaleBand().range([0, canvasWidth]).padding(0.1).domain(this.data.map(d => d.name)),
            y: d3.scaleLinear().range([canvasHeight, 0]).domain([0, Math.max(...this.data.map(d => d.inStock))])
        }
        let axes = {
            x: d3.axisBottom(scales.x),
            y: d3.axisLeft(scales.y)
        }
        canvas.append("g")
            .classed("axis", true)
            .classed("axis-x", true)
            .attr("transform", `translate(0, ${canvasHeight})`);

        canvas.append("g")
            .classed("axis", true)
            .classed("axis-y", true)

        canvas.select(".axis-x").call(axes.x);
        canvas.select(".axis-y").call(axes.y);      
        
        canvas.selectAll(".bar")
            .data<IStockDatum>(this.data)
            .enter()
                .append("rect")
                .classed("bar", true)
                .attr("fill", "steelblue")
                .attr("x", (d) => {
                    let scaled = scales.x(d.name)
                    if (scaled) {
                        return scaled;
                    }
                    else {
                        return 0;
                    }
                })
                .attr("y", d => scales.y(d.inStock))
                .attr("width", scales.x.bandwidth())
                .attr("height", d => canvasHeight - scales.y(d.inStock))
        
        return div;
    }

    public updateData(newData: IStockDatum[]) {
        this.data = newData
    }

    public getVisualization() {
        return this.visualization;
    }

    
}