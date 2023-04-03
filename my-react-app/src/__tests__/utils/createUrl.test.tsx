import { createUrl } from '../../core/utils/createUrl';
import { expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

test('should return empty string when target is null', () => {
  const result = createUrl(null);
  expect(result).toEqual('');
});
