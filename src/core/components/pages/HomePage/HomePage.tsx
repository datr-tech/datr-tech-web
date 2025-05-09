import {
  BodyTemplate,
  FooterTemplate,
  HeaderTemplate,
} from '@app-dtw/core/components/templates';
import { IHomePage } from '@app-dtw/interfaces/core/components/pages';
import { CContainer } from '@coreui/react';

export const HomePage: IHomePage = () => {
  return (
    <CContainer fluid className="HomePage">
      <HeaderTemplate>
        <span>Header</span>
      </HeaderTemplate>
      <BodyTemplate>
        <span>datr.tech - UNDER DEVELOPMENT</span>
      </BodyTemplate>
      <FooterTemplate>
        <span>Footer</span>
      </FooterTemplate>
    </CContainer>
  );
};
