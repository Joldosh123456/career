import React from 'react'
import scss from "./TopCompaniesCard.module.scss"
import {useTranslation} from 'react-i18next'

function TopCompaniesCard({compLogo, jobs, nameComp}) {
  const {t} = useTranslation()
  return (
    <div className={scss.companyCard}>
        <img src={compLogo} alt="" />
        <p>{t(jobs)}</p>  
        <h4>{nameComp}</h4>
    </div>
  )
}

export default TopCompaniesCard