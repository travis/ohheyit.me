import React from 'react';
import { Uploader } from '@inrupt/solid-react-components';
import { FollowButton } from '@solid/react';
import { Trans, useTranslation } from 'react-i18next';
import {
  ProfileWrapper,
  ProfileCard,
  ProfileLogo,
  ProfileProfile,
  ProfileDetail,
  ProfileName,
  ProfileImage
} from './profile.style';
import { ImageProfile } from '@components';
import { errorToaster } from '@utils';

/**
 * Profile Page UI component, containing the styled components for the Profile Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const ProfilePageContent = props => {
  const { webId, image, name } = props;
  const { t } = useTranslation();
  const limit = 2100000;
  return (
    <ProfileWrapper data-testid="profile-wrapper">
      <ProfileCard className="card">
        <ProfileDetail data-testid="profile-detail">
          <h3>
            {t('profile.intro')} <ProfileName>{name}</ProfileName>
          </h3>
          <ProfileImage src={image}/>
          <FollowButton object={webId}>me</FollowButton>
        </ProfileDetail>
      </ProfileCard>
    </ProfileWrapper>
  );
};
