import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '@solid/query-ldflex';
import { namedNode } from '@rdfjs/data-model';
import { BeliefPageContent } from './belief.component';
import { successToaster, errorToaster } from '@utils';
import { useLDflexValue, useLDflexList } from '@solid/react'
import slug2WebId from '../../slug2WebId'

const title = "https://ohhey.fyi/thisisa/belief/title"

const Belief = ({name, beliefs, beliefSlug}) => {
  const beliefLd = useLDflexValue(`[${beliefs}/${beliefSlug}][${title}]`)
  const belief = beliefLd && beliefLd.value


  return (
    <BeliefPageContent {...{ name, belief }} />
  )
}

/**
 * Container component for the Belief Page, containing example of how to fetch data from a POD
 */
export const BeliefComponent = withRouter(({ match: { params: { slug, beliefSlug } } }) => {
  const webId = slug2WebId(slug) || slug;
  const beliefsLd = useLDflexValue(`[${webId}].hasBeliefs`)
  const beliefs = beliefsLd && beliefsLd.value

  const nameLd = useLDflexValue(`[${webId}].vcard_fn`)
  const name = nameLd && nameLd.value
  return beliefs ? (
    <BeliefPageContent {...{ name, beliefs }} />
  ) : (
    "Loading..."
  )
})
