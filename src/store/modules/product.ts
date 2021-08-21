import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { talanaApi } from './api-talana'
import { Category, Product, ProductPage } from '../productModels'

@Module({
  namespaced: true,
  name: 'ProductModule',
  stateFactory: true
})
export default class ProductModule extends VuexModule {
  auth = false
  categories: Category[] = []
  product: ProductPage[] = []
  totalPagesItems = 0

  @Mutation
  changeCategories (categories: Category[]): void {
    this.categories = categories
  }

  @Mutation
  changeProduct (product: ProductPage[]): void {
    this.product = product
  }

  @Mutation
  changeTotalPagesItems (page: number): void {
    this.totalPagesItems = page
  }

  @Action
  getCategories (): void {
    talanaApi.get('product-category/')
      .then(response => {
        this.context.commit('changeCategories', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  @Action
  getProducts (): void {
    talanaApi.get('product/')
      .then(response => {
        let page = 1
        const newArray = response.data.map((element: Product, index: number) => {
          const container: ProductPage = {
            page: 0
          }
          container.page = page
          container.product = element
          if ((index + 1) % 4 === 0) {
            page += 1
          }

          return container
        })
        this.context.commit('changeProduct', newArray)
        this.context.commit('changeTotalPagesItems', page)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
