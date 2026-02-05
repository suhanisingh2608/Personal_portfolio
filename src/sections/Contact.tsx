import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suhani@example.com',
      href: 'mailto:suhani@example.com',
      color: 'from-pink-300 to-rose-300',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXXXXXXX',
      href: '#',
      color: 'from-blue-300 to-cyan-300',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: '#',
      color: 'from-purple-300 to-pink-300',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-pastel-pink/20 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/80 rounded-full mb-6">
            <Heart size={16} className="text-rose-600" />
            <span className="text-sm font-semibold text-rose-700">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Let's Connect!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you want to collaborate, chat about tech, ask questions, or just say hello—I'm always up for it. Drop me a message! 💬
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <a
                key={info.label}
                href={info.href}
                className={`bg-gradient-to-br ${info.color} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group border-2 border-white/50`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.label}</h3>
                <p className="text-gray-800 font-medium">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border-2 border-gray-200">
          <h3 className="text-3xl font-black text-gray-900 mb-2">Send Me a Message</h3>
          <p className="text-gray-600 mb-8 font-medium">I promise to respond! (Usually within 24 hours 😊)</p>

          {submitted && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 text-green-700 px-6 py-4 rounded-xl mb-6 font-bold">
              ✨ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all font-medium"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all font-medium"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all font-medium"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project, idea, or just say hello..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all font-medium resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
