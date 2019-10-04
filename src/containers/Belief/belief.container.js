import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '@solid/query-ldflex';
import { namedNode } from '@rdfjs/data-model';
import { BeliefPageContent } from './belief.component';
import { successToaster, errorToaster } from '@utils';
import { useLDflexValue, useLDflexList } from '@solid/react'
import slug2WebId from '../../slug2WebId'

window.data = data

/**
 * Container component for the Belief Page, containing example of how to fetch data from a POD
 */
export const BeliefComponent = withRouter(({ match: { params: { slug, beliefSlug } } }) => {
  console.log(slug)
  console.log(beliefSlug)
  console.log(slug2WebId(slug))
  const webId = slug2WebId(slug) || slug;
  const beliefsLd = useLDflexValue(`[${webId}].hasBeliefs`)
  const beliefs = beliefsLd && beliefsLd.value
  const belief = useLDflexValue(`[${beliefs}/${beliefSlug}]`)
  console.log(`BEEEE ${belief}`)

  const nameLd = useLDflexValue(`[${webId}].vcard_fn`)
  const name = nameLd && nameLd.value
  return (
    <BeliefPageContent {...{ name }} />
  );
})
