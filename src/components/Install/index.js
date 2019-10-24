import React from 'react';
import { useLDflexValue } from '@solid/react'
import { namedNode } from '@rdfjs/data-model';
import claims from '../../claims.json'
import sources from '../../sources.json'
import data from '@solid/query-ldflex';
import {createDocument, deleteFile} from '../../utils/ldflex-helper'
import { ldflexHelper, storageHelper, errorToaster } from '@utils';

window.data = data

export default () => {
  const install = async () => {
    const webId = (await data.user).value
//    console.log(sources)
    //deleteFile(new URL("/public/ohhey/concepts/sources", webId))
    createDocument(
      (new URL("/public/ohhey/sources", webId)).toString(),
      sources
    )
    const root = new URL("/public/ohhey/concepts/", webId)
    for (var slug in claims) {
      //      console.log(slug, claims[slug])
      //deleteFile(new URL(slug, root))
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
