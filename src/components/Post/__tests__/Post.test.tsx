import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });

    it('Should zoom in and out when image is clicked', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        const image = screen.getByAltText('Conteúdo visual do post');

        fireEvent.click(image);

        expect(image).toHaveClass('zoomed');

        fireEvent.click(image);

        expect(image).not.toHaveClass('zoomed');
    });

    it('Should render comments section', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});