
import { HomeData } from './desafio/layout/HomeData'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const DesafioApp = () => {
  return (
  <AppTheme>

      {/* <h1>E-BuyPlace</h1> */}

    <AppRouter />
<HomeData />

  </AppTheme>
  
    )
}
