export const createHeaderHtmlTemplate = () => (
  `<div class="container">
      <div class="row bg-light item">
        <div class="col-12 p-4">
          <h2 class="d-inline-block">Header</h2>
          <button
            type="button"
            class="btn btn-secondary position-relative float-end"
          >
            Номенклатура
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
                statusBd
              "
            >
              X
              <span class="visually-hidden"></span>
            </span>
          </button>
          <div class="row">
            <div class="col-6">
              <p class="mb-0 text-muted">Текст в шапке</p>
              <textarea
                name=""
                id="headerText"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <div class="col-6">
              <p class="mb-0 text-muted">Тема письма</p>
              <input
                type="text"
                id="emailTitle"
                class="form-control mb-2"
                placeholder=""
              />
              <p class="mb-0 text-muted">Папка на сервере</p>
              <input
                type="text"
                id="emailFolder"
                class="form-control mb-2"
                placeholder=""
              />
              <small
                >например:
                <a
                  class="paste"
                  data-target="#emailFolder"
                  href="https://eurosvet.ru/images/email/2482/"
                  >https://eurosvet.ru/images/email/2482/</a
                ></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>`
);
