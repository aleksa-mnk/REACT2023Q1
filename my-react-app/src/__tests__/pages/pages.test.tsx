import { HEADER_LINKS, PATHS } from '../../core/constants/routes';
import { describe, expect, it } from 'vitest';

describe('PATHS', () => {
  it('exports the expected values', () => {
    expect(PATHS).toEqual({
      HOME: '/',
      ABOUT: '/about',
      FORM: '/form',
    });
  });
});

describe('HEADER_LINKS', () => {
  it('contains the correct routes', () => {
    expect(HEADER_LINKS).toEqual([
      { path: PATHS.HOME, name: 'Home' },
      { path: PATHS.ABOUT, name: 'About' },
      { path: PATHS.FORM, name: 'Form' },
    ]);
  });
});
