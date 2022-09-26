'use strict'
const fs = require('fs')
const path =  require('path')
const jsdom = require('jsdom')

const html = fs.readFileSync(path.resolve(__dirname,'../index.html'), 'utf8')
let dom
let container

describe('index.html loads', () => {
    beforeEach(() => {
        dom = new jsdom.JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
      })

      it('renders a heading element', () => {
        expect(container.querySelector('#result')).not.toBeNull()
        //expect(getByText(container, 'Pun Generator')).toBeInTheDocument()
      })
})


