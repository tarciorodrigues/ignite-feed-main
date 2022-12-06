import { useState } from 'react'

import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'
import profilePic1 from '../assets/images/profile-pic-1.png'

import styles from './Comment.module.css'

interface CommentProps {
  content: string,
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [ likeCount, setLikeCount ] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
 
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profilePic1} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tarcio Rodrigues</strong>
              <time title='14 de julho às 06h' dateTime="2022-07-14 06:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}