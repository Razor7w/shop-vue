<template>
  <div
  >
    <v-card-title>Productos</v-card-title>
    <v-card-subtitle>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <!-- Card Item -->
        <v-col cols="3" class="px-2 mt-2" v-for="(item, i) in productInstance.product" :key="i">
          <!-- <v-card
            v-if="item.page === page"
            >
              <v-img
                height="300px"
                :src="item.product.photo"
              ></v-img>

              <v-card-title>{{ item.product.name}}</v-card-title>

              <v-card-text>

                <div class="my-4 text-subtitle-1">
                  $ {{item.product.price }} • Italian, Cafe
                </div>

                <div>{{item.product.description}}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                >
                  Reserve
                </v-btn>
              </v-card-actions>
          </v-card> -->
          <Product-item :Product="item" :page="page"/>
        </v-col>
      </v-row>
    </v-card-text>
    <v-pagination
      v-model="page"
      :length="productInstance.totalPagesItems"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import ProductModule from '@/store/modules/product'

@Component
export default class Home extends Vue {
  productInstance = getModule(ProductModule, this.$store)
  page = 0
  items = [
    {
      text: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard'
    },
    {
      text: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1'
    },
    {
      text: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2'
    }
  ]

  mounted (): void {
    this.productInstance.getProducts()
    this.page = 1
  }
}
</script>
