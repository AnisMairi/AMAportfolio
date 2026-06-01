//= Global Styles
import "@/styles/main.scss";


export const metadata = {
  title: 'Anis Maïri | Data & AI Engineer',
  description: 'Data and AI Engineer portfolio focused on Microsoft Fabric, Azure AI Foundry, Azure data platforms, Databricks migrations and Power BI.',
  keywords: ['Python', 'Microsoft Fabric', 'Azure AI Foundry', 'Azure Cloud', 'Databricks', 'Power BI', 'Data Engineering', 'Generative AI'],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
