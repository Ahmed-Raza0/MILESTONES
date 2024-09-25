export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string
  }
  
  export const posts: Post[] = [
    { id: '1', title: 'First Post', content: 'This is the content of the first post.',excerpt: 'This is the excerpt of the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the content of the second post.',excerpt: 'This is the excerpt of the second post.' },
    { id: '3', title: 'Third Post', content: 'This is the content of the third post.' ,excerpt: 'This is the excerpt of the third post.'},
  ];
  