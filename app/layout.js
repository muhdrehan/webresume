import './globals.css'

export const metadata = {
  title: "Muhammad Rehan – Portfolio | Technical Project Manager Solution Architect & Business Analyst",
  description: "Portfolio of Muhammad Rehan showcasing projects in AI, SaaS, and Web Development with expertise in Product & Project Management.",
  keywords: "Muhammad Rehan, Portfolio, Technical Project Manager, Business Analyst, SaaS, AI Projects",
  openGraph: {
    title: "Muhammad Rehan – Portfolio | Technical Project Manager Solution Architect & Business Analyst",
    description: "Showcasing projects in AI, SaaS, and Web Development.",
    url: "https://webresume-nine.vercel.app/",
    siteName: "Muhammad Rehan Portfolio",
    images: [
      {
        url: "/preview.jpg", // put your image in public/preview.jpg
        width: 1200,
        height: 630,
        alt: "Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  Linkedin: {
    card: "summary_large_image",
    title: "Muhammad Rehan – Portfolio",
    description: "Portfolio website showcasing projects and achievements.",
    url: "https://www.linkedin.com/in/edison-protus/",
    images: ["/preview.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (replace G-XXXXXX with your tag) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
