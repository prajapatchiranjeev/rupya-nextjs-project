import Layout from '../components/Layout'
import Link from 'next/link'

export default function Blog() {
  return (
    <Layout>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Insights & Blog</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/top-seo-trends-2025"><a className="bg-white p-6 rounded-xl shadow block">
              <h4 className="font-bold mb-2">Top SEO Trends 2025</h4>
              <p>Stay ahead with latest search strategies.</p>
            </a></Link>
            <Link href="/blog/social-ads-tips"><a className="bg-white p-6 rounded-xl shadow block">
              <h4 className="font-bold mb-2">Social Ads Tips</h4>
              <p>Maximize ROI with smarter targeting.</p>
            </a></Link>
            <Link href="/blog/content-that-converts"><a className="bg-white p-6 rounded-xl shadow block">
              <h4 className="font-bold mb-2">Content That Converts</h4>
              <p>Craft stories that drive customer action.</p>
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}