import { HierarchicalAppPage } from './app.po';

describe('hierarchical-app App', function() {
  let page: HierarchicalAppPage;

  beforeEach(() => {
    page = new HierarchicalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
