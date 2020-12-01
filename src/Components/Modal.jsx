import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import { Container } from '@material-ui/core'
import LazierImage from './Common/LazierImage'

const useStyles = makeStyles(() => ({
  appBar: {
    // position: 'relative',
    background: 'aliceblue',
    color: 'black',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  paper: {
    background: 'radial-gradient(black, transparent)',
  },
}), { name: 'Modal' })

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

export default function Modal(props) {
  const classes = useStyles()
  const {
    open, handleClose, imgData,
  } = props

  const {
    src, alt,
  } = imgData

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className={classes.paper}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <LazierImage
          className="modalImage demo"
          aspectRatio={5 / 4}
          src={src}
          alt={alt}
        />
      </Container>
    </Dialog>
  )
}
