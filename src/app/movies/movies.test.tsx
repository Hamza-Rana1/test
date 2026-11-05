import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Movies from './movies';
import 'element-internals-polyfill';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Movies component', () => {
  const wrapper = render(<Movies />);
  expect(wrapper).toBeTruthy();
});