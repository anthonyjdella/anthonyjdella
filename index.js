const fs = require('fs')
const getWeather = require('./weather')

function writeHeader() {
  return `
<a href="#"><img width="100%" height="auto" src="https://i.imgur.com/iXuL1HG.png" height="175px"/></a>

<h1 align="center">Hello there! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"> I'm <a href="https://www.anthonydellavecchia.com">Anthony</h1>

<h3 align="center">Software Developer | Photographer | Designer</h3>

---`
}

function writeContent() {
  return '
- 🖥️ I’m currently working on a web application that will serve State Farm agents so that they can better serve their customers.

- ⏮️ I formally worked on a web application for Bank of America associates which routes customer appointments.

- 🐍 I’m learning Python and grinding Leetcode.

- 🐻 I’m also working on my Masters from UCLA.'
}

function writeFooter() {
  return `
<p align="center">
  <a href="https://github-readme-stats.vercel.app/api?username=anthonyjdella&show_icons=true">
   <img alt="Anthony's Stats" src="https://github-readme-stats.vercel.app/api?username=anthonyjdella&show_icons=true)" />
  </a>
</p>


<p align="center">
  <img src="https://komarev.com/ghpvc/?username=anthonyjdella" />
</p>


<p align="center">
  <a href = "https://www.anthonydellavecchia.com"><img src="https://img.icons8.com/cotton/48/000000/website--v1.png"/>
  <a href = "https://www.linkedin.com/in/anthonydellavecchia/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
  <a href = "https://twitter.com/anthonyjdella"><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></a>
  <a href = "https://www.instagram.com/anthonyjdella"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
</p>`
}

function writeBlankLine(times = 1) {
  return '\n'.repeat(times)
}

async function main() {
  const writeTasks = [writeHeader, writeContent, getWeather, writeFooter]
  const writeContent = await writeTasks.reduce(async (result, curr) => {
    const arr = await result
    const str = await curr()
    arr.push(str)
    return arr
  }, [])
  const pageContent = writeContent
    .join(writeBlankLine(2))
    .concat(writeBlankLine())
  fs.writeFileSync('README.md', pageContent)
}

main()
