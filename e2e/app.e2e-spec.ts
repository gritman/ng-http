import { NgHttpPage } from './app.po';

describe('ng-http App', () => {
  let page: NgHttpPage;

  beforeEach(() => {
    page = new NgHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
