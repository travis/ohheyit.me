import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BeliefWrapper,
  BeliefCard,
  BeliefDetail
} from './belief.style';

/**
 * Belief Page UI component, containing the styled components for the Belief Page
 * @param props
 */
export const BeliefPageContent = props => {
  const { name, belief } = props;
  const { t } = useTranslation();
  return (
    <BeliefWrapper data-testid="belief-wrapper">
      <BeliefCard className="card">
        <BeliefDetail data-testid="belief-detail">
          <h3>
            {t('belief.intro', {name, belief})}
          </h3>
        </BeliefDetail>
      </BeliefCard>
    </BeliefWrapper>
  );
};
