describe('Google chrome', () => {

  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });

  it('sshoot', async () => {
    //const page = await browser.newPage();
    //await page.goto('http://localhost:5500/examples/spread.html');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});