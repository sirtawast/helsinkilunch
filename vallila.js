const Xray = require('x-ray')
const x = Xray()

const jsonPath = "./static/crawled";

x('https://www.africanpots.fi/', '.row.sqs-row', [
  {
    content_1: '.col.sqs-col-6.span-6:nth-of-type(1)',
  }
]).write(`${jsonPath}/africanpots.json`)

x('https://www.aliceitalian.fi/lounas', '#comp-k0qgtauiinlineContent-gridContainer ', [
  {
    content_1: '.txtNew:last-child',
  }
]).write(`${jsonPath}/alice.json`)

x('https://www.rockskallio.fi/lounas/', '.entry-content', [
  {
    content_1: '.elementor-text-editor',
  }
]).write(`${jsonPath}/rocks.json`)
  
  x('https://www.sture4.fi/lounas', '.wpb_content_element', [
  {
    content_1: '.wpb_wrapper.tabbed',
  }
]).write(`${jsonPath}/sture4.json`)

  
x('http://rupla.fi/cafe/', '.dslc-modules-section:nth-of-type(3) ', [
  {
    content_1: '.dslc-text-module-content div',
  }
]).write(`${jsonPath}/rupla.json`)

x('https://www.facebook.com/Harju8', '#PagesProfileHomePrimaryColumnPagelet ', [
  {
    content_1: '[data-testid="post_message"]',
  }
]).write(`${jsonPath}/harju8.json`)

x('https://www.antell.fi/vaaksy/', '.lunch-menu-days', [
  {
    content_1: '.lunch-menu-language',
  }
]).write(`${jsonPath}/antell-vaaksy.json`)
  

x('https://kellohalli.fi/ravintola', 'main', [
  {
    content_1: '.lunch-menu',
  }
]).write(`${jsonPath}/kellohalli.json`)
  
