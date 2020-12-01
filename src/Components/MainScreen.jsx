import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import useWindowSize from '../hooks/useWindowSize'
import DesktopList from './DesktopList'
import theme from '../lib/theme'

export default () => {
  const size = useWindowSize()
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <DesktopList size={size} />
      </div>
    </MuiThemeProvider>
  )
}
