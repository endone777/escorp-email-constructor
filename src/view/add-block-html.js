export const createAddBlockHtmlTemplate = () => (
  `<div class="container">
    <div class="row text-center p-4">
      <div class="col-12">
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button
            class="btn btn-outline-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Добавиль блок
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark addBlock-dropdown"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <h6 class="dropdown-header">Изображения</h6>
            </li>
            <li>
              <a class="dropdown-item" data-blocktype="banner" href="#"
                >Баннер</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><h6 class="dropdown-header">Товары</h6></li>
            <li>
              <a class="dropdown-item" data-blocktype="twocols" href="#"
                >2 колонки</a
              >
            </li>
            <li>
              <a class="dropdown-item" data-blocktype="onecol" href="#"
                >1 колонка</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><h6 class="dropdown-header">Блоки</h6></li>
            <li>
              <a class="dropdown-item" data-blocktype="voting" href="#"
                >Оценка серии</a
              >
            </li>
          </ul>
          <button type="button" class="btn btn-primary generatMJML">
            Сгенерировать MJML
          </button>
        </div>
      </div>
    </div>
  </div>`
);
