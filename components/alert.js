import styles from './alert.module.css'
// if "Alert".module.css exists, you can use it directly with the following import
import cn from 'classnames'

function Alert({ children, type }) {
  return (
    // Wait, property binding? Hello~ :3
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
