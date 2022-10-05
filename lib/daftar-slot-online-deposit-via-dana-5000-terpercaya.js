'use babel';

import DaftarSlotOnlineDepositViaDana5000TerpercayaView from './daftar-slot-online-deposit-via-dana-5000-terpercaya-view';
import { CompositeDisposable } from 'atom';

export default {

  daftarSlotOnlineDepositViaDana5000TerpercayaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.daftarSlotOnlineDepositViaDana5000TerpercayaView = new DaftarSlotOnlineDepositViaDana5000TerpercayaView(state.daftarSlotOnlineDepositViaDana5000TerpercayaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.daftarSlotOnlineDepositViaDana5000TerpercayaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'daftar-slot-online-deposit-via-dana-5000-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.daftarSlotOnlineDepositViaDana5000TerpercayaView.destroy();
  },

  serialize() {
    return {
      daftarSlotOnlineDepositViaDana5000TerpercayaViewState: this.daftarSlotOnlineDepositViaDana5000TerpercayaView.serialize()
    };
  },

  toggle() {
    console.log('DaftarSlotOnlineDepositViaDana5000Terpercaya was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
