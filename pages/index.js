import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Grow smarter, scale faster with proven digital marketing</h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">From SEO to performance ads, we help fintech & retail brands dominate online with data-driven creativity.</p>
          <div className="flex justify-center gap-4">
            <Link href="/pricing"><a className="px-6 py-3 rounded-md bg-white text-purple-600 font-semibold">See pricing</a></Link>
            <Link href="/case-studies"><a className="px-6 py-3 rounded-md border border-white/30">View results</a></Link>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-search text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">SEO Services</h4>
            <p>Optimize your visibility with search-driven strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-bullhorn text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">PPC & Ads</h4>
            <p>Targeted ad campaigns to drive conversions quickly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-share-nodes text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Social Media</h4>
            <p>Engage your audience and build loyal communities.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-pen-nib text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Content Marketing</h4>
            <p>Create valuable content to boost brand authority.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-paint-brush text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Branding & Design</h4>
            <p>Stand out with unique brand identity and visuals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <i className="fas fa-code text-purple-600 text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Website Development</h4>
            <p>Modern, responsive websites built for performance.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}