import { Angular2ConversorPage } from './app.po';

describe('angular2-conversor App', () => {
  let page: Angular2ConversorPage;

  beforeEach(() => {
    page = new Angular2ConversorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
