import { NgxDgeniStartPage } from './app.po';

describe('ngx-dgeni-start App', () => {
  let page: NgxDgeniStartPage;

  beforeEach(() => {
    page = new NgxDgeniStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
