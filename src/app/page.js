//= Page Components
import MainContent from "@/components/Demos/MainContent";

export const metadata = {
  title: 'Anis Maïri | Data & AI Engineer',
  description: 'Portfolio of Anis Maïri, Data and AI Engineer focused on Microsoft Fabric, Azure AI Foundry, Databricks, Power BI and cloud data platforms.',
  keywords: ['Anis Maïri', 'Data Engineer', 'AI Engineer', 'Microsoft Fabric', 'Azure AI Foundry', 'Azure Cloud', 'Power BI', 'Databricks'],
  icons: {
    icon: "/AMA3.JPG",
    shortcut: "/AMA3.JPG"
  },
  openGraph: {
    title: 'Anis Maïri | Data & AI Engineer',
    description: 'Fabric, Foundry, Azure and Power BI oriented portfolio for data platform and applied AI delivery.',
    type: 'website'
  },
}


export default function LandingPreview() {
  return <MainContent />
}
