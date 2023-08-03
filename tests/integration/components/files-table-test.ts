import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import type { RenderingTestContext } from '@ember/test-helpers';

module('Integration | Component | files-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: RenderingTestContext, assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{files-table}}`);

    assert.equal(this.element.textContent?.trim(), '');

    // Template block usage:
    await render(hbs`
      <FilesTable>
        template block text
      </FilesTable>
    `);

    assert.equal(this.element.textContent?.trim(), 'template block text');
  });
});
