function main() {
  const $appBlocks = document.querySelectorAll('[data-type="app-embed-block"]');

  Array.from($appBlocks).forEach(($appBlock) => {
    const blockId = $appBlock.dataset.blockId
    initAppBlockInstance($appBlock, blockId);
  })

  function initAppBlockInstance($el, blockId) {
    const $button = $el.querySelector('.app-embed-block__button')

    if ($button) {
      $button.addEventListener('click', () => {
        console.log('Clicked Me! blockId is ', blockId)
      })
    }
  }
}

main()