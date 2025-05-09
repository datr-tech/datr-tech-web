import { IHeaderTemplate } from '@app-dtw/interfaces/core/components/templates';
import { CContainer } from '@coreui/react';

export const HeaderTemplate: IHeaderTemplate = ({ children }) => {
  return (
    <CContainer className="HeaderTemplate" fluid>
      {children}
    </CContainer>
  );
};
