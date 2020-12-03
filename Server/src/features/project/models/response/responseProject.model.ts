import {FeatureModel} from '../../interface/feature.interface'

export interface ResponseProjectModel {
    title: string;
    description: string;
    features: Array<FeatureModel>;
    rate: number; 
}
