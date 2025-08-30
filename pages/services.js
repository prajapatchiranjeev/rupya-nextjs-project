import Layout from '../components/Layout'

export default function Services() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">SEO Services</h4>
            <p>Keyword research, on-page SEO, technical fixes, and link building.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">PPC & Ads</h4>
            <p>Google, Meta, LinkedIn ads, and retargeting strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">Social Media</h4>
            <p>Strategy, content calendars, community growth, and influencer programs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">Content Marketing</h4>
            <p>Blogs, video scripts, lead magnets, and thought leadership.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">Branding & Design</h4>
            <p>Visual systems, guidelines, and high-impact creatives.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold mb-2">Website Development</h4>
            <p>WordPress, Shopify, landing pages, and CRO improvements.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}