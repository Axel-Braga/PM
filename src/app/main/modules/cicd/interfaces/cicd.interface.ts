import { SmallClient } from "../../clients/interfaces/clients.interface";

export interface CICD {
    name: string;
    client: SmallClient;
    CIStart: Date;
    CIEnd: Date;
    hours: number;
    status: boolean;
}