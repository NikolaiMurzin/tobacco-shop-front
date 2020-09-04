import initEachProductPage from './tobaccos/initEachProductPage'
import initBrandsPages from './tobaccos/initBrandsPages'
import initMainPage from './tobaccos/initMainPage'

module.exports = async ({graphql, actions}) => {

  // create each tobacco page section
  await initEachProductPage({ graphql, actions })

  // create brand tobacco pages section
  await initBrandsPages({ graphql, actions })

  // tobacco main page section
  await initMainPage({ graphql, actions })
}