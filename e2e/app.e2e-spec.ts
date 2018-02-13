import { SealCarMakerPage } from './app.po';

describe('seal-car-maker App', () => {
  let page: SealCarMakerPage;

  beforeEach(() => {
    page = new SealCarMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
