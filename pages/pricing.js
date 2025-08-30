import Layout from '../components/Layout'

export default function Pricing() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold mb-2">Starter</h4>
            <p className="text-2xl font-bold mb-4">₹9,999/mo</p>
            <ul className="mb-6 text-sm text-gray-600">
              <li>Basic SEO & Ads</li>
              <li>Monthly Reports</li>
              <li>Email Support</li>
            </ul>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold mb-2">Growth</h4>
            <p className="text-2xl font-bold mb-4">₹19,999/mo</p>
            <ul className="mb-6 text-sm">
              <li>Advanced SEO & Ads</li>
              <li>Social Media Mgmt</li>
              <li>Dedicated Manager</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold mb-2">Enterprise</h4>
            <p className="text-2xl font-bold mb-4">Custom</p>
            <ul className="mb-6 text-sm text-gray-600">
              <li>Custom Strategies</li>
              <li>Full Funnel Mgmt</li>
              <li>24/7 Priority Support</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}