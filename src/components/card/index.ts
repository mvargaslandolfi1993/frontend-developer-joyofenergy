export const renderCart = (title: string, value: number | string, type: string): any => {
  let html = `
        <div class="card px2 py1 shadow-2">
            <h2>${title}</h2>
            <span class="w-full">${value}</span>
            <span class="w-full">${type}</span>
        </div>
    `

  return html
}
