import { expect } from 'chai';
import {
  sum,
  sub,
  mult,
  div,
} from '../src/main';

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sub(8, 4)', () => {
      expect(sub(8, 4)).to.be.equal(4);
    });

    it('should return -4 when sub(4, 8)', () => {
      expect(sub(4, 8)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when div(4, 2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `It is not possible to divide by zero!` when div(4, 0)', () => {
      expect(div(4, 0)).to.be.equal('It is not possible to divide by zero!');
    });
  });
});
