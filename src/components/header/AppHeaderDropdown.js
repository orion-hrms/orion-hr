import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src="https://toppng.com/uploads/preview/person-icon-white-icon-11553393970jgwtmsc59i.png"
          size="md"
        />
        {/* <CIcon icon="cil-people" customClassName="nav-icon" /> */}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        {/* <CDropdownItem href="#">
          <CIcon icon="cil-bell" className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            2
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon="cil-envelope-open" className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            1
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon="cil-user" className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon="cil-settings" className="me-2" />
          Settings
        </CDropdownItem> */}

        <CDropdownDivider />
        <CDropdownItem href="#">
          <AmplifySignOut />
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
