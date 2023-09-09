

import React, { useState } from 'react'
import {Box, Stack} from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'



import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Editor = ({heading, symbol, color, value, onChange}) => {

    const [toggle, setToggle] = useState(true)

   const handleChange = (editor, data, value) => {
        onChange(value)
   }

  return (
    <Stack
        flexDirection="column"
        sx={{
            flexGrow: toggle ? 1 : 0,
            p: "0 8px 8px",
            background: "#000",
            height:'50vh'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                background: "#060606",
                color : "#AAAEBC",
                justifyContent : 'space-between',
                fontWeight: 700
            }}
        >
            <Box
                sx={{
                    background: '#1d1e22',
                    display: 'flex',
                    padding: '9px'
                }}
            >
                <Box 
                    component="span" 
                    sx={{
                     background: color,
                     color:"black",
                     display: 'flex',
                     alignItems: "center",
                     width: 20,
                     height: 20, 
                     placeContent: 'center', 
                     borderRadius: 1, 
                     marginRight: '5px', 
                     paddingBottom: '2px'
                    }}
                >
                   {symbol}
                </Box>
                {heading}
            </Box>
            <Box sx={{display:"flex", alignItems: "center", mr:'4px'}} >
                <CloseFullscreenIcon onClick={(() => setToggle(preVal => !preVal))} />
            </Box>
        </Box>

        <CodeMirror
            className='controlled-editor'
            value= {value}
            onBeforeChange={handleChange}
            options={{
                theme: "material",
                lineNumbers: true
            }}
        />
    </Stack>
  )
}

export default Editor