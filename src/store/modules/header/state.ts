export class State {
  public headerNames : string[];
  public subHeaderNames : SubHeaderName[] = []
}

export interface SubHeaderName {
  name : string
  action : string
}
