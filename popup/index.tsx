import React, { useEffect, useState } from "react"

import "~common.scss"

import { sendToContentScript } from "@plasmohq/messaging"

import CSDN from "./CSDN"
import styles from "./index.module.scss"

export default function IndexPopup() {
  const [csdnIsShow, setCsdnIsShow] = useState(false)

  useEffect(() => {
    getIsShow("csdn")
  })

  const setIsShowMap = {
    csdn: setCsdnIsShow
  }

  async function getIsShow(type) {
    const res = await sendToContentScript({ name: `${type}-isShow` })
    res?.isShow && setIsShowMap[type]?.(true)
  }

  return (
    <div className={styles.popup}>
      <h2>Web Cleaner 🎉</h2>
      {csdnIsShow && (
        <>
          <hr />
          <CSDN />
        </>
      )}
      <hr />
      <a href="https://github.com/zhuanglong/web-cleaner" target="_blank">
        使用文档
      </a>
    </div>
  )
}
