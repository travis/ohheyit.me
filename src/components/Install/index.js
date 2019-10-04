import React from 'react';
import { useLDflexValue } from '@solid/react'

import data from '@solid/query-ldflex';


export default () => {
  const install = async () => {
    const webId = (await data.user).value
    await data.user.hasBeliefs.set(new URL("/beliefs", webId).toString())
  }
  const installedLd = useLDflexValue(`user.hasBeliefs`)
  const installed = installedLd && installedLd.value

  if (!installed) {
    return <button onClick={install}>Install</button>
  } else {
    return "INSTALLED!"
  }
}
