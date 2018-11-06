import { Border, borderClass } from './border';
import { Margin, marginClass } from './margin';
import { Padding, paddingClass } from './padding';

export const boxModelClass = {
    ...borderClass,
    ...marginClass,
    ...paddingClass,
};
export interface BoxModel {
    border?: Border;
    margin?: Margin;
    padding?: Padding;
};