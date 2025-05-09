import { IFooterTemplateOutput } from './IFooterTemplateOutput';
import { IFooterTemplateProps } from './IFooterTemplateProps';

export interface IFooterTemplate {
  (props: IFooterTemplateProps): IFooterTemplateOutput;
}
