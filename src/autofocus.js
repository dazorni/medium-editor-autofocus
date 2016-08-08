'use strict';

var MediumEditorAutofocus = MediumEditor.Extension.extend({
  name: 'autofocus',

  init: function () {
    if (this.getEditorElements().length < 1) {
      return;
    }

    this.getEditorElements()[0].focus();
  }
});
