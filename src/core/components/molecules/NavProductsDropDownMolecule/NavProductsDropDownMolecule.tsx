import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';

export const NavProductsDropDownMolecule = () => {
  return (
    <CDropdown variant="nav-item" popper={false}>
      <CDropdownToggle color="secondary">Products</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Dolomite</CDropdownItem>
        <CDropdownItem href="#">Entity</CDropdownItem>
        <CDropdownItem href="#">Freight</CDropdownItem>
        <CDropdownItem href="#">Granul8</CDropdownItem>
        <CDropdownItem href="#">Persona</CDropdownItem>
        <CDropdownItem href="#">Proc</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
