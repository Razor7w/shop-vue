<template>
  <v-card
    v-if="Product.page === page"
  >
    <v-img
      height="300px"
      :src="Product.product.photo"
    ></v-img>

    <v-card-title>{{ Product.product.name}}</v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
        $ {{Product.product.price }} •
      </div>

      <div>{{Product.product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-text-field type="number" />
      <v-btn
        color="deep-purple lighten-2"
        text
        large
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
</v-card>
</template>

<script lang="ts">
import { Mixins, Component, Prop } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import { Product } from '@/store/productModels'

@Component
export default class ProductItem extends Mixins(Utils) {
  @Prop() Product: Product | undefined
  @Prop() page: number | undefined
}
</script>
