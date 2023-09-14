
import styles from './TrailerComponent.module.css';
const TrailerComponent = ({src, title}) => {
    return (
        <div>
            <h2 className={styles.title}>Official Trailer</h2>
            <iframe className={styles.video} width="560" height="315" src={src} title={title} allowFullScreen></iframe>
        </div>
    );
};

export {
    TrailerComponent
}