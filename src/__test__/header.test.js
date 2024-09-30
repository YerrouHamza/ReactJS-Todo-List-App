import { render, screen } from '@testing-library/react';
import Headre from '../container/Header/header'

test('Header Test', () => {
    render(<Headre />)
    const ElementText = screen.getByText(/Todo/i)
    expect(ElementText).toBeInTheDocument();
})