import React from 'react';
import {getByText, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import FormCard from './FormCard';

describe('FormCard', () => {
    const mockCard = {
        title: 'John Doe',
        date: '2022-01-01',
        country: 'USA',
        pack: true,
        delivery: false,
        transfer: true,
        pay: 'card',
        profilePicture: 'https://example.com/profile.png',
    };

    it('should render the card title', () => {
        const { getByText } = render(<FormCard card={mockCard} />);
        expect(getByText(`Name: ${mockCard.title}`)).toBeInTheDocument();
    });

    it('should render the card date', () => {
        const { getByText } = render(<FormCard card={mockCard} />);
        expect(getByText(`Date: ${mockCard.date}`)).toBeInTheDocument();
    });

    it('should render the card country', () => {
        const { getByText } = render(<FormCard card={mockCard} />);
        expect(getByText(`Country: ${mockCard.country}`)).toBeInTheDocument();
    });

    it('should render the card options', () => {
        const { getByText } = render(<FormCard card={mockCard} />);
        expect(getByText('Options:')).toBeInTheDocument();
        expect(getByText('pack')).toBeInTheDocument();
        expect(getByText('transfer')).toBeInTheDocument();
    });

    it('should render the card payment method', () => {
        const { getByText } = render(<FormCard card={mockCard} />);
        expect(getByText(`Pay: ${mockCard.pay}`)).toBeInTheDocument();
    });
});
