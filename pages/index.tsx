import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'

const Home: NextPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1440px)'
  })
  const [idx, setIdx]  = useState(0)
  const data = [
    {text:"click hEre", pos:['50%',isDesktopOrLaptop?'35%':'45%']},
    {text:"nothing,\r\nbut\r\ntry once again", pos:['20%','50%']},
    {text:"try here", pos:['80%','65%']},
    {text:"do not click", pos:['35%','65%']},
  ]

  const handleData = () => {
    setIdx(idx+1)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>toadZterZ</title>
        <meta name="description" content="toadZterZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.logo}>
              <Image src="/assets/logo.svg" alt="Vercel Logo" width={206} height={126} />
            </div>
          </a>

        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerRightInner}>
            <div className={styles.containerButtonSvg}>
              <a className={styles.buttonSvg}>
                <svg className={styles.svg} width="272" height="62" viewBox="0 0 272 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3142 59.3359C29.733 59.2663 41.0617 61.324 52.5106 61.324C64.3998 61.324 75.8886 62.666 87.7978 61.5825C93.0919 61.1053 98.416 60.7673 103.7 60.1809C109.354 59.5546 114.709 59.9025 120.373 59.7037C131.962 59.3061 143.601 57.805 155.16 56.8805C166.979 55.8865 178.788 54.6538 190.647 54.4252C195.721 54.3158 200.655 54.9421 205.659 55.3199C211.663 55.7672 217.618 54.7532 223.593 54.3258C228.897 53.9977 233.881 53.0534 239.225 53.7095C243.698 54.2661 248.102 55.2702 252.615 55.5883C258.62 56.0058 265.625 55.9461 268.447 49.8127C269.835 46.6907 270.417 43.2738 270.139 39.872C269.928 34.6433 272.55 29.7524 271.9 24.5435C270.849 16.2132 263.153 10.5669 256.068 7.38592C247.149 3.27938 237.552 0.820375 227.746 0.129223C216.617 -0.556684 205.479 0.66602 194.35 0.596435C182.821 0.516909 171.412 0.596435 159.903 1.06365C148.705 1.5408 137.356 3.73769 126.177 3.49911C114.178 3.32018 102.299 0.994062 90.2897 0.725664C85.1458 0.606376 80.0018 0.725664 74.8478 0.725664C70.0541 0.626257 65.1804 0.0496977 60.4267 1.07359C54.8824 2.25653 49.8885 4.97033 44.2542 5.9644C37.8966 7.0347 31.4667 7.6262 25.0193 7.73384C17.8538 7.92271 6.49504 8.13147 3.0724 15.6864C-0.930691 24.633 -0.330228 34.7427 1.14091 44.1764C2.2918 51.7412 10.5782 58.65 18.3142 58.3418C20.2457 58.2722 20.2557 55.29 18.3142 55.3596C13.3203 55.5485 8.00621 51.8009 5.48426 47.7152C3.37263 44.1167 3.56278 38.6394 3.00235 34.5339C2.44191 30.4284 3.38264 24.3447 4.54354 20.3983C6.19481 14.752 9.5474 12.7141 15.2418 11.5908C23.8584 9.89097 32.8554 10.7459 41.5621 9.44364C50.6892 8.07182 58.9155 3.29036 68.2227 3.47923C77.8401 3.65816 87.5276 3.40965 97.125 4.05579C107.083 4.69199 117.09 6.5012 127.098 6.56084C137.106 6.62048 147.014 4.68205 156.951 4.2546C166.889 3.82715 176.807 3.40965 186.774 3.55876C206.489 3.8371 226.925 0.576553 245.99 6.78948C254.927 9.71204 268.707 14.8116 269.008 26.1738C269.128 30.5875 267.006 34.6234 267.086 39.0967C267.166 43.57 267.226 49.8326 262.242 52.0196C255.667 54.8725 246.08 51.612 239.435 50.7869C230.338 49.6636 220.981 51.781 211.894 52.4072C207.49 52.6955 203.197 52.0295 198.824 51.6617C193.799 51.3237 188.757 51.3237 183.732 51.6617C173.194 52.1885 162.716 53.292 152.188 54.1071C141.079 54.9819 129.73 56.7911 118.582 56.7314C107.903 56.6718 97.5654 57.7255 86.8571 58.7196C75.2782 59.7136 64.0695 58.3816 52.5106 58.3716C40.9516 58.3617 29.733 56.3239 18.3142 56.3835C17.916 56.3835 17.5342 56.5406 17.2527 56.8202C16.9712 57.0999 16.813 57.4791 16.813 57.8746C16.813 58.2701 16.9712 58.6493 17.2527 58.929C17.5342 59.2086 17.916 59.3657 18.3142 59.3657V59.3359Z" fill="white"/>
                </svg>
                <p style={{
                  margin:0,
                  padding:'1rem',
                  position:'relative',
                  left:'50%',
                  transform:'translateX(-50%)'
                  }}>get a toadz</p>
              </a>
            </div>
            <div className={styles.containerButton}>
              <button className={styles.button} type="button">magic eden</button>
              <button className={styles.button} type="button">open sea</button>
            </div>
          </div>

          <a href="/" className={styles.twitterAct}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.9024 12.8185C33.9246 13.1317 33.9246 13.445 33.9246 13.7582C33.9246 23.311 26.707 34.3182 13.5153 34.3182C9.45115 34.3182 5.67578 33.1324 2.5 31.0743C3.07743 31.1413 3.63258 31.1637 4.23223 31.1637C7.58562 31.1637 10.6726 30.0228 13.1377 28.0764C9.98415 28.0092 7.34137 25.9286 6.43082 23.065C6.87502 23.1321 7.31915 23.1768 7.78557 23.1768C8.42958 23.1768 9.07367 23.0873 9.67325 22.9308C6.38645 22.2596 3.92127 19.3512 3.92127 15.8388V15.7493C4.87618 16.2863 5.98668 16.6218 7.16363 16.6665C5.23151 15.3689 3.9657 13.1541 3.9657 10.6484C3.9657 9.30609 4.32096 8.07562 4.94283 7.00175C8.47395 11.3867 13.7817 14.2503 19.7335 14.5635C19.6224 14.0266 19.5558 13.4674 19.5558 12.908C19.5558 8.92575 22.7538 5.68182 26.729 5.68182C28.7944 5.68182 30.6599 6.55434 31.9702 7.96378C33.5913 7.65059 35.1459 7.04651 36.5229 6.21876C35.9898 7.89671 34.8572 9.30616 33.3693 10.201C34.8129 10.0445 36.212 9.64166 37.5 9.08242C36.523 10.5142 35.3015 11.7893 33.9024 12.8185Z" fill="white"/>
            </svg>
          </a>

        </div>
      </header>
      <main className={styles.main}>
        {idx<4&& 
        <>
          <h1 className={styles.title}>
          welcomE toadz,
          </h1>
          <div
            className={styles.code}
            style={{left:data[idx].pos[0],top:data[idx].pos[1]}}
            onClick={handleData}
            >
              <pre>
              {data[idx].text}
              </pre>
          </div>
        </>}

      </main>

      <div className={styles.flies}>
        <Image src="/assets/art-1-1.svg" alt="Vercel Logo" width={121} height={113} className={styles.img_flies}/>
      </div>
      <div className={styles.leaf}>
        <Image src="/assets/art-4-1.svg" alt="Vercel Logo" width={367} height={580} className={styles.img_leaf}/>
      </div>
      <div className={styles.butterfly}>
        <Image src="/assets/art-3-1.svg" alt="Vercel Logo" width={133} height={122} className={styles.img_butterfly}/>
      </div>
      <div className={styles.frog}>
        <Image src="/assets/art-2-1.svg" alt="Vercel Logo" width={195} height={300} className={styles.img_frog}/>
      </div>
      <div className={cn(styles.dummyArt, idx===4&&styles.dummyArtShow)}>
        <img src="/assets/dummy-art.png" alt="Vercel Logo" height={'80%'}/>
      </div>

    </div>
  )
}

export default Home
