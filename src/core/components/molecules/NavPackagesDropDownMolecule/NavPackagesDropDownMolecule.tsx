import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';

export const NavPackagesDropDownMolecule = () => {
  return (
    <CDropdown variant="nav-item" popper={false}>
      <CDropdownToggle color="secondary">Packages</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">APIs</CDropdownItem>
        <CDropdownItem href="#">Dolomite</CDropdownItem>
        <CDropdownItem href="#">Entity</CDropdownItem>
        <CDropdownItem href="#">Freight</CDropdownItem>
        <CDropdownItem href="#">Granul8</CDropdownItem>
        <CDropdownItem href="#">Leith</CDropdownItem>
        <CDropdownItem href="#">Marble</CDropdownItem>
        <CDropdownItem href="#">Parcel</CDropdownItem>
        <CDropdownItem href="#">Persona</CDropdownItem>
        <CDropdownItem href="#">Proc</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
