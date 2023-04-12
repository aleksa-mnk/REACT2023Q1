import { render, screen } from '@testing-library/react';
import SnackCard from '../../components/SnackCard/SnackCard';
import { describe, expect, it } from 'vitest';
import { ISnack } from '../../core/types';

/**
 * @vitest-environment jsdom
 */

const snack: ISnack = {
  image: '',
  ingredients: [],
  productionDate: '',
  snackName: 'Test',
  storageMode: '',
  taste: '',
};

describe('Test SnackCard component', () => {
  it('renders with correct text', () => {
    render(<SnackCard snack={snack} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
