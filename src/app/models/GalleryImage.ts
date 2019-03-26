import { Entity } from "./Entity";

export interface GalleryImage extends Entity {
    title: string;
    description: string;
    url: string;
    attribution: string;    
}
