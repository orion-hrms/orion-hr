import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Auth } from "aws-amplify";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log("In appSidebar")
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    if (groups != undefined && groups.includes("Administrator")) {
      setAdmin(true);
    }
    console.log("Is this Admin?", admin)
  };

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch({ type: 'set', sidebarShow: false })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        ORION HRMS
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <CCreateNavItem items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)