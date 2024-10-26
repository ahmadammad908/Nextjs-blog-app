import fs from "fs"
import matter from "gray-matter"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {
  // const blog = {
  //   title: "php tutorial in English",
  //   author: "Ahmad Ammad",
  //   description: "This is a simple blog post description.",
  //   date: "2024-09-02",
  //   content: "This is the Content of the blog post . It can include Htmltags and other elemnts"
  // }
  const filepath =`content/${params.slug}.md`
  
  const fileContent = fs.readFileSync(filepath, "utf-8")
  const {content,data} = matter(fileContent)

  const processor =   unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })


  const htmlContent = (await processor.process(content)).toString()
 
  return (
    <div className="max-w-5xl mx-auto p-4 ">
      <h1 className="text-5xl font-blod mb-4">{data.title}</h1>
      <p className="text-lg mb-2">{data.description}</p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic font-bold">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4 font-bold">{data.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>

    </div>
  )
}