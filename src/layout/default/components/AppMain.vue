<template>
  <v-sheet
    id="scrolling-techniques-1"
    class="overflow-y-auto"
    :max-height="Height"
  >
   <v-main>
      <v-container fluid id="container-base">
        <router-view :key="key"></router-view>
      </v-container>
    </v-main>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class extends Vue {
  heightWindow = window.innerHeight
  get key (): string {
    return this.$route.fullPath
  }

  get Height (): number {
    return this.heightWindow
  }

  created (): void {
    window.addEventListener('resize', this.resizeWindow)
  }

  destroyed (): void {
    window.removeEventListener('resize', this.resizeWindow)
  }

  resizeWindow (): void {
    this.heightWindow = window.innerHeight
  }
}
</script>
