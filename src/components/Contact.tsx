import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:giridhargedela2908@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl font-bold mb-6">Let's Build Something Together!</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always open to connecting with fellow developers, potential employers, and tech enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-4 bg-yellow-500 rounded-xl mr-6 shadow-lg">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-blue-100">Visakhapatnam, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-4 bg-yellow-500 rounded-xl mr-6 shadow-lg">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href="mailto:giridhargedela2908@gmail.com" className="text-blue-100 hover:text-yellow-300 transition-colors duration-200">
                      giridhargedela2908@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-4 bg-yellow-500 rounded-xl mr-6 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Response Time</h4>
                    <p className="text-blue-100">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/giridhargedela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/GIRIDHAR-GEDELA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:giridhargedela2908@gmail.com"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-3">Ready to Collaborate?</h3>
              <p className="mb-6 leading-relaxed">
                Whether it's a full-time opportunity, freelance project, or just a tech discussion, 
                I'm excited to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center transform hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <a
                  href="https://linkedin.com/in/giridhargedela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center transform hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl fade-in">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Let's discuss a project"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;