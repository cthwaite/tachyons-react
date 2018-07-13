import { borderPropType, borderClass } from './border';
import { marginPropType, marginClass } from './margin';
import { paddingPropType, paddingClass } from './padding';

export const boxModelClass = {
    ...borderClass,
    ...marginClass,
    ...paddingClass,
};
export const boxModelPropType = {
    ...borderPropType,
    ...marginPropType,
    ...paddingPropType,
};