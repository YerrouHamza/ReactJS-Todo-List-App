import { render, screen } from '@testing-library/react';
import Headre from '../container/Header/header'

describe('Header Test', () => {
    // testing the header by check if the Todo word is in the Headre
    test('Title is It "TODO"', () => {
        render(<Headre />)
        const ElementText = screen.getByText(/todo/i)
        expect(ElementText).toBeInTheDocument();
    })
    
    // testing the header by check if the Title 
    test('Role is it header', () => {
        render(<Headre />)
        const ElementRole = screen.getByRole('heading')
        expect(ElementRole).toBeInTheDocument();
    })
    
    // testing the header by check the role and the name of the role
    test('Role is it have that "TODO" text inside', () => {
        render(<Headre />)
        const ElementRole = screen.getByRole('heading', { name: /todo/i})
        expect(ElementRole).toBeInTheDocument();
    })
    
    // testing the header by check the title attribute
    test('Title attribute is exist with text "todo app title"', () => {
        render(<Headre />)
        const ElementTitle = screen.getByTitle(/todo app title/i)
        expect(ElementTitle).toBeInTheDocument();
    })
    
    // testing the header by check the data-testid attribute
    test('data-testid attribute is exist with text "header-title"', () => {
        render(<Headre />)
        const ElemetById = screen.getByTestId('header-title')
        expect(ElemetById).toBeInTheDocument();
    })

    // test with find by
    test('Title is It "TODO" Await', async () => {
        render(<Headre />)
        const ElementText = await screen.findByText(/todo/i)
        expect(ElementText).toBeInTheDocument();
    })

    // test with query by for not found
    test('Title is not found', () => {
        render(<Headre />)
        const ElementText = screen.queryByText(/not/i)
        expect(ElementText).not.toBeInTheDocument();
    })

    // test by using get all by
    test('heading is exist only 1', () => {
        render(<Headre />)
        const ElementRole = screen.getAllByRole('heading')
        expect(ElementRole.length).toBe(1);
    })
})