import { NavBrandAtom } from '@app-dtw/core/components/atoms';
import { NavProductsDropDownMolecule, NavPackagesDropDownMolecule } from '@app-dtw/core/components/molecules';
import { CContainer, CNavbar, CNavItem, CNavLink, CNavbarText } from '@coreui/react';

export const HeaderNavOrganism = () => {
  return (
    <CNavbar className="bg-body-tertiary HeaderNavOrganism" placement="sticky-top">
      <CContainer fluid>
        <NavBrandAtom />
				<CNavbarText>|</CNavbarText>
        <NavProductsDropDownMolecule />
				<CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
				<CNavItem>
          <CNavLink href="#">Shop</CNavLink>
        </CNavItem>
				<CNavbarText>|</CNavbarText>
				<CNavItem>
          <CNavLink href="#">Docs</CNavLink>
        </CNavItem>
				<CNavbarText>|</CNavbarText>
				<NavPackagesDropDownMolecule />
				<CNavbarText>|</CNavbarText>
				<CNavItem>
          <CNavLink href="#">Login</CNavLink>
        </CNavItem>
      </CContainer>
    </CNavbar>
  );
};
