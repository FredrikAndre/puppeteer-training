const puppeteer = require('puppeteer')
const dotenv = require('dotenv')
dotenv.config()

const url = process.env.WEB_URL

async function start() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)

  await page.click('a[href="/login"]')

  await page.type('#username', 'Testing')
  await page.type('#password', 'password')

  await page.click('input[value="Login"]')

  await page.click('a[href="/logout"]', { delay: 100 })

  await browser.close()
}

start()

// const getQuotes = await page.evaluate(() => {
//   const quotes = document.querySelectorAll('.quote')
//   let quoteArray = []
//   quotes.forEach((tag) => {
//     const quoteInfo = tag.querySelectorAll('span')
//     const actualQuote = quoteInfo[0]
//     const actualAuthor = quoteInfo[1]

//     const authorName = actualAuthor.querySelector('small')

//     quoteArray.push({
//       quote: actualQuote.innerText,
//       author: authorName.innerText,
//     })
//   })
//   return quoteArray
// })

// console.log(getQuotes)

//------------------------------------------------

// await page.screenshot({ path: 'website.png' })

// const getParagraph = await page.evaluate(() => {
//   const paragraphTag = document.querySelector('#ourform p')
//   return paragraphTag.innerHTML
// })

// const getInnerSpan = await page.evaluate(() => {
//   const innerSpan = document.querySelectorAll('.card span')
//   let span = []
//   innerSpan.forEach((tag) => {
//     span.push(tag.innerText)
//   })

//   return span
// })
