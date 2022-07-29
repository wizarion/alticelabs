import { cleanup } from '@testing-library/react';
import { createUserStructure } from './useService';

import completedMock from '../mocks/mock.json';
import usersMock from '../mocks/usersMock.json';
import postsMock from '../mocks/postsMock.json';

describe('Testing useService', () => {

  afterEach(() => {
    cleanup();
  });

  it('should return a completed user object with all their respective posts.', () => {
    const response = createUserStructure(usersMock, postsMock);

    expect(response).toMatchObject(completedMock);
  });
});