import { IHeaderTemplateOutput } from './IHeaderTemplateOutput';
import { IHeaderTemplateProps } from './IHeaderTemplateProps';

export interface IHeaderTemplate {
  (props: IHeaderTemplateProps): IHeaderTemplateOutput;
}
