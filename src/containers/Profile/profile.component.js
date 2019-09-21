import React, {useState} from 'react';
import { Uploader } from '@inrupt/solid-react-components';
import { useLDflexValue, useLDflexList, LiveUpdate } from '@solid/react'
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

const AddRelationshipButton = ({
  add, del, exists, addContent, deleteContent, existsContent
}) => {
  const [hover, setHover] = useState(false)
  if (exists) {
    return <button onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)}
                   onClick={del}>{hover ? deleteContent : existsContent}</button>
  } else {
    return <button onClick={add}>{addContent}</button>
  }
}

const Friend = ({webId}) => {
  const nameLd = useLDflexValue(`[${webId}].vcard_fn`)

  return (<div>{nameLd && nameLd.value}</div>)
}

/**
 * Profile Page UI component, containing the styled components for the Profile Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const ProfilePageContent = props => {
  const { webId, image, name, friends, currentUserFriends, addFriend, deleteFriend } = props;
  const { t } = useTranslation();

  const areWeFriends = currentUserFriends.find(n => n == webId)

  return (
    <ProfileWrapper data-testid="profile-wrapper">
      <ProfileCard className="card">
        <ProfileDetail data-testid="profile-detail">
          <h3>
            {t('profile.intro')} <ProfileName>{name}</ProfileName>
          </h3>
          <ProfileImage src={image}/>
          {currentUserFriends &&
           <AddRelationshipButton add={addFriend} del={deleteFriend}
                                  exists={areWeFriends}
                                  addContent={`I know ${name}`}
                                  deleteContent={`I don't know ${name}`}
                                  existsContent={`You know ${name}`}/>
          }
          <h3>Friends</h3>
          {friends && friends.map(friend => <Friend key={friend.value}
                                                    webId={friend.value}/>)}
        </ProfileDetail>
      </ProfileCard>
    </ProfileWrapper>
  );
};
