import { test, expect } from '@playwright/test';

test('Get user', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
expect(response.ok()).toBeTruthy();
});
