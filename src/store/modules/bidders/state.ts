export class BidderState {
  public podList: Pods = {};
  public machines: Machines = {};

}

export interface Pods {
  [key: string]: PodDetails
}

export interface PodDetails {
  name: string
  status: STATUS_FLAG
  machines: string[]
}

export interface Machines {
  [key: string]: Machine
}

export interface Machine {
  hostName: string;
  overallStatus: STATUS_FLAG;
  summary: Summary
}

export type Summary = {
  [key in STATUS_FLAG]: FlagReasons;
}

export interface FlagReasons {
  name: string;
  summary: string;
  url: string
}

export enum STATUS_FLAG {
  GREY_FLAG = "GREY_FLAG",
  GREEN_FLAG = "GREEN_FLAG",
  YELLOW_FLAG = "YELLOW_FLAG",
  RED_FLAG = "RED_FLAG"
}
