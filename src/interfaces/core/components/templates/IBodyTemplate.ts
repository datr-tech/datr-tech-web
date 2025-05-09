import { IBodyTemplateOutput } from './IBodyTemplateOutput';
import { IBodyTemplateProps } from './IBodyTemplateProps';

export interface IBodyTemplate {
  (props: IBodyTemplateProps): IBodyTemplateOutput;
}
