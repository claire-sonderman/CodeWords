import { CodeWordsPage } from './app.po';

describe('code-words App', () => {
  let page: CodeWordsPage;

  beforeEach(() => {
    page = new CodeWordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
