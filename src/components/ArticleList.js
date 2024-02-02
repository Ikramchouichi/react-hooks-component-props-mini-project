import Article from "./Article"
function ArticleList({ posts }) {

    console.log(posts)
    const renderPosts = posts.map(({id, title, date, preview, minutes }) => (
    <Article key={id}
             title ={title}
             date={date}
             preview ={preview}
    />
    )) 
    return (
        <main>
         { renderPosts }
        </main>
    )
}
export default ArticleList;