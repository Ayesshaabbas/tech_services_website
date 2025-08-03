import { ArrowRight, Code, Smartphone, BarChart3, Palette, Search, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <span>(555) 123-4567</span>
              <span>contact@techflow.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">TechFlow</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-teal-600 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-2 rounded-lg">
            Get started free
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/office-collaborative-workspace.avif"
            alt="Collaborative workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">Our Services</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From consultation to deployment, we provide end-to-end technology solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Web Development */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/hands-laptop-coding.avif"
                  alt="Web development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-teal-600 text-white p-2 rounded-lg">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Web Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Custom web applications built with modern frameworks and best practices for optimal performance and
                  user experience.
                </p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <span className="text-sm font-medium">React • Next.js • Node.js</span>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Development */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-casual-laptop-work.avif"
                  alt="Mobile development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 text-white p-2 rounded-lg">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Mobile Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Native and cross-platform mobile applications that deliver exceptional user experiences across all
                  devices.
                </p>
                <div className="flex items-center space-x-2 text-purple-600">
                  <span className="text-sm font-medium">iOS • Android • React Native</span>
                </div>
              </CardContent>
            </Card>

            {/* Cloud Solutions */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/modern-office-desks.avif"
                  alt="Cloud solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <Cloud className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Cloud Solutions</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <span className="text-sm font-medium">AWS • Azure • Google Cloud</span>
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-laptop-modern-office.avif"
                  alt="UI/UX Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-pink-600 text-white p-2 rounded-lg">
                    <Palette className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  User-centered design solutions that create intuitive and engaging digital experiences for your
                  customers.
                </p>
                <div className="flex items-center space-x-2 text-pink-600">
                  <span className="text-sm font-medium">Figma • Adobe • Prototyping</span>
                </div>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/team-business-meeting.avif"
                  alt="Data Analytics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-green-600 text-white p-2 rounded-lg">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Data Analytics</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Transform your data into actionable insights with advanced analytics and business intelligence
                  solutions.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <span className="text-sm font-medium">Python • R • Tableau</span>
                </div>
              </CardContent>
            </Card>

            {/* Consulting */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/conference-room-meeting.avif"
                  alt="Technology Consulting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-600 text-white p-2 rounded-lg">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Technology Consulting</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Strategic technology guidance to help you make informed decisions and optimize your digital
                  transformation.
                </p>
                <div className="flex items-center space-x-2 text-orange-600">
                  <span className="text-sm font-medium">Strategy • Architecture • Planning</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">Understanding your business needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Planning</h4>
              <p className="text-gray-600 text-sm">Creating detailed project roadmaps and timelines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Development</h4>
              <p className="text-gray-600 text-sm">Building solutions with agile methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">Deploying and supporting your solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help bring your vision to life.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechFlow</span>
              </div>
              <p className="text-gray-400 mb-4">Copyright © 2024 TechFlow Ltd.</p>
              <p className="text-gray-400">All rights reserved</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay up to date</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 rounded-l-none">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
