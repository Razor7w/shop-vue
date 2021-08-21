/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import Component from 'vue-class-component'
import moment from 'moment'
import { POSITION } from 'vue-toastification'

@Component
export class Utils extends Vue {
  // Utils para el proyecto
  isMobile (): boolean {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  }

  htmlEntities (str: string): string {
    if (!str) {
      return 'Sin información'
    }
    let aux = str
    let times = str.indexOf(';')
    while (times > 0) {
      aux = replace(aux)
      times -= 1
    }

    function replace (str: string): string {
      return String(str).replace('&ntilde;', 'ñ')
        .replace('&Ntilde;', 'Ñ')
        .replace('&amp;', '&')
        .replace('&Ntilde;', 'Ñ')
        .replace('&ntilde;', 'ñ')
        .replace('&Ntilde;', 'Ñ')
        .replace('&Agrave;', 'À')
        .replace('&Aacute;', 'Á')
        .replace('&Acirc;', 'Â')
        .replace('&Atilde;', 'Ã')
        .replace('&Auml;', 'Ä')
        .replace('&Aring;', 'Å')
        .replace('&AElig;', 'Æ')
        .replace('&Ccedil;', 'Ç')
        .replace('&Egrave;', 'È')
        .replace('&Eacute;', 'É')
        .replace('&Ecirc;', 'Ê')
        .replace('&Euml;', 'Ë')
        .replace('&Igrave;', 'Ì')
        .replace('&Iacute;', 'Í')
        .replace('&Icirc;', 'Î')
        .replace('&Iuml;', 'Ï')
        .replace('&ETH;', 'Ð')
        .replace('&Ntilde;', 'Ñ')
        .replace('&Ograve;', 'Ò')
        .replace('&Oacute;', 'Ó')
        .replace('&Ocirc;', 'Ô')
        .replace('&Otilde;', 'Õ')
        .replace('&Ouml;', 'Ö')
        .replace('&Oslash;', 'Ø')
        .replace('&Ugrave;', 'Ù')
        .replace('&Uacute;', 'Ú')
        .replace('&Ucirc;', 'Û')
        .replace('&Uuml;', 'Ü')
        .replace('&Yacute;', 'Ý')
        .replace('&THORN;', 'Þ')
        .replace('&szlig;', 'ß')
        .replace('&agrave;', 'à')
        .replace('&aacute;', 'á')
        .replace('&acirc;', 'â')
        .replace('&atilde;', 'ã')
        .replace('&auml;', 'ä')
        .replace('&aring;', 'å')
        .replace('&aelig;', 'æ')
        .replace('&ccedil;', 'ç')
        .replace('&egrave;', 'è')
        .replace('&eacute;', 'é')
        .replace('&ecirc;', 'ê')
        .replace('&euml;', 'ë')
        .replace('&igrave;', 'ì')
        .replace('&iacute;', 'í')
        .replace('&icirc;', 'î')
        .replace('&iuml;', 'ï')
        .replace('&eth;', 'ð')
        .replace('&ntilde;', 'ñ')
        .replace('&ograve;', 'ò')
        .replace('&oacute;', 'ó')
        .replace('&ocirc;', 'ô')
        .replace('&otilde;', 'õ')
        .replace('&ouml;', 'ö')
        .replace('&oslash;', 'ø')
        .replace('&ugrave;', 'ù')
        .replace('&uacute;', 'ú')
        .replace('&ucirc;', 'û')
        .replace('&uuml;', 'ü')
        .replace('&yacute;', 'ý')
        .replace('&thorn;', 'þ')
        .replace('&yuml;', 'ÿ')
    }

    return aux
  }

  setEpoch (str: string): number {
    if (str === '') {
      return 0
    } else {
      return moment(str).unix()
    }
  }

  convertEpochToDataTime (epoch: number, format: string): string {
    return moment.unix(epoch).format(format)
  }

  errorAlert (msg: string): void {
    Vue.$toast.error(msg, {
      position: POSITION.BOTTOM_RIGHT
    })
  }

  successAlert (msg: string): void {
    Vue.$toast.success(msg, {
      position: POSITION.BOTTOM_RIGHT
    })
  }

  validatePassword (newPass: string): boolean | string {
    let estado = true
    let msg = ''
    if (typeof newPass === 'undefined' || newPass === '') {
      // Pass undefined
      estado = false
      msg = 'La contraseña es requerida.'
    } else {
      // Validate lenght
      if (newPass.length < 8) {
        estado = false
        msg = 'El largo de la contraseña debe ser mayor a 8 caracteres'
      } else {
        // Validate number
        let regex = /\d/

        if (!regex.test(newPass)) {
          estado = false
          msg = 'La contraseña debe contener al menos un número'
        } else {
          // Validate lowercase letters
          regex = /[a-z]/g

          if (!regex.test(newPass)) {
            estado = false
            msg = 'La contraseña debe contener una letra en minúscula al menos'
          } else {
            // Validate uppercase letters
            regex = /[A-Z]/g
            if (!regex.test(newPass)) {
              estado = false
              msg = 'La contraseña debe contener una letra mayúscula al menos'
            } else {
              // Validate special character
              regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
              if (!regex.test(newPass)) {
                estado = false
                msg = 'La contraseña debe contener un caracter especial al menos.'
              }
            }
          }
        }
      }
    }
    // @ts-expect-error Mensaje correcto para validación de formulario
    return (v: string): boolean | string => estado || msg
  }

  equalPassword (confirmPass: string, newPass: string): boolean | string {
    let estado = true
    let msg = ''

    if (!confirmPass) {
      estado = false
      msg = 'Confirmar contraseña es requerida.'
    } else if (!(confirmPass === newPass)) {
      estado = false
      msg = 'Las contraseñas deben coincidir.'
    }

    // @ts-expect-error Mensaje correcto para validación de formulario
    return (v: string): boolean | string => estado || msg
  }
}
