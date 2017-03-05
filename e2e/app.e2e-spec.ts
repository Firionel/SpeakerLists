import { SpeakerListsPage } from './app.po';

describe('speaker-lists App', function() {
  let page: SpeakerListsPage;

  beforeEach(() => {
    page = new SpeakerListsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
