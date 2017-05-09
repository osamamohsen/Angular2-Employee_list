import { Angular2employeeListPage } from './app.po';

describe('angular2employee-list App', () => {
  let page: Angular2employeeListPage;

  beforeEach(() => {
    page = new Angular2employeeListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
