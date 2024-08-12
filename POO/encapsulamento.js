class Televisao {
  constructor(_relacaoDeCanais, _canalAtivo, _volume) {
    this._relacaoDeCanais = Array(2, 4, 5, 7, 10, 12);
    this._canalAtivo = 5;
    this._volume = 5;
  }
  getRelacaoDeCanais() {
    return this._relacaoDeCanais;
  }
  setRelacaoDeCanais(relacaoDeCanais) {
    this._relacaoDeCanais = relacaoDeCanais;
  }
  getCanalAtivo() {
    return this._canalAtivo;
  }
  setCanalAtivo(canalAtivo) {
    this._canalAtivo = canalAtivo;
  }
  getVolume() {
    return this._volume;
  }
  setVolume(volume) {
    this._volume = volume;
  }
}

let tv = new Televisao();
console.log(tv._canalAtivo);
console.log(tv._volume);
console.log(tv._relacaoDeCanais);

tv.setCanalAtivo(7);
tv.setVolume(10);
tv.setRelacaoDeCanais([2, 4, 5, 7, 10, 12, 13]);

console.log("Depois de alterar:");
console.log(tv.getCanalAtivo());
console.log(tv._volume);
console.log(tv._relacaoDeCanais);
