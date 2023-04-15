const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

while (walker.nextNode()) {
  const node = walker.currentNode;
  const words = node.textContent.trim().split(/\s+/);

  const newWords = words.map(word => {
    const halfLength = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);
    return `<strong>${firstHalf}</strong>${secondHalf}`;
  });

  if (newWords.length) {
    const span = document.createElement('span');
    span.innerHTML = newWords.join(' ');
    node.replaceWith(span);
  }
}
