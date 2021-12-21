export interface CounterStateI {
  counter: number,
  channelName: string;
}

export const initialState: CounterStateI = {
  counter : 0,
  channelName: 'Tripurari'
}
