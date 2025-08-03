import { ArrowRight, Code, Calendar, User, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
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
            <Link href="/services" className="text-gray-600 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-teal-600 font-medium">
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
            src="/images/modern-office-workspace.avif"
            alt="Modern office workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">TechFlow Blog</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and industry trends from our team of technology experts. Stay updated with the latest
              in web development, mobile apps, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our latest insights and deep dives into the world of technology and business transformation.
            </p>
          </div>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/team-business-meeting.avif" alt="Featured article" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    28 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-teal-600">
                    <Tag className="w-4 h-4" />
                    <span>Strategy</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Future of Remote Work: How Technology is Reshaping Business Operations
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Explore how modern technology solutions are enabling businesses to thrive in a remote-first world.
                  From cloud infrastructure to collaboration tools, discover the key technologies driving this
                  transformation.
                </p>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 font-medium self-start">
                  Read Full Article →
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest thoughts on technology, development, and business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-laptop-modern-office.avif"
                  alt="Web Development Best Practices"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    25 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>Mike Chen</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Modern Web Development Best Practices for 2024</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Discover the latest trends and best practices in web development, from performance optimization to
                  accessibility standards.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">Development</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/office-collaborative-workspace.avif"
                  alt="Cloud Migration Guide"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    22 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>Alex Rivera</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>7 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Complete Guide to Cloud Migration for Small Businesses
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Learn how to successfully migrate your business to the cloud with our step-by-step guide and best
                  practices.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">Cloud</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-casual-laptop-work.avif"
                  alt="UI/UX Design Trends"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    20 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>Emma Davis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">UI/UX Design Trends That Will Dominate 2024</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Explore the latest design trends and how they can improve user experience and engagement on your
                  digital platforms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">Design</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/conference-room-meeting.avif"
                  alt="Mobile App Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    18 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>David Kim</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>9 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Native vs Cross-Platform: Choosing the Right Mobile Strategy
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Compare native and cross-platform development approaches to make the best decision for your mobile app
                  project.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-orange-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">Mobile</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/team-meeting-laptops.avif"
                  alt="Data Security"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    15 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>Lisa Wang</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Essential Data Security Practices for Modern Businesses
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Protect your business and customer data with these essential security practices and compliance
                  guidelines.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-red-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">Security</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-office-laptop-work.avif"
                  alt="AI and Machine Learning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    12 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>James Wilson</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>10 min read</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  How AI is Transforming Business Operations in 2024
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Discover practical applications of AI and machine learning that are revolutionizing how businesses
                  operate and compete.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-indigo-600">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium">AI/ML</span>
                  </div>
                  <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 text-sm font-medium">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-8 py-3 text-lg font-semibold">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest articles, insights, and technology updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-l-lg bg-white border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-l-none font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
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
                  <Link href="/services" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Consulting
                  </Link>
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
