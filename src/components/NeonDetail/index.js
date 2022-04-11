import React from 'react'
import Icon from '../../images/icon-dice.svg'
import styles from "../../styles/components/NeonDetail.module.css"

export default function NeaonDetail() {
  return (
    <div className={styles.neon_dedtails} >
        <span className={styles.neon_dedtailswrapper}>
            <img src={Icon} alt="icon" />
        </span>
    </div>
  )
}
