import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => {
    const [isZoom, setIsZoom] = useState(false);

    const toggleZoom = () => {
        setIsZoom(!isZoom);
    };

    return (
    <div className={styles.post}>
        <img 
        onClick={toggleZoom} 
        className={`${styles['post-image']} ${isZoom ? styles.zoomed : ''}`} 
        src={imageUrl} 
        alt='Conteúdo visual do post'
        />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
    );
};

export default Post;