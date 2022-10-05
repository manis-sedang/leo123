'use babel';

export default class DaftarSlotOnlineDepositViaDana5000TerpercayaView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('daftar-slot-online-deposit-via-dana-5000-terpercaya');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The DaftarSlotOnlineDepositViaDana5000Terpercaya package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
