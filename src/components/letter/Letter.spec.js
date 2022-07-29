import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Letter from '../letter/Letter';

import dataMock from '../../mocks/mock.json';

describe('Testing Letter', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render Letter component', () => {
    const { getByTestId } = render(<Letter users={dataMock} />);

    const letterComponent = getByTestId('letter-component');
    
    expect(letterComponent).toBeInTheDocument();
  });

  it('should output users with posts inside the PrettyData', () => {
    const { getByTestId } = render(<Letter users={dataMock} />);

    const prettyData = getByTestId('pretty-data');

    expect(JSON.parse(prettyData.textContent)).toMatchObject(dataMock);
  });
})