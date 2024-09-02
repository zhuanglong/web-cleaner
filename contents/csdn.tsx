import { type PlasmoCSConfig } from "plasmo"
import { cloneElement, useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { addCss } from "~utils/tools"

export const config: PlasmoCSConfig = {
  matches: ["https://*.blog.csdn.net/*"]
}

export default function csdn() {
  const [closeAds] = useStorage<boolean>("csdn-closeAds")
  const [copyCode] = useStorage<boolean>("csdn-copyCode")
  const [closeFollow] = useStorage<boolean>("csdn-closeFollow")
  const [closeLoginModal] = useStorage<boolean>("csdn-closeLoginModal")
  const [closeRightToolBar] = useStorage<boolean>("csdn-closeRightToolBar")
  const [closeBottomToolBar] = useStorage<boolean>("csdn-closeBottomToolBar")

  useEffect(() => {
    closeAds && closeAdsFunc()
    copyCode && copyCodeFunc()
    closeFollow && closeFollowFunc()
    closeLoginModal && closeLoginModalFunc()
    closeRightToolBar && closeRightToolBarFunc()
    closeBottomToolBar && closeBottomToolBarFunc()
  }, [
    closeAds,
    copyCode,
    closeFollow,
    closeLoginModal,
    closeRightToolBar,
    closeBottomToolBar
  ])

  function closeAdsFunc() {
    const cssText = `
      #asideWriteGuide,
      .remuneration-box,
      #remuneration,
      #footerRightAds,
      #TR-4ac9702b-be84-11ee-a301-b7516d250593,
      .programmer1Box,
      #recommendAdBox,
      #dmp_ad_58 {
        display: none !important;
      }
    `
    addCss(cssText)
  }

  function copyCodeFunc() {
    const cssText = `
      #content_views pre,
      #content_views pre code {
        -webkit-touch-callout: auto !important;
        -webkit-user-select: auto !important;
        -khtml-user-select: auto !important;
        -moz-user-select: auto !important;
        -ms-user-select: auto !important;
        user-select: auto !important;
      }
    `
    addCss(cssText)

    const contentViewsEle = document.querySelector("#content_views")
    contentViewsEle.replaceWith(contentViewsEle.cloneNode(true))

    const buttons = document.querySelectorAll<HTMLElement>(".hljs-button")
    buttons.forEach((btn) => {
      btn.dataset.title = "复制"
      btn.setAttribute("onclick", "")
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const target = e.target as HTMLElement
        const preEle = target.closest("pre")
        const codeEle = preEle.querySelector("code")
        navigator.clipboard.writeText(codeEle.innerText)

        target.dataset.title = "复制成功"
        setTimeout(() => {
          target.dataset.title = "复制"
        }, 1000)
      })
    })
  }

  function closeFollowFunc() {
    const readMore = document.querySelector(".btn-readmore")
    if (readMore) {
      const css = `
        #article_content{
          height: auto !important;
        }
        .hide-article-box {
          z-index: -1 !important;
        }`
      addCss(css)
    }
  }

  function closeLoginModalFunc() {
    const observer1 = new MutationObserver(() => {
      const loginEle = document.querySelector<HTMLElement>(
        ".passport-login-container .passport-login-box > img"
      )
      if (loginEle) {
        loginEle.click()
        observer1.disconnect()
      }
    })
    observer1.observe(document.body, { childList: true, subtree: true })

    const observer2 = new MutationObserver(() => {
      const loginEle = document.querySelector<HTMLElement>(
        ".passport-login-tip-container > span"
      )
      if (loginEle) {
        loginEle.click()
        observer2.disconnect()
      }
    })
    observer2.observe(document.body, { childList: true, subtree: true })
  }

  function closeRightToolBarFunc() {
    const cssText = `
      .csdn-side-toolbar  {
        display: none !important;
      }
    `
    addCss(cssText)
  }

  function closeBottomToolBarFunc() {
    const cssText = `
      .more-toolbox-new .left-toolbox {
        position: relative !important;
        left: unset !important;
      }
    `
    addCss(cssText)
  }
}
