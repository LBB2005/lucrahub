"use client";
import Link from 'next/link'

const techArticles = [
  { title: 'Is NVIDIA Still a Buy for Long-Term Investors?', date: 'April 18, 2024' },
  { title: '5 Promising Tech Stocks With Strong Growth Potential', date: 'April 12, 2024' },
  { title: 'Understanding Financial Statements of Tech Companies', date: 'April 10, 2024' },
  { title: 'AI Taking |Lbeat|che AR| Financial Model', date: 'April 10, 2024' },
]

const aiArticles = [
  { title: 'How Many AI Startups Fail? A Look at the Numbers', date: 'April 15, 2024' },
  { title: 'Top 10 AI Startups to Watch in 2024', date: 'April 11, 2024' },
  { title: 'OpenAI: A Deep Dive into the Leading AI Company', date: 'April 9, 2024' },
  { title: 'OpenAI: A Deep Dive into the Leading AI Company', date: 'April 9, 2024' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <span className="text-2xl font-extrabold tracking-tight">LUCRA</span>
          <nav className="flex space-x-8 text-base font-medium">
            <a href="#tech-stocks" className="hover:text-blue-600 transition-colors cursor-pointer">Tech Stocks</a>
            <a href="#ai-startups" className="hover:text-blue-600 transition-colors cursor-pointer">AI Startups</a>
            <Link href="/signup" className="hover:text-blue-600 transition-colors">Sign Up</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Cut through the noise of<br />the tech and AI market</h1>
          <p className="text-lg text-gray-500 mb-8">Clear insights into public tech stocks and private AI startups</p>
          <Link href="/signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg">Get Started</button>
          </Link>
        </section>

        {/* Tech Stocks Section */}
        <section id="tech-stocks" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Tech Stocks</h2>
          <p className="text-gray-500 mb-6">In-depth analysis and advice investing in technology companies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techArticles.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Startups Section */}
        <section id="ai-startups" className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">AI Startups</h2>
          <p className="text-gray-500 mb-6">Latest trends and analysis of emerging artificial intelligence companies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiArticles.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 