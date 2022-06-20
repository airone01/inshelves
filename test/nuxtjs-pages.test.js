import { Nuxt } from 'nuxt';
import { setup } from '@nuxt/test-utils-edge'
import nuxtConfig from '@/nuxt.config';
import constants from '@/test/constants';

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

beforeAll(async () => {
  nuxt = new Nuxt({ ...nuxtConfig, buildDir: constants.buildDir })

  await nuxt.server.listen(constants.port, 'localhost')
}, 300000)

// Testing only generated HTML
describe('GET /', async () => {
  await setup({
  })

  test('Route / exists and render HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/', {})

    expect(html).toContain('nuxt')
  });
})