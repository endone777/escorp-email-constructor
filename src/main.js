import { createHeaderHtmlTemplate } from './view/header-html.js';
import { createAddBlockHtmlTemplate } from './view/add-block-html.js';
import { createCodeBlockHtmlTemplate } from './view/code-block-html.js';
import { createTplBlockHtmlTemplate } from './view/tpl-block-html.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('header');
const siteMainElement = document.querySelector('main');
const siteAddBlockElement = siteMainElement.querySelector('.add-block');
const siteTplBlockElement = siteMainElement.querySelector('.tpl-block');
const siteFooterElement = document.querySelector('footer');

render(siteHeaderElement, createHeaderHtmlTemplate(), 'beforeend');
render(siteAddBlockElement, createAddBlockHtmlTemplate(), 'beforeend');
render(siteFooterElement, createCodeBlockHtmlTemplate(), 'beforeend');
