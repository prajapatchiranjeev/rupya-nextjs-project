import Layout from '../components/Layout'

export default function CaseStudies() {
  return (
    <Layout>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold mb-2">E-commerce SEO Boost</h4>
              <p>120% organic traffic growth in 6 months.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold mb-2">PPC for SaaS</h4>
              <p>Reduced CPA by 40% while increasing signups.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold mb-2">Brand Refresh</h4>
              <p>Rebranded fintech firm leading to +75% leads.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}