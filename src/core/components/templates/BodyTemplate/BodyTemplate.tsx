import { IBodyTemplate } from '@app-dtw/interfaces/core/components/templates';
import { CContainer } from '@coreui/react';

export const BodyTemplate: IBodyTemplate = ({ children }) => {
  return (
    <CContainer className="BodyTemplate" fluid>
      {children}
    </CContainer>
  );
};
