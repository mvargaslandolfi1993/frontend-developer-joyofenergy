import { renderCart } from '.'

describe('#card renderCart', () => {
  it('should renderCart', () => {
    const card = renderCart('Cost', 10, '$')

    let html = `
        <div class="card px2 py1 shadow-2">
            <h2>Cost</h2>
            <h4 class="w-full py1">10</h4>
            <span class="w-full">$</span>
        </div>
    `

    expect(card).toEqual(html)
  })
})
