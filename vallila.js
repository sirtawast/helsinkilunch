const Xray = require('x-ray')
const x = Xray()

const jsonPath = "./static/crawled";

x('https://www.africanpots.fi/', '.row.sqs-row', [
  {
    content: '.col.sqs-col-6.span-6:nth-of-type(1)',
  }
]).write(`${jsonPath}/africanpots.json`)

x('https://www.aliceitalian.fi/lounas', '#comp-k0qgtauiinlineContent-gridContainer ', [
  {
    content: '.txtNew:last-child',
  }
]).write(`${jsonPath}/alice.json`)

x('https://www.rockskallio.fi/lounas/', '.entry-content', [
  {
    content: '.elementor-text-editor',
  }
]).write(`${jsonPath}/rocks.json`)
  
  x('https://www.sture4.fi/lounas', '.wpb_wrapper.tabbed', [
  {
    content:  ['.wpb_tab'],
  }
]).write(`${jsonPath}/sture4.json`)
  
x('http://rupla.fi/cafe/', '.dslc-modules-section:nth-of-type(3) ', [
  {
    content: '.dslc-text-module-content div',
  }
]).write(`${jsonPath}/rupla.json`)

x('https://www.facebook.com/Harju8', '#PagesProfileHomePrimaryColumnPagelet ', [
  {
    content: '[data-testid="post_message"]',
  }
]).write(`${jsonPath}/harju8.json`)

x('https://www.antell.fi/vaaksy/', '.lunch-menu-days', [
  {
    content: '.lunch-menu-language',
  }
]).write(`${jsonPath}/antell-vaaksy.json`)

x('https://kellohalli.fi/ravintola', 'main', [
  {
    content: '.lunch-menu',
  }
]).write(`${jsonPath}/kellohalli.json`)
