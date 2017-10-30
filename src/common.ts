export interface IVisualizationOptionsArg {
    height?: number,
    width?: number,
    margin?: IMargin
}

export class IVisualizationOptions implements IVisualizationOptionsArg {
    height: number;
    width: number;
    margin: IMargin;

    constructor(vizOptions: IVisualizationOptionsArg = {}) {
        this.height = vizOptions.height ? vizOptions.height : 500;
        this.width = vizOptions.width ? vizOptions.width: 1000;
        this.margin = vizOptions.margin ? vizOptions.margin : {
            top: 30,
            right: 80,
            bottom: 20,
            left: 80
        }
    }
}

export interface IDataPoint {}

export abstract class SteelCloud3DViz {
    protected data: IDataPoint[];
    public abstract getVisualization() : HTMLDivElement;
    public abstract updateData(data: IDataPoint[]): void;
    protected visualization: HTMLDivElement;
}

export interface IMargin {
    top: number,
    bottom: number,
    left: number, 
    right: number
}