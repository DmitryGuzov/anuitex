import { FeatureModel } from './feature.interface';

export interface Project {
  title: string;
  description: string;
  features: Array<FeatureModel>;
  estimate: number;
}
