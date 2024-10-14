import { ResourceType } from '..';
import { envs } from '../../config';

export class BaseUrlBuilder {
  static build(resourceType: ResourceType, customPart?: string): string {
    const baseUrl = `${envs.WEBSERVICE_URL}/${resourceType}`;
    return customPart ? `${baseUrl}/${customPart}` : baseUrl;
  }
}
