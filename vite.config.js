import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/* Добавляем необходимый импорт */
import * as path from 'path'

export default defineConfig({
  plugins: [vue()],
	
  /* Добавляем опцию для поиска путей */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})