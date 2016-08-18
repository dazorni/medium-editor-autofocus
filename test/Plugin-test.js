import MediumEditorAutofocus from '../src/Plugin';

describe('Plugin', () => {
	let container, editor, plugin;

	beforeEach(() => {
		container = document.createElement('div');
		container.classList.add('editable');
		document.body.appendChild(container);
	});

	afterEach(() => {
		editor.destroy();
	});

	it('Simple init should not fail', () => {
    expect(document.activeElement.classList.contains('editable')).toBe(false);

		plugin = new MediumEditorAutofocus();
		editor = new MediumEditor('.editable', {
			extensions: {
				insert: plugin
			}
		 });

    expect(document.activeElement.classList.contains('editable')).toBe(true);
	});
});

