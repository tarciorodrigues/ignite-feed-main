import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post'

import './global.css'
import styles from './App.module.css'

interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/13177239?v=4',
      name: 'Wellington Villefort',
      role: 'DevOps | SIGE'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev 👋' },
      { type: 'paragraph', content: 'Confere lá os repositórios novos do meu portifólio🚀🚀🚀🚀' },
      { type: 'link', content: 'https://github.com/wvillefort' },
    ],
    publishedAt: new Date('2022-06-18 19:00:00')
  },

  
]

export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
         {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
  )
}

