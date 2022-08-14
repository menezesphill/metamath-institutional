import { useState } from 'react'
import Image from 'next/image'

import scroll from './assets/scroll.svg'
import line from './assets/line.svg'

import styles from './styles.module.scss'

const SlideBar = () => {

  const [selected, setSelected] = useState(1)

  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.scroll}>
          <Image src={scroll} alt='scroll' width={10}/>
          <Image src={line} alt='Scroll' width={10}/>
        </div>

        <div className={styles.slideMenu}>
          <div className={styles.columnContainer}> <div className={styles.text}>{selected == 1 ? 'Home' : ''}</div> <div className={selected == 1 ? styles.selected : styles.notSelected} onClick={() => setSelected(1)} /> </div>
          <div className={styles.columnContainer}> <div className={styles.text}>{selected == 2 ? 'About Us' : ''}</div> <div className={selected == 2 ? styles.selected : styles.notSelected} onClick={() => setSelected(2)} /> </div>
          <div className={styles.columnContainer}> <div className={styles.text}>{selected == 3 ? 'What We Do' : ''}</div> <div className={selected == 3 ? styles.selected : styles.notSelected} onClick={() => setSelected(3)} /> </div>
          <div className={styles.columnContainer}> <div className={styles.text}>{selected == 4 ? 'Projects' : ''}</div> <div className={selected == 4 ? styles.selected : styles.notSelected} onClick={() => setSelected(4)} /> </div>
          <div className={styles.columnContainer}> <div className={styles.text}>{selected == 5 ? 'MetaMath' : ''}</div> <div className={selected == 5 ? styles.selected : styles.notSelected} onClick={() => setSelected(5)} /> </div>
        </div>
      </div>
    </div>
  )
}

export default SlideBar