import { render } from '@testing-library/react';
import Card from './index';

describe('<Card name="Rihanna" image="src/assets/rihanna.jpg" highlight = "src/assets/rihanna-highlight.jpg" /> ', () => {
  describe('Snapshots', () => {
    describe('Simple Card', () => {
      it('should match snapshot with default Card', () => {
        const { container } = render(
          <Card
            name="Rihanna"
            image="src/assets/rihanna.jpg"
            highlight="src/assets/rihanna-highlight.jpg"
            color="#fff"
          />,
        );
        expect(container).toMatchSnapshot();
      });
    });
    describe('Simple Card', () => {
      it('should match snapshot with default Card without highlight', () => {
        const { container } = render(
          <Card name="Rihanna" image="src/assets/rihanna.jpg" color="#000" />,
        );
        expect(container).toMatchSnapshot();
      });
    });
    describe('Simple Card', () => {
      it('should match snapshot with default Card without color', () => {
        const { container } = render(
          <Card
            name="Rihanna"
            image="src/assets/rihanna.jpg"
            highlight="src/assets/rihanna-highlight.jpg"
          />,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
