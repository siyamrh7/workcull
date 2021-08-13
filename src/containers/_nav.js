import React from 'react'
import CIcon from '@coreui/icons-react'
const _nav =  [
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifcations',
    to: '/workcull/notification',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['JOBS']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Find Jobs',
    to: '/workcull/findjobs',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'success',
      text: 'New',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Post New Job',
    to: '/workcull/postjob',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
   
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'My Works',
    route: '/workcull/mytasks',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'My Tasks',
        to: '/workcull/mytasks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Accepted Tasks',
        to: '/workcull/acceptedtasks',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Jobs',
    to: '/workcull/myjobs',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
    
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['PAYMENTS']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Deposite',
    route: '/workcull/withdraw',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Deposite',
        to: '/workcull/deposite',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Deposite History',
        to: '/workcull/depositehistory',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Wallet',
    route: '/workcull/withdraw',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Withdraw',
        to: '/workcull/wallet',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Withdraw History',
        to: '/workcull/wallethistory',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['MORE']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Advertisement',
    to: '/workcull/advertisement',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'success',
      text: 'New',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Play & Earn',
    to: '/workcull/playandearn',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'success',
      text: 'New',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notice board',
    to: '/workcull/noticeboard',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
   
  },

 
 
]

export default _nav
