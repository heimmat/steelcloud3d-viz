//Exportiere eine Schnittstelle für Visualisierungsoptionen, deren Felder alle optional sind
export interface IVisualizationOptionsArg {
    height?: number,
    width?: number,
    margin?: IMargin
}

//Exportiere eine Klasse für Visualisierungsoptionen, die obige Schnittstelle entgegennimmt und für fehlende Werte Standardwerte einsetzt.
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

//Exportiere eine leere Schnittstelle zur Verwendung in der abstrakten Klasse unten
export interface IDataPoint {}

//Exportiere eine abstrakte Klasse zur Visualisierung. 
export abstract class SteelCloud3DViz {
    protected data: IDataPoint[];
    public abstract getVisualization() : HTMLDivElement;
    public abstract updateData(data: IDataPoint[]): void;
    protected visualization: HTMLDivElement;
}

//Exportiere eine Schnittstelle, die die Margins für Visualisierungsoptionen enthält
export interface IMargin {
    top: number,
    bottom: number,
    left: number, 
    right: number
}