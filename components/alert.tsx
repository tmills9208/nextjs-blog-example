import styles from './alert.module.css'
import cn from 'classnames'
import React from 'react'

function Alert({ children, type }: {
  children: React.ReactNode,
  type: string
}) {
  return (
    // angular class binding?
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}>
      { children }
    </div>
  )
}

export default Alert
