import React, {useState} from 'react';
import { useLDflexValue } from '@solid/react'
import { useTranslation } from 'react-i18next';
import {
  BeliefWrapper,
  BeliefCard,
  BeliefDetail,
  BeliefName,
  BeliefImage
} from './belief.style';

/**
 * Belief Page UI component, containing the styled components for the Belief Page
 * @param props
 */
export const BeliefPageContent = props => {
  const { webId, image, name, friends } = props;
  const { t } = useTranslation();
  const belief = ""
  return (
    <BeliefWrapper data-testid="belief-wrapper">
      <BeliefCard className="card">
        <BeliefDetail data-testid="belief-detail">
          <h3>
            {t('belief.intro', {name, belief})} <BeliefName>{belief}</BeliefName>
          </h3>
        </BeliefDetail>
      </BeliefCard>
    </BeliefWrapper>
  );
};
