var MediumEditor = require('medium-editor');

const MediumEditorAutofocus = MediumEditor.Extension.extend({
  name: 'autofocus',

  init() {
    if (this.getEditorElements().length < 1) {
      return;
    }

    this.getEditorElements()[0].focus();
  }
});

export default MediumEditorAutofocus;
