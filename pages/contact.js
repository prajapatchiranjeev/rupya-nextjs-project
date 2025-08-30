import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Get in Touch</h3>
        <form className="bg-white p-6 rounded-xl shadow space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded" required />
          <textarea name="message" placeholder="Your Message" className="w-full border p-3 rounded" rows="4"></textarea>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">Send Message</button>
        </form>
      </section>
    </Layout>
  )
}