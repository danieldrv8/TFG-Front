import { Site } from "./site";

export interface Room {
    name: string;
    sites: Site[];
    temp: number;
}
