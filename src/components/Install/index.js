import React from 'react';
import { useLDflexValue } from '@solid/react'
import { namedNode } from '@rdfjs/data-model';

import data from '@solid/query-ldflex';

window.data = data

export default () => {
  const install = async () => {
    const webId = (await data.user).value
    await data.user.hasBeliefs.set(namedNode(new URL("/beliefs", webId).toString()))
  }
  const installedLd = useLDflexValue(`user.hasBeliefs`)
  const installed = installedLd && installedLd.value
  return (<button onClick={install}>Install</button>)
/*  if (!installed) {
    return
  } else {
    return "INSTALLED!"
  }*/
}
