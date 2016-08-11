'use strict';

(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.MediumEditorAutofocus = factory;
    }
}(this, function (MediumEditor) {

  var MediumEditorAutofocus = MediumEditor.Extension.extend({
    name: 'autofocus',

    init: function () {
      if (this.getEditorElements().length < 1) {
        return;
      }

      this.getEditorElements()[0].focus();
    }
  });

  return MediumEditorAutofocus;

}(typeof require === 'function' ? require('medium-editor') : MediumEditor)));

