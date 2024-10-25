export default function Page({ params }) {
  const blog = {
    title: "php tutorial in English",
    author: "Ahmad Ammad",
    description: "This is a simple blog post description.",
    date: "2024-09-02",
    content: "This is the Content of the blog post . It can include Htmltags and other elemnts"
  }
  return (
    <div className="max-w-5xl mx-auto p-4 ">
      <h1 className="text-3xl font-blod mb-4">{blog.title}</h1>
      <p className="text-lg mb-2">{blog.description}</p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {blog.author}</p>
        <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose"></div>

    </div>
  )
}