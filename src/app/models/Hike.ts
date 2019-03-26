import { GalleryImage } from "./GalleryImage";
import { Entity } from "./Entity";

export class Hike extends Entity {
    public id: string;
    public title: string;
    public description: string;
    public stages: number;
    public mapData: any;
    public distance: number;
    public altitudeGain: number;
    public altitudeLoss: number;
    public difficulty: number;
    public mapDataUrl: string;
    public gallery: GalleryImage[];
}
