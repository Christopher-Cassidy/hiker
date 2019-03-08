export class HikeSection {
    id: string;
    title: string;
    description: string;
    nextStages: Array<string>;
    previousStages: Array<string>;
    mapData: any;
    distance: number;
    altitudeGain: number;
    altitudeLoss: number;
    difficulty: number;
}
