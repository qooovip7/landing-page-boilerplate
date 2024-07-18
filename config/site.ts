import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/'

const baseSiteConfig = {
  name: "MOFA Tourism Customization",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://mofa.one",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["MOFA Tourism Customization", "MOFAONE", "awesome landing page", "next.js landing page"],
  authors: [
    {
      name: "MOFA",
      url: "https://mofa.one",
      twitter: 'https://twitter.com/mylolososo',
    }
  ],
  creator: '@qooovip7',
  openSourceURL: 'https://github.com/',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yuyuyu21", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:qooovip7@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/mylolososo", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/qooovip7/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yuyuyu21", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'MOFACHAT', href: "https://mofa.chat", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://mofa.chat', name: '智聊魔方' },
    { url: 'https://nav.mofa.chat', name: 'AI导航' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://github.com', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
