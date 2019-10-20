import React from 'react';
import { useLDflexValue } from '@solid/react'
import { namedNode } from '@rdfjs/data-model';
import claims from '../../claims.json'
import data from '@solid/query-ldflex';
import {createDocument} from '../../utils/ldflex-helper'

window.data = data

export default () => {
  const install = async () => {
    const webId = (await data.user).value
    const root = new URL("/beliefs/", webId)
    for (var slug in claims) {
      createDocument(
        (new URL(slug, root)).toString(),
        claims[slug]
      )
    }
    //console.log(new URL("/beliefs", webId).toString())

    //console.log(namedNode(new URL("/beliefs", webId).toString()))
    //await data.user.hasBeliefs.set(namedNode(new URL("/beliefs", webId).toString()))
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
