// Node modules

// Entities
import ProjectSchemaEntityModel from './entities/projectSchema.entity';
// Models
import { ResponseProjectModel } from './models';
import { FeatureModel } from './interface/feature.interface';
import AuthSchemaEntityModel from '../auth/entities/authSchema.entity';
import { ErrorHandler } from '../shared/Errors/ErrorHandler';

export async function create(
  title: string,
  description: string,
  features: Array<FeatureModel>,
  estimate: number,
): Promise<ResponseProjectModel> {
  try {
    const projectCreated = await ProjectSchemaEntityModel.create({
      title,
      description,
      features,
      estimate,
    });
    const responseModel: ResponseProjectModel = {
      title: projectCreated.title,
      description: projectCreated.description,
      features: projectCreated.features,
      estimate: projectCreated.estimate,
    };

    return responseModel;
  } catch (error) {
    throw new ErrorHandler(400, 'something went wrong');
  }
}
export async function getAll() {
  try {
    const projects = await ProjectSchemaEntityModel.find({}).exec();
    return projects;
  } catch (error) {
    throw new ErrorHandler(400, "Projects didn't found");
  }
}
interface obj {
  email: string;
  username: string;
}
export async function allUsers() {
  try {
    const data = await AuthSchemaEntityModel.find({}).exec();
    const users: Array<obj> = data.map((user) => {
      const object: obj = { email: user.email, username: user.username };
      return object;
    });
    return users;
  } catch (error) {
    throw new ErrorHandler(401, "Users didn't found");
  }
}
export async function estimateFeature(id: string, lvl: number, estimate: string) {
  try {
    const project = await ProjectSchemaEntityModel.findOneAndUpdate(
      { _id: id, 'features.lvl': lvl },
      { 'features.$.leadTime': estimate },
    ).exec();
    return project;
  } catch (error) {
    throw new ErrorHandler(401, "Feature is not found, and didn't estimated");
  }
}
export async function getProjectById(id: string) {
  try {
    const project = await ProjectSchemaEntityModel.findById(id);
    return project;
  } catch (error) {
    throw new ErrorHandler(401, 'User did not found');
  }
}
