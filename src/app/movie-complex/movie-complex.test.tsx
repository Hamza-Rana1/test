import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MovieComplex from './movie-complex';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders MovieComplex component', () => {
  const wrapper = render(<MovieComplex />);
  expect(wrapper).toBeTruthy();
});