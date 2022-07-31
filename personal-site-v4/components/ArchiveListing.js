import Image from 'next/image'
import styles from '../styles/ArchiveListing.module.css'


export default function ArchiveListing({ props }) {
    return (
        <div className={styles.ArchiveListing}>
            <div className={styles.left}>
                <a href={"/blog/" + props.uuid}><Image src="/blog_default.png" width="100" height="100" /></a>
            </div>
            <div className={styles.right}>
                <h3><a  href={"/blog/" + props.uuid}>{props.title}</a></h3>
                <p className={styles.created}>{new Date(props.created).toDateString()}</p>
                <p>
                    {props.short_description}
                    <a href={"/blog/" + props.uuid}> Read More...</a>
                </p>
                
            </div>
        </div>
    );
}