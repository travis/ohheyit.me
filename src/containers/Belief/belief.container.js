import React, { useState, useEffect } from 'react';
import { LiveUpdate, useNotification } from '@inrupt/solid-react-components';
import { withRouter } from 'react-router-dom';
import { BeliefPageContent } from './belief.component';
import { useLDflexValue, useLDflexList } from '@solid/react'
import slug2WebId from '../../slug2WebId'
import { ldflexHelper, storageHelper, errorToaster } from '@utils';
import { useTranslation } from 'react-i18next';
import ldflex from '@solid/query-ldflex';
import { namedNode } from '@rdfjs/data-model';

window.ld = ldflexHelper
window.ldflex = ldflex
window.namedNode = namedNode

const title = "https://ohhey.fyi/thisisa/belief/title"



const Belief = ({name, beliefs, beliefSlug}) => {
  const beliefUrl = `${beliefs}${beliefSlug}`
  const beliefLd = useLDflexValue(`from(['${beliefs}', '${beliefUrl}'])['${beliefUrl}']['${title}']`)
  const belief = beliefLd && beliefLd.value
  console.log("B", belief)

  return (
    <BeliefPageContent {...{ name, belief }} />
  )
}

const Beliefs = ({beliefsPath}) => {
  const beliefsLd = useLDflexList(`[${beliefsPath}]`)

  return (
    <>
      {title && title.value}
      {beliefsLd && beliefsLd.map(belief => console.log(belief) || belief.toString())}
    </>
  )
}

/**
 * Container component for the Belief Page, containing example of how to fetch data from a POD
 */
export const BeliefComponent = withRouter(({ match: { params: { slug, beliefSlug } } }) => {
  const webId = slug2WebId(slug) || slug;

  const [itmePath, setItmePath] = useState(null);
  const { createNotification, createInbox, notifications, notification } = useNotification(webId);
  const { t } = useTranslation();

  const init = async () => {
    try {
      const itmeUrl = await storageHelper.getAppStorage(webId);
      const itmePath = await ldflexHelper.createContainer(itmeUrl);
      console.log(`initializing ${itmePath}`)
      if (itmePath) {
        await createInbox(`${itmePath}inbox/`, itmePath);
        setItmePath(itmePath);
      }
    } catch (e) {
      console.log(`error initializing ${itmePath}`, e)
      /**
       * Check if something fails when we try to create a inbox
       * and show user a possible solution
       */
      if (e.name === 'Inbox Error') {
        return errorToaster(e.message, 'Error', {
          label: t('errorCreateInbox.link.label'),
          href: t('errorCreateInbox.link.href')
        });
      }

      errorToaster(e.message, 'Error');
    }
  }

/*  useEffect(() => {
    if (webId && notification.notify) init();
  }, [webId, notification.notify]);
*/
  const [beliefsPath, setBeliefsPath] = useState(null);
  const initBeliefs = async () => {
    try {
      const beliefsUrl = `${await storageHelper.getAppStorage(webId)}beliefs/`;
      console.log(`initializing ${beliefsUrl}`)
      const bp = await ldflexHelper.createContainer(beliefsUrl);
      setBeliefsPath(bp)
      console.log(`initialized ${bp}`)
    } catch (e) {
      console.log("error initializing beliefs path: ", e)
      errorToaster(e.message, 'Error');
    }
  }

  useEffect(() => {
    if (webId) initBeliefs();
  }, [webId]);


  const nameLd = useLDflexValue(`[${webId}].vcard_fn`)
  const name = nameLd && nameLd.value

  return beliefsPath ? <Beliefs beliefsPath={beliefsPath}/> : "Loading!"

/*  return beliefs ? (
    <Belief {...{ name, beliefs: beliefsPath, beliefSlug }} />
  ) : (
    "Loading..."
  )*/
})
