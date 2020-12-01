/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LazyLoad from 'react-lazyload'

import LazierImage from './LazierImage'

const useStyles = makeStyles(() => ({
  imageWrapper: {
    position: 'relative',
    width: '100%',
    cursor: 'zoom-in',
  },
  '@keyframes scale-up': {
    '0%': {
      transform: 'scale(0)',
    },
    '50%': {
      transform: 'scale(0.5)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },

  placeholder: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    animation: '$loading-animation 2s infinite',
  },

  styledImage: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  '@keyframes loading-animation': {
    '0%': {
      transform: 'scale(1)',
      backgroundColor: '#fff',
    },
    '50%': {
      transform: 'scale(0.9)',
      backgroundColor: '#ccc',
    },
    '100%': {
      transform: 'scale(1)',
      backgroundColor: '#fff',

    },
  },
}), { name: 'LazyImage' })

const LazyImage = ({ src, alt, handleImgClick }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.imageWrapper}
      onClick={() => handleImgClick(src, alt)}
    >
      <LazyLoad unmountIfInvisible>
        <LazierImage
          className="demo"
          aspectRatio={5 / 4}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </div>
  )
}

export default LazyImage
