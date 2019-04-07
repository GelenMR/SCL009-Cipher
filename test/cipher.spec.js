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
    it('debería retornar "uvwxyzabcdefghijklmnopqrst" para "abcdefghijklmnopqrstuvwxyz" con offset 20', () => {
      assert.equal(window.cipher.encode(20, 'chao'), 'wbui');
    });
    it('debería retornar espacios y/o caracteres especiales que se encuentren en el mensaje original', () => {
      assert.equal(window.cipher.encode(15, 'Hola Mundo!'), 'Wdap Bjcsd!');
    });
    // it('deberia ser un numero',() => {
    //   assert.equal(typeof offset, 'number');
    // });
    // it('deberia ser un string',() => {
    //   assert.equal(typeof textToEncode, 'string');
    // });
    // it('deberia ser un string',() => {
    //   assert.equal(typeof resultEncode, 'string');
    // });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33, 'OVSH'), 'HOLA');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "uvwxyzabcdefghijklmnopqrst" con offset 20', () => {
      assert.equal(window.cipher.decode(20, 'wbui'), 'chao');
    });
    it('debería retornar espacios y/o caracteres especiales que se encuentren en el mensaje cifrado', () => {
      assert.equal(window.cipher.decode(15, 'Wdap Bjcsd!'), 'Hola Mundo!');
    });
  });

});
