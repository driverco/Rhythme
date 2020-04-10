import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'
import { useTranslation } from 'react-i18next';


export const Home: React.FC = () => {
  const {t, i18n} = useTranslation();
  return (
    <Fragment>
      <h1>{t('home.welcomeTitle')}</h1>
      <p>
        {t('home.welcomeText')}
      </p>
      <Counter />
    </Fragment>
  )
}
