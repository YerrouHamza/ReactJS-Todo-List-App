import { render, screen } from '@testing-library/react';
import ListCount from '../Component/count-list/count-list';


describe('List Count Test', () => {
    test('List count is 0', () => {
        render(<ListCount todoCount={0} />);
        const countElement = screen.getByText(/nothing to do/i);
        expect(countElement).toBeInTheDocument();  
    })

    test('List count is 1', () => {
        render(<ListCount todoCount={1} />);
        const countElement = screen.getByText(/item left/i);
        expect(countElement).toBeInTheDocument();  
    })

    test('List count is more than 1', () => {
        render(<ListCount todoCount={3} />);
        const countElement = screen.getByText(/items left/i);
        expect(countElement).toBeInTheDocument();
    })
})