import {
  ArrowRight,
  Users,
  Code,
  Smartphone,
  Globe,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Search,
  Palette,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function TechServicesLanding() {
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
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@techflow.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon - Fri 9:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">TechFlow</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/services"
                className="text-gray-600 hover:text-teal-600 transition-colors flex items-center space-x-1"
              >
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/about"
                className="text-gray-600 hover:text-teal-600 transition-colors flex items-center space-x-1"
              >
                <span>About</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-teal-600 transition-colors flex items-center space-x-1"
              >
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-teal-600 hidden md:inline-flex">
              Login
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-teal-600 hidden md:inline-flex">
              Talk to Sales
            </Button>
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-2 rounded-lg">
              Get started free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Cake Style with Background Image */}
      <section className="py-20 relative overflow-hidden min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/team-meeting-collaboration.avif"
            alt="Team collaboration background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The intuitive tech
                <br />
                platform for fast-
                <br />
                growing startups
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                Automate your development with TechFlow's comprehensive platform, scalable solutions, team
                collaboration, and enterprise-grade infrastructure.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <Code className="w-4 h-4 text-teal-400" />
                  <span>Deploy in minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span>Keep data secure</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <Users className="w-4 h-4 text-teal-400" />
                  <span>Scale your team</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg">
                  Get started free
                </Button>
                <div className="text-sm text-gray-300">
                  <span className="italic">no credit card required</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-200">5-STAR RATING</span>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              {/* Dashboard mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full backdrop-blur-sm">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Dashboard</h3>
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">TF</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900">14,517,000</div>
                      <div className="text-sm text-gray-600">Total Users</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900">23,875,034</div>
                      <div className="text-sm text-gray-600">API Calls</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-4 h-32 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-teal-600" />
                  </div>

                  {/* Team members */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Top Stakeholders</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                        <div className="text-xs text-gray-600">Lead Developer</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Mike Chen</div>
                        <div className="text-xs text-gray-600">Product Manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating testimonial */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      "Having stock options sounds complex but it's good to be able to see what we have. TechFlow
                      genuinely great product that helps make what we do easier."
                    </p>
                    <div className="text-xs text-gray-500">Maria Kim, Co-Founder at Flow Fund</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-600 mb-8">Our Clients</h3>
          <p className="text-center text-gray-500 mb-12">We have been working with some Fortune 500+ clients</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Globe className="w-8 h-8 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Zap className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manage your entire tech stack</h2>
            <h3 className="text-2xl text-gray-600 mb-4">in a single ecosystem</h3>
            <p className="text-gray-500">Who is TechFlow suitable for?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Consultation Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/modern-office-workspace.avif"
                  alt="Modern office workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    22 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Tech Consultation Unveiled</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Aenean at lacus nec bibendum dui nulla sed consectetur. Praesent erat commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">TESTING • ANALYZE</span>
                </div>
              </CardContent>
            </Card>

            {/* Development Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/hands-laptop-coding.avif"
                  alt="Hands coding on laptop"
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
                <h4 className="text-xl font-bold text-gray-900 mb-3">Development Process Revealed</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna.
                </p>
                <div className="flex items-center space-x-2 text-orange-600">
                  <Code className="w-4 h-4" />
                  <span className="text-sm font-medium">BUILD • DEPLOY</span>
                </div>
              </CardContent>
            </Card>

            {/* Design Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-laptop-coffee.avif"
                  alt="Person working on laptop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    15 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Design Innovation Showcase</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet
                  non magna.
                </p>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm font-medium">UI • UX</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section - Clean Product Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-12 flex items-center justify-center">
                <Image
                  src="/images/person-home-office.avif"
                  alt="Person working in home office"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                The power of spending three years at TechFlow.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-3">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Background Image with Overlay */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/modern-office-desks.avif" alt="Modern office with desks" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Helping tech businesses
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  {" "}
                  scale globally
                </span>
              </h2>
              <p className="text-gray-300">We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-teal-400 mr-2" />
                  <span className="text-3xl font-bold text-white">2,245,341</span>
                </div>
                <p className="text-gray-300">Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-teal-400 mr-2" />
                  <span className="text-3xl font-bold text-white">46,328</span>
                </div>
                <p className="text-gray-300">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-teal-400 mr-2" />
                  <span className="text-3xl font-bold text-white">828,867</span>
                </div>
                <p className="text-gray-300">Solutions</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="w-6 h-6 text-teal-400 mr-2" />
                  <span className="text-3xl font-bold text-white">1,926,436</span>
                </div>
                <p className="text-gray-300">Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section - Clean Product Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-12 flex items-center justify-center">
                <Image
                  src="/images/team-meeting-laptops.avif"
                  alt="Team meeting with laptops"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                How to design your mobile app like we did.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa
                  nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
                  habitasse platea dictumst.
                </p>
                <p>
                  Vestibulum vehicula blandit magna, eu tempus turpis blandit vel. Sed molestie libero eu ante sodales
                  pharetra. Donec eu ante vel massa cursus ornare.
                </p>
                <p>
                  Cras congue cursus in, tempor dictum risus. Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/office-computers-work.avif"
                alt="Office with computers and people working"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="text-white">
              <p className="text-lg mb-6 italic">
                "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim.
                Nullam ut molestie arcu, at hendrerit elit."
              </p>
              <div>
                <h4 className="font-bold text-xl mb-1">Tim Smith</h4>
                <p className="text-gray-400">British Dragon Boat Racing Association</p>
              </div>
              <div className="flex items-center mt-6 space-x-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                  Meet all customers →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Card Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation is the new marketing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The TechFlow blog is the best place to read about the latest development insights, trends and more. See
              who's joining the community, read about how our community are scaling their businesses and lot's more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Blog Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/modern-office-workspace.avif"
                  alt="Modern office workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    25 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creating Streamlined Development Processes</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Aenean at lacus nec bibendum dui nulla sed consectetur. Praesent erat commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 font-medium">
                  Readmore →
                </Button>
              </CardContent>
            </Card>

            {/* Blog Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/person-laptop-coffee.avif"
                  alt="Person working on laptop"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Development Responsibilities Management</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna.
                </p>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 font-medium">
                  Readmore →
                </Button>
              </CardContent>
            </Card>

            {/* Blog Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl group">
              <div className="relative h-48">
                <Image
                  src="/images/team-meeting-laptops.avif"
                  alt="Team meeting with laptops"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    15 MAR
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Revamping Development with Modern Tools</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet
                  non magna.
                </p>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 font-medium">
                  Readmore →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Images */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/office-computers-work.avif" alt="Office with computers" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to transform your business with technology?</h2>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start a Project
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
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
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
