import { Session } from "./session";

export class Center {
    center_id!: number;
    name!: string;
    district_name!: string;
    block_name!: string;
    address!: string;
    state_name!: string;
    fee_type!: string;
    from!: string;
    to!: string;
    lat!: string;
    long!: string;
    pincode!: string;
    sessions!: Session[];
}