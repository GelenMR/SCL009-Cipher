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
    it('deberia retornar numeros "1234567890" para "4567890123" con offset 33',() => {
      assert.equal(window.cipher.encode(33, '01-06-1983'), '34-39-4216');
    });
    it('deberia retornar "&" para "ñ" con offset 13',() => {
      assert.equal(window.cipher.encode(13, 'Muñeca'), 'Zh&rpn');
    });
    it('deberia retornar "%" para "Ñ" con offset 19',() => {
      assert.equal(window.cipher.encode(19, 'ÑAME'), '%TFX');
    });
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
    it('debería retornar espacios y/o caracteres especiales que se encuentren en el mensaje cifrado con offset 15', () => {
      assert.equal(window.cipher.decode(15, 'Wdap Bjcsd!'), 'Hola Mundo!');
    });
    it('deberia retornar numeros "4567890123" para "1234567890" con offset 33',() => {
      assert.equal(window.cipher.decode(33, '34-39-4216'), '01-06-1983');
    });
    it('deberia retornar "&" para "ñ" con offset 13',() => {
      assert.equal(window.cipher.decode(13, 'Zh&rpn'), 'Muñeca');
    });
    it('deberia retornar "%" para "Ñ" con offset 19',() => {
      assert.equal(window.cipher.decode(19, '%TFX'), 'ÑAME');
    });
  });

});
