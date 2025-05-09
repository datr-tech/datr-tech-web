import { HeaderNavOrganism } from '@app-dtw/core/components/organisms';
import {
  BodyTemplate,
  FooterTemplate,
  HeaderTemplate,
} from '@app-dtw/core/components/templates';
import { IHomePage } from '@app-dtw/interfaces/core/components/pages';

export const HomePage: IHomePage = () => {
  return (
    <div className="HomePage">
      <HeaderNavOrganism />
      <HeaderTemplate>
        <span>Banner</span>
      </HeaderTemplate>
      <BodyTemplate>
        <span>datr.tech - UNDER DEVELOPMENT</span>
      </BodyTemplate>
      <FooterTemplate>
        <span>Footer</span>
      </FooterTemplate>
    </div>
  );
};
