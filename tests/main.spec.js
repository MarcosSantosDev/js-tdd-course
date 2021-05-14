import { expect } from 'chai';
import fizzBuzz from '../src/main';
/**
 * DESAFIO FizzBuzz
 *
 * Escreva um lib que receba um numero e:
 *
 * Se o número for divisivel por 3, no lugar do numero escreva 'Fizz'
 * Se o número for divisivel por 5, no lugar do numero escreva 'Buzz'
 * Se o número for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz'
 *
 * Se não for múltiplo de nada, retorna o numero
 */

describe('Calc', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the same number when dont multiple of 3 and 5', () => {
    expect(fizzBuzz(2)).to.be.equal(2);
    expect(fizzBuzz(4)).to.be.equal(4);
  });
});
