import {SteelCloud3DViz, IDataPoint} from "./common";

export interface IStockDatum extends IDataPoint {
    
}

export class InStockGraph extends SteelCloud3DViz{
    protected data: IStockDatum[]
    constructor(stockData: IStockDatum[]) {
        super()
        this.data = stockData;
    }

    public getVisualization() {
        return document.createElement("div");
    }

    public updateData(newData: IStockDatum[]) {
        this.data = newData
    }

    
}