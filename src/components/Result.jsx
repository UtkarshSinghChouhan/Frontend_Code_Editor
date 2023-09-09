import React, { useEffect, useState } from 'react'
import {Box} from "@mui/material"

import { useGlobalContext } from '../context/DataProvider'

const Result = () => {

  const {html, css, js} = useGlobalContext()
  const [src, setSrc] = useState('');

  const srcCode = `
    <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `

  useEffect(() => {
    const id = setTimeout(() => {
      setSrc(srcCode)
    }, 1000)

    return(() => {
      clearTimeout(id);
    })

  }, [html, css, js])

  return (
    <Box height='41vh'>
      <iframe 
        srcDoc={src} 
        frameBorder="0"
        title='output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />

      
    </Box>
  )
}
 
export default Result