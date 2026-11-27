export interface GolfCourse {
    id: number;
    name: string;
    city: string;
    region: Region;
    holes: number;
    par: number;
    rating: number;
    address: string;
    lat: number;
    lng: number;
}


export type Region = 'North' | 'South' | 'East' | 'West';