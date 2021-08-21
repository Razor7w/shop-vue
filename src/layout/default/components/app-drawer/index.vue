<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    color="primary"
    width="320"
    :src="barBg"
    absolute
    temporary
  >
    <v-list class="py-0">
      <v-list-item class="menu" style=";" @click="this.appModule.toggleDrawer">
         <v-list-item-action>
              <v-icon color="#87E600" size="32">mdi-menu</v-icon>
            </v-list-item-action>

            <v-list-item-title>Categorias</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider class="mx-3 mb-3" />
    <v-list>
      <div v-for="(item, i) in productInstance.categories"
        :key="item.id">
        <v-list-item
          :key="i"
          :to="item.name"
          active-class="primary white--text"
        >
          <v-list-item-action>
            <v-icon size="32">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.name" />
        </v-list-item>

      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/modules/app'
import ProductModule from '@/store/modules/product'
import { Utils } from '@/mixins/utils'

@Component({
  name: 'AppDrawer'
})
export default class extends Mixins(Utils) {
  appModule = getModule(AppModule, this.$store)
  productInstance = getModule(ProductModule, this.$store)
  @Prop({ default: false }) opened: boolean | undefined
  barBg = require('@/assets/bar_bg.png');
  avatar = ''
  mobile = false
  size = 0
  sizeMobile = 42
  sizeDesktop = 70
  items = []
  // items = [
  //   {
  //     title: 'Accesos',
  //     icon: 'mdi-monitor',
  //     to: '/accesos',
  //     access: this.sessionInstance.getRoles.accesos
  //   },
  //   {
  //     title: 'Configurador',
  //     icon: 'mdi-cog',
  //     to: '/configurador',
  //     access: this.sessionInstance.getRoles.configurador
  //   },
  //   {
  //     title: 'Base Conocimiento',
  //     to: '/base-conocimiento',
  //     icon: 'mdi-book',
  //     access: this.sessionInstance.getRoles.playbooks
  //   },
  //   {
  //     title: 'Casos',
  //     icon: 'mdi-ticket-confirmation',
  //     items: [
  //       { title: 'Reportes', icon: 'mdi-file-document-outline', to: '/casos/reportes' },
  //       { title: 'Abiertos', icon: 'mdi-chart-donut', to: '/casos/abiertos' },
  //       { title: 'Globales', icon: 'mdi-chart-donut-variant', to: '/casos/globales' }
  //     ],
  //     access: this.sessionInstance.getRoles.casos
  //   },
  //   {
  //     title: 'Monitoreo',
  //     icon: 'mdi-earth',
  //     items: [
  //       { title: 'Lista', icon: 'mdi-format-list-numbered', to: '/monitoreo/general/list' },
  //       { title: 'Matriz', icon: 'mdi-table', to: '/monitoreo/general/matrix' },
  //       { title: 'Alertas', icon: 'mdi-alert', to: '/monitoreo/alertas' },
  //       { title: 'Emergencias', icon: 'mdi-alert-circle', to: '/monitoreo/emergencias' },
  //       { title: 'Incidentes', icon: 'mdi-alert-octagon', to: '/monitoreo/incidentes' }
  //     ],
  //     access: this.sessionInstance.getRoles.monitoreo
  //   },
  //   {
  //     title: 'Operación',
  //     to: '/operacion',
  //     icon: 'mdi-file-excel-outline',
  //     access: this.sessionInstance.getRoles.operacion
  //   },
  //   {
  //     title: 'Soporte',
  //     to: '/soporte',
  //     icon: 'mdi-cloud',
  //     access: this.sessionInstance.getRoles.soporte
  //   },
  //   {
  //     title: 'Preferencias',
  //     to: '/preferencias',
  //     icon: 'mdi-eye',
  //     access: this.sessionInstance.getRoles.preferencias
  //   },
  //   {
  //     title: 'Depurador',
  //     to: '/depurador',
  //     icon: 'mdi-keyboard',
  //     access: this.sessionInstance.getRoles.depurador
  //   },
  //   {
  //     title: 'Perfiles',
  //     to: '/perfiles',
  //     icon: 'mdi-account-group',
  //     access: 1
  //   },
  //   {
  //     title: 'Roles',
  //     to: '/roles',
  //     icon: 'mdi-account-key',
  //     access: this.sessionInstance.getRoles.administrar_roles
  //   }
  // ]

  get inputValue (): boolean {
    return this.appModule.drawer
  }

  set inputValue (val: boolean) {
    this.appModule.setDrawer(val)
  }

  mounted (): void {
    this.productInstance.getCategories()
    // Cambiar
    // console.log(this.sessionInstance.getRoles)
    this.detectMobile()
    window.addEventListener('resize', this.detectMobile)
  }

  beforeDestroy (): void {
    window.removeEventListener('resize', this.detectMobile)
  }

  detectMobile (): void {
    if (this.isMobile()) {
      this.mobile = true
      this.size = this.sizeMobile
    } else {
      this.mobile = false
      this.size = this.sizeDesktop
    }
  }
}
</script>
<style lang="stylus" scoped>
.menu
  height 64px
</style>
