
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Article() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-20 px-6">
        <Link href="/blog"><a className="text-sm text-sky-600">← Back to insights</a></Link>
        <h1 className="text-3xl font-bold mt-6 mb-4">Top SEO Trends 2025</h1>
        <p className="text-slate-600 mb-6">Short excerpt explaining the value of the article.</p>
        <article className="prose max-w-none">
          <p>This is a starter article. Replace with full content in Markdown or your CMS.</p>
        </article>
      </div>
    </Layout>
  )
}
