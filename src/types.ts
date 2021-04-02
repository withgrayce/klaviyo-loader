type ValueType = string | boolean | number | string[] | boolean[] | number[];

type IdentifyData = ['identify', { [key: string]: ValueType }];

type TrackData = ['track', string, { [key: string]: ValueType }];

type PushData = IdentifyData | TrackData;

export declare interface Klaviyo
{
  push: (data: PushData) => void;
}
