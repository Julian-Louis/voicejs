import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({

    theme: {
        colors: {
            primary: '#D44D4D',
            secondary: '#F0E7E7',
            banner: '#E4A4A4',
        }
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            fonts: {
                rubik: 'Rubik:400,500,700,900'
            }
        }),
    ],
})