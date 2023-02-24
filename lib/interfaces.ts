import { BaseModel, Record } from 'pocketbase';

interface SponsorInterface extends Record {
    name: string;
    image: string;
}

interface ScheduleInterface extends Record {
    name: string;
    description: string;
    start_datetime: Date;
    end_datetime: Date;
}

interface MusikgesellschaftInterface extends Record {
    name: string;
    description: string;
    image: string;
    start_datetime: Date;
    end_datetime: Date;
}
export type {
    SponsorInterface,
    ScheduleInterface,
    MusikgesellschaftInterface,
};
