import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock:React.FC = () => {
	return (
		<div className={styles.main}>
			<h1>
				<span>😕</span>
				<br />
				Not found
			</h1>
			<p>
                Unfortunately, this page is not available on our website
            </p>
		</div>
	)
}

export default NotFoundBlock
