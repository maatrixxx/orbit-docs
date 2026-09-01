import React from 'react'
import { useLocation } from '@docusaurus/router'
import LocaleDropdownNavbarItem from '@theme-original/NavbarItem/LocaleDropdownNavbarItem'

// Only show the language switcher on Guide pages
export default function LocaleDropdownNavbarItemWrapper(props) {
  const { pathname } = useLocation()
  if (!pathname.includes('/guide') && !pathname.includes('/beginner')) {
    return null
  }
  return <LocaleDropdownNavbarItem {...props} />
}
