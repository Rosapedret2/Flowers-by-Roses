const {reloadPage} = require('../javascript/js')

describe("test window location's reload function", () => {
    const original = window.location;
  
    const reloadPage = () => {
      window.location.reload();
    };
  
    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload: jest.fn() },
      });
    });
  
    afterAll(() => {
      Object.defineProperty(window, 'location', { 
        configurable: true, 
        value: original });
    });
  
    it('mocks reload function', () => {
      expect(jest.isMockFunction(window.location.reload)).toBe(true);
    });
  
    it('calls reload function', () => {
      reloadPage();
      expect(window.location.reload).toHaveBeenCalled();
    });
  });