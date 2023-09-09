import React from 'react'
import Editor from './Editor'
import { Stack } from '@mui/material'
import { useGlobalContext } from '../context/DataProvider'

const Code = () => {

  const{html, setHtml, css, setCss, js, setJs} = useGlobalContext()

  return (
    <>
      <Stack direction='row' sx={{background: "#000"}}>
        <Editor heading="HTML" symbol="/" color="#FF3C41"  value={html} onChange={setHtml} />
        <Editor heading="CSS" symbol="*"  color="#67d0eb" value={css} onChange={setCss} />
        <Editor heading="JS"  symbol="<>" color="#FCD000" value={js} onChange={setJs} />

      </Stack>
    </>
  )
}

export default Code