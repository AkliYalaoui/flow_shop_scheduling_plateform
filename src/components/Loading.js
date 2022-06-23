import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className='relative'>
        <span className='absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-purple-600'>Exécution de l'algorithme...</span>
        <div className={styles.loading}>
            <span></span>
        </div>
    </div>
  )
}

export default Loading