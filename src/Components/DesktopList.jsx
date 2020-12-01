import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LazyImage from './Common/LazyImage'
import Modal from './Modal'

const IMAGE_MAX_SIZE = 380

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    display: 'grid',
    padding: 16,
    overflow: 'auto',
    gridGap: 16,
  },
}), { name: 'DesktopList' })

export default function DesktopList(props) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [imgData, setImg] = useState(null)

  const { size: { width } } = props
  const gridTemplateColumns = '1fr '.repeat(Math.floor(width / IMAGE_MAX_SIZE))

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
  }, [])

  const handleImgClick = (src, alt) => {
    setImg({ src, alt })
    setOpen(true)
  }

  return (
    <div className={classes.root}>
      <div
        className={classes.grid}
        style={{
          width,
          gridTemplateColumns,
        }}
      >
        {data.map((tile) => (
          <LazyImage
            handleImgClick={handleImgClick}
            key={tile.url}
            src={tile.download_url}
            alt={tile.title}
          />
        ))}
      </div>
      {imgData && open && <Modal open={open} handleClose={() => setOpen(false)} imgData={imgData} />}
    </div>
  )
}
