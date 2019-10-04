import React from 'react'

import { LiveUpdate } from '@solid/react'

import { BeliefComponent } from './belief.container';

export default () => (
  <LiveUpdate>
    <BeliefComponent/>
  </LiveUpdate>
);
