export interface IVisualizationOptions {
    height: 500,
    width: 1000,
}

export interface IDataPoint {}

export abstract class SteelCloud3DViz {
    protected data: IDataPoint[];
    public abstract getVisualization() : HTMLDivElement;
    public abstract updateData(data: IDataPoint[]): void;
}