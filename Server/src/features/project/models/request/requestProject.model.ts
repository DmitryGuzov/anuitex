import { FeatureModel } from '../../interface/feature.interface';
export interface RequestProjectModel {
  title: string;
  description: string;
  features: Array<FeatureModel>;
  estimate: number;
}
