const test = async () => {

  console.log(`Attempting a simple test`)
  
  var page = await require('./main.js')('https://google.com')
  const e = await page.evaluate('1+1')
  console.log(e==2 ? `1 + 1 = ${e} - ok`:`Error cannot eval JS`)
  console.log(await page.evaluate('location.href')) 
  process.exit(0)

}

test().catch(console.error)
