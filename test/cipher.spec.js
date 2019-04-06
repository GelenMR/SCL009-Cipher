describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode(33, 'HOLA'), 'OVSH');
    });
    it('deberia ser un numero',() => {
      assert.equal(typeof offset, 'number');
    });
    it('deberia ser un string',() => {
      assert.equal(typeof textToEncode, 'string');
    });
    it('deberia ser un string',() => {
      assert.equal(typeof resultEncode, 'string');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33, 'OVSH'), 'HOLA');
    });
  });

});
