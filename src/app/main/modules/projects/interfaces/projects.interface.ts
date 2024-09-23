export interface Projects {
    name: string;
    description: string;
    area: string;
    client: string;
    startDate: Date;
    startDateTs?: Date;
    endDate: Date;
    proxDate: Date;
    workStatus: boolean;
    generalStatus: boolean;
    creationDate: Date;
}