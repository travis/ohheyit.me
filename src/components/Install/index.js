import React, {useState} from 'react';
import { useLDflexValue, useLDflexList } from '@solid/react'

import data from '@solid/query-ldflex';


export default ({

}) => {
  const [hover, setHover] = useState(false)

  const install = async () => {
    const webId = (await data.user).value
    await data.user.hasBeliefs.set(new URL("/beliefs", webId).toString())
  }
  const installedLd = useLDflexValue(`user.hasBeliefs`)
  const installed = installedLd && installedLd.value

  if (!installed) {
    return <button onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)}
                   onClick={install}>Install</button>
  } else {
    return "INSTALLED!"
  }
}
