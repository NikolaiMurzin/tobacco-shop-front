/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const MainLayout = ({ children }) => { 
  let backgroundStyle = css`
        background: linear-gradient(0deg, rgba(0,61,153,1) 0%, rgba(0,101,253,1) 30%, rgba(0,34,85,1) 63%, rgba(0,0,0,1) 78%);
        position: fixed;
        z-index: -1;
        width: 100vw;
        height: 100vh;
  `
  let layoutStyle = css`
        max-width: 1300px;
        min-height: 100vh;
        padding-left: 29px;
        padding-right: 29px;
        margin: 0 auto;
  `
  return (
      <div css={css`overflow-x: hidden`}>
      <div css={backgroundStyle}></div>
          <main css={layoutStyle}>{children}</main>
      </div>
  )
}

export default MainLayout
