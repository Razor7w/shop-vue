<template>
  <v-app-bar
      app
      :src="barBg"
      height="63"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-1"
      class="app-bar"
    >
    <v-container fluid>
      <v-row align="center">
        <v-col
          cols="2"
          @click.stop="onClick"
          class="nav-menu d-flex justify-space-around"
        >
          <div class="d-flex">
            <v-icon color="#87E600" size="32" Left>mdi-menu</v-icon>
            <h4 class="pl-2 d-md-flex d-none align-self-center text-uppercase">Categorias</h4>
          </div>
        </v-col>
        <v-col auto class="text-center">
        </v-col>
        <v-col class="text-right">
          <v-text-field
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col
          cols="3"
          md="2"
          class="px-5 nav-user d-flex justify-center"
        >
          <v-icon size="30">
            mdi-shopping
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/modules/app'

@Component({
  name: 'AppBar'
})
export default class extends Mixins(Utils) {
  appModule = getModule(AppModule, this.$store)
  barBg = require('@/assets/bar_bg.png')

  onClick (): void {
    this.appModule.setDrawer(!this.appModule.drawer)
  }
}

</script>

<style lang="stylus">
  // Fix coming in v2.0.8
  #core-app-bar
    width auto
    a
      text-decoration none
  .v-toolbar__content
    padding 0
</style>
<style lang="stylus" scoped>
.app-var
  margin-top: -20px
.nav-login:hover
  i
    color red
.nav-menu
  height 62px
</style>
