const colorMap = {
  0: '#2563eb', //blue
  1: '#84cc16', //green
  2: '#f97316', //orange
  3: '#a855f7', //purple,
  last: '#f43f5e', //rose
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getRanking() {
  const response = await fetch('https://mariokart.vercel.app/db.json');
  let ranking = await response.json();

  ranking = ranking.sort((a, b) => b.score - a.score);
  ranking[0].index = 1;
  ranking = ranking.map((item, index, array) => {
    const prevItem = index - 1 >= 0 && array[index - 1];

    if (item.score === prevItem.score) {
      item.index = prevItem.index;
    } else {
      item.index = index + 1;
    }

    item.color = item.color || colorMap[index] || (index + 4 >= ranking.length && colorMap['last']);

    return item;
  });
  return ranking;
}

function createElement(elem, className, text = '') {
  const $elem = document.createElement(elem);
  className && $elem.classList.add(className);
  $elem.textContent = text;
  return $elem;
}

async function sliceRanking() {
  const ranking = await getRanking();
  const pageSize = 8;
  const pages = [];

  while (pages.length < ranking.length / pageSize) {
    pages.push(ranking.slice(pages.length * pageSize, pageSize * (pages.length + 1)));
  }
  return pages;
}

function getRankingPageOl(rankingItems) {
  const $page = createElement('ol', 'ranking');
  $page.setAttribute('aria-hidden', true);
  const $items = rankingItems.map((item, index) => {
    const $item = document.createElement('li');
    $item.setAttribute('aria-hidden', true);
    if (item.color) {
      $item.classList.add('specialColor');
      $item.style.color = item.color;
    }
    const $position = createElement('h3', 'position');
    const $index = createElement('span', '', item.index);
    const $name = createElement('span', '', item.name);

    const $dots = createElement('span', 'dots', '............................');
    $dots.setAttribute('aria-hidden', true);

    $position.append($index, $name);

    const $score = createElement('h3', 'score', item.score);

    $item.append($position, $dots, $score);
    return $item;
  });

  $page.append(...$items);

  return $page;
}

async function itemsIteration($items, isHidden, reverse) {
  if (reverse) {
    for (let i = $items.length - 1; i >= 0; i--) {
      await sleep(200);
      $items[i].setAttribute('aria-hidden', isHidden);
    }
    return;
  }
  for (const $item of $items) {
    await sleep(200);
    $item.setAttribute('aria-hidden', isHidden);
  }
}

async function rankingAnimation($pages) {
  let reverse = false;
  while (true) {
    for (const $page of $pages) {
      $page.setAttribute('aria-hidden', false);

      await itemsIteration($page.childNodes, false, reverse);
      await sleep(5000);
      await itemsIteration($page.childNodes, true, reverse);

      $page.setAttribute('aria-hidden', true);
      reverse = !reverse;
    }
  }
}

async function main() {
  const $main = document.querySelector('main');

  const rankingPages = await sliceRanking();
  const $pages = [];
  rankingPages.forEach((page) => {
    $pages.push(getRankingPageOl(page));
  });

  $main.append(...$pages);
  rankingAnimation($pages);
}

main();
