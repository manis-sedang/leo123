'use babel';

import DaftarSlotOnlineDepositViaDana5000Terpercaya from '../lib/daftar-slot-online-deposit-via-dana-5000-terpercaya';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('DaftarSlotOnlineDepositViaDana5000Terpercaya', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('daftar-slot-online-deposit-via-dana-5000-terpercaya');
  });

  describe('when the daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.daftar-slot-online-deposit-via-dana-5000-terpercaya')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.daftar-slot-online-deposit-via-dana-5000-terpercaya')).toExist();

        let daftarSlotOnlineDepositViaDana5000TerpercayaElement = workspaceElement.querySelector('.daftar-slot-online-deposit-via-dana-5000-terpercaya');
        expect(daftarSlotOnlineDepositViaDana5000TerpercayaElement).toExist();

        let daftarSlotOnlineDepositViaDana5000TerpercayaPanel = atom.workspace.panelForItem(daftarSlotOnlineDepositViaDana5000TerpercayaElement);
        expect(daftarSlotOnlineDepositViaDana5000TerpercayaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle');
        expect(daftarSlotOnlineDepositViaDana5000TerpercayaPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.daftar-slot-online-deposit-via-dana-5000-terpercaya')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let daftarSlotOnlineDepositViaDana5000TerpercayaElement = workspaceElement.querySelector('.daftar-slot-online-deposit-via-dana-5000-terpercaya');
        expect(daftarSlotOnlineDepositViaDana5000TerpercayaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle');
        expect(daftarSlotOnlineDepositViaDana5000TerpercayaElement).not.toBeVisible();
      });
    });
  });
});
