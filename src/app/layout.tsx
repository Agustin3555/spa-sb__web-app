import '@/styles/normalize.css'
import '@/styles/palette.css'
import '@/styles/global.css'

import './layout.css'
import { Footer, MainClient } from './components'
import { getTitle } from '@/constants'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Public_Sans, EB_Garamond } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth/config'
import Script from 'next/script'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: getTitle(),
  description: 'Generated by create next app',
}

const publicSans = Public_Sans({ subsets: ['latin'] })
const ebGaramond = EB_Garamond({ subsets: ['latin'] })

const Layout = async ({ children }: Readonly<Props>) => {
  const session = await getServerSession(authOptions)

  return (
    <html lang="es">
      <body
        style={{
          '--pal-font-a': publicSans.style.fontFamily,
          '--pal-font-b': ebGaramond.style.fontFamily,
        }}
      >
        <MainClient {...{ session }}>{children}</MainClient>
        <Footer />
      </body>
      <Script src="https://kit.fontawesome.com/7463805de7.js" />
    </html>
  )
}

export default Layout
