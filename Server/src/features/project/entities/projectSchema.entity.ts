//Vendors
import { Document, model, Schema } from 'mongoose';
import { Project } from '../interface/project.interface';

const projectSchema = new Schema<Project>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  estimate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

interface projectSchemaEntityModel extends Project, Document {}

export default model<projectSchemaEntityModel>('Projects', projectSchema);
