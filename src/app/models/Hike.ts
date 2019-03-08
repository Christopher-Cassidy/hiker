export class Hike {
    public id: string;
    public title: string;
    public description: string;
    public stages: number;
    public mapData: any;
    public distance: number;
    public altitudeGain: number;
    public altitudeLoss: number;
    public difficulty: number;
}

export let HIKES: Hike[] = [
    {
        id: "1234",
        title: "Mahlerweg",
        description: "Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, ",
        stages: 5,
        mapData: null,
        distance: 150,
        altitudeGain: 800,
        altitudeLoss: 400,
        difficulty: 4.5
    },
    {
        id: "4321",
        title: "Wilsons",
        description: "Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, ",
        stages: 5,
        mapData: null,
        distance: 150,
        altitudeGain: 800,
        altitudeLoss: 400,
        difficulty: 4.5
    },
    {
        id: "8765",
        title: "Grampians",
        description: "Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, Lorem ipsum delorem ignorem, ",
        stages: 5,
        mapData: null,
        distance: 150,
        altitudeGain: 800,
        altitudeLoss: 400,
        difficulty: 4.5
    },
];
