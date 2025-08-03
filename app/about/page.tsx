import { ArrowRight, Users, Code, Zap, CheckCircle, Award, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>contact@techflow.com</span>
              </div>
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
            <Link href="/about" className="text-teal-600 font-medium">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-teal-600 hidden md:inline-flex">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-2 rounded-lg">
              Get started free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/team-business-meeting.avif" alt="Team business meeting" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">About TechFlow</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses scale through innovative
              solutions and cutting-edge technology.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Users className="w-4 h-4 text-teal-400" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Award className="w-4 h-4 text-teal-400" />
                <span>5 Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>200+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and success.
                  We believe in creating digital experiences that not only meet today's needs but anticipate tomorrow's
                  challenges.
                </p>
                <div className="flex items-center space-x-3 text-teal-600">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Innovation • Excellence • Growth</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner for businesses worldwide, recognized for our commitment to
                  quality, innovation, and client success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/images/person-laptop-modern-office.avif"
                  alt="Person working in modern office"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/office-collaborative-workspace.avif"
                  alt="Collaborative workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-teal-600 text-white p-2 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe in the power of teamwork and open communication to achieve extraordinary results together.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-casual-laptop-work.avif"
                  alt="Person working on laptop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 text-white p-2 rounded-lg">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/conference-room-meeting.avif"
                  alt="Conference room meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-600 text-white p-2 rounded-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are committed to delivering the highest quality in everything we do, exceeding expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/person-office-laptop-work.avif"
            alt="Person working in office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Growing Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're proud of our diverse, talented team that brings together expertise from around the world.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <p className="text-gray-300">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to work with us?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Learn More
            </Button>
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
