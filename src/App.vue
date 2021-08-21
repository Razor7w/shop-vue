<template>
  <v-app :class="isLogin ? 'fondo' : 'base'">
    <component :is="layout">
      <router-view :key="$route.path"/>
    </component>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  defaultLayout = 'blank'
  get layout (): string {
    return (this.$route.meta.layout || this.defaultLayout) + '-layout'
  }

  isLogin = false

  created (): void {
    //
  }
}
</script>

<style lang="stylus">
.fondo
  height auto!important
  background rgb(61,60,60) !important
  background radial-gradient(circle, rgba(61,60,60,1) 0%, rgba(38,38,38,1) 45%, rgba(0,0,0,1) 100%) !important

// form
//   margin 0px 35px

.logo
  margin-bottom 30px

.link
  color grey !important
  margin-top 30px
  text-decoration none

  &:hover
    color white !important
    transition 0.3s

.login-icons
  color #ccc
  font-size 24px

  svg
    margin 30px 15px

html
body
  height 100%
.base
  height 100%
  .v-application--wrap
  #div-base
  #scrolling-techniques-1
  .v-main
  .v-main__wrap
  #container-base
  .v-card
  iframe
    height 100%
</style>
