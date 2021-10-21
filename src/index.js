let model = [];

const dataBase = document.createElement('script')
dataBase.src = 'https://eurosvet.info/app/js/db.js'
document.head.append(dataBase)
dataBase.onload = () => {
  chengeStatusLoad()
}
const chengeStatusLoad = () => {
  const statusBd = document.querySelector('.statusBd')
  if (statusBd.classList.contains('bg-danger')) {
    statusBd.classList.remove('bg-danger')
    statusBd.classList.add('bg-success')
    statusBd.innerHTML = 'OK'
  }
}

function addBlock(type) {
  let tplContainer = $("#tpl-container")
  if (type === "banner") {
    let ident = "banner-" + model.length,
      tplBanner = `
            <div class="row item">
                <div class="col-12 p-4">
                <h4>Баннер</h4>
                <p class="text-muted mb-0">Изображение 650&times;650px</p>
                <input
                    type="text"
                    name=""
                    id="${ident}"
                    class="form-control my-2"
                    placeholder=""
                />
                </div>
            </div>
        `;
    model.push({
      type: type,
      id: ident,
    });
    tplContainer.append(tplBanner);
  }
  if (type === "twocols") {
    let ident = "twocols-" + model.length,
      tplTwocols = `
            <div class="row item">
                <div class="col-6 p-4">
                    <h4>Светильник</h4>
                    <p class="text-muted mb-0">Композит</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-code-l"
                        class="form-control my-2 composite"
                        placeholder=""
                    />
                    <small id="${ident}-error" class="badge bg-danger" style="display:none;"></small>
                    <p class="text-muted mb-0">Изображение 400&times;400px</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-photo-l"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Артикул</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-art-l"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Характеристики</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-th-l"
                        class="form-control my-2"
                        placeholder=""
                    />
                </div>
                <div class="col-6 p-4">
                    <h4>Светильник</h4>
                    <p class="text-muted mb-0">Композит</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-code-r"
                        class="form-control my-2 composite"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Изображение 400&times;400px</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-photo-r"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Артикул</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-art-r"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Характеристики</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-th-r"
                        class="form-control my-2"
                        placeholder=""
                    />
                </div>
            </div>
        `;
    model.push({
      type: type,
      id: ident,
    });
    tplContainer.append(tplTwocols);
  }
  if (type === "onecol") {
    let ident = "onecol_" + model.length,
      tplOnecol = `
            <div class="row item">
                <div class="col-12 p-4">
                    <h4>Светильник</h4>
                    <p class="text-muted mb-0">Композит</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-code"
                        class="form-control my-2 composite"
                        placeholder=""
                    />
                    <small id="${ident}-error" class="badge bg-danger" style="display:none;"></small>
                    <p class="text-muted mb-0">Изображение 600&times;260px</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-photo"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Артикул</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-art"
                        class="form-control my-2"
                        placeholder=""
                    />
                    <p class="text-muted mb-0">Характеристики</p>
                    <input
                        type="text"
                        name=""
                        id="${ident}-th"
                        class="form-control my-2"
                        placeholder=""
                    />
                </div>
            </div>
        `;
    model.push({
      type: type,
      id: ident,
    });
    tplContainer.append(tplOnecol);
  }
  if (type === "voting") {
    let ident = "voting-" + model.length,
      tplVoting = `
            <div class="row item">
                <div class="col-12 p-4">
                    <h4>Оценка серии</h4>
                    <p class="text-muted mb-0">Название для статистики</p>
                    <input type="text" name="" id="${ident}" class="form-control my-2"/>
                </div>
            </div>
        `;
    model.push({
      type: type,
      id: ident,
    });
    tplContainer.append(tplVoting);
  }
}
function generatMJML() {
  let folder = $("#emailFolder").val();
  result = model.reduce((acc, item) => {
    if (item["type"] === "banner") {
      let img = $(`#${item["id"]}`).val(),
        code = `
                <mj-section padding="0">
                    <mj-column width="100%">
                        <mj-image src="${folder}${img}" href="" width="650px" alt="" padding="0" />
                    </mj-column>
                </mj-section>`;
      return acc + code;
    }
    if (item["type"] === "twocols") {
      let code = `
                <mj-section padding="15px" background-color="#ffffff">
                    <mj-group>
                        <mj-column width="50%" padding="0px 10px" background-color="#ffffff">
                            <mj-image
                            padding="0"
                            src="${folder}${$('#' + item["id"] + '-photo-l').val()}"
                            alt="${$('#' + item["id"] + '-art-l').val()}"
                            href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code-l').val()}"
                            />
                            <mj-text font-size="16px" padding="10px 0px">
                            <b>${$('#' + item["id"] + '-art-l').val()}</b> <br />
                            ${$('#' + item["id"] + '-th-l').val()}
                            </mj-text>
                            <mj-button
                            css-class="button-wrap"
                            font-size="16px"
                            font-weight="300"
                            text-transform="uppercase"
                            border-radius="0"
                            padding="0px 0 20px 0px"
                            background-color="#ff5122"
                            color="white"
                            align="left"
                            href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code-l').val()}"
                            >
                            Заказать
                            </mj-button>
                        </mj-column>

                        <mj-column width="50%" padding="0px 10px" background-color="#ffffff">
                            <mj-image
                            padding="0"
                            src="${folder}${$('#' + item["id"] + '-photo-r').val()}"
                            alt="${$('#' + item["id"] + '-art-r').val()}"
                            href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code-r').val()}"
                            />
                            <mj-text font-size="16px" padding="10px 0">
                            <b>${$('#' + item["id"] + '-art-r').val()}</b> <br />
                            ${$('#' + item["id"] + '-th-r').val()}
                            </mj-text>
                            <mj-button
                            css-class="button-wrap"
                            font-size="16px"
                            font-weight="300"
                            text-transform="uppercase"
                            border-radius="0"
                            padding="0px 0 20px 0px"
                            background-color="#ff5122"
                            color="white"
                            align="left"
                            href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code-r').val()}"
                            >
                            Заказать
                            </mj-button>
                        </mj-column>
                    </mj-group>
                </mj-section>
                `;
      return acc + code;
    }
    if (item["type"] === "onecol") {
      let img = $(`#${item["id"]}`).val(),
        code = `
                <mj-section padding="15px" background-color="#ffffff">
                    <mj-group>
                        <mj-column width="100%" padding="0px 10px" background-color="#ffffff">
                            <mj-image padding="0" src="${folder}${$('#' + item["id"] + '-photo').val()}" alt="${$('#' + item["id"] + '-art').val()}" href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code').val()}"/>
                            <mj-text font-size="16px" padding="10px 0">
                                <b>${$('#' + item["id"] + '-art').val()}</b> <br>
                                ${$('#' + item["id"] + '-th').val()}
                            </mj-text>
                            <mj-button css-class="button-wrap" font-size="16px" font-weight="300" text-transform="uppercase" border-radius="0" padding="0 0 20px 0" background-color="#ff5122" color="white" align="left" href="http://eurosvet.ru/nomenclature/composite/${$('#' + item["id"] + '-code').val()}">
                                Заказать
                            </mj-button>
                        </mj-column>
                    </mj-group>
                </mj-section>`;
      return acc + code;
    }
    if (item["type"] === "voting") {
      let seria = $(`#${item["id"]}`).val(),
        code = `
                <mj-section background-color="#333333" full-width="full-width" padding="20px 0 0 0">
                    <mj-column width="100%" vertical-align="middle">
                        <mj-text align="center" padding="15px" color="#ffffff" font-size="18px" font-weight="400" line-height="24px" text-transform="uppercase">
                            Нравится серия?
                        </mj-text>
                    </mj-column>
                </mj-section>
                <mj-section padding="5px 15px 30px 15px" background-color="#333333">
                    <mj-group>
                        <mj-column> </mj-column>
                        <mj-column>
                            <mj-image align="center" width="40px" padding="0" src="https://eurosvet.ru/images/email/01-blank-newsletter/star1.png" href="https://eurosvet.ru/?utm_source=email&utm_medium=voting&utm_campaign=${seria}&utm_content=seria_${seria}&utm_term=one-star#thanks"/>
                        </mj-column>
                        <mj-column>
                            <mj-image align="center" width="40px" padding="0" src="https://eurosvet.ru/images/email/01-blank-newsletter/star2.png" href="https://eurosvet.ru/?utm_source=email&utm_medium=voting&utm_campaign=${seria}&utm_content=seria_${seria}&utm_term=two-star#thanks"/>
                        </mj-column>
                        <mj-column>
                            <mj-image align="center" width="40px" padding="0" src="https://eurosvet.ru/images/email/01-blank-newsletter/star3.png" href="https://eurosvet.ru/?utm_source=email&utm_medium=voting&utm_campaign=${seria}&utm_content=seria_${seria}&utm_term=three-star#thanks"/>
                        </mj-column>
                        <mj-column>
                            <mj-image align="center" width="40px" padding="0" src="https://eurosvet.ru/images/email/01-blank-newsletter/star4.png" href="https://eurosvet.ru/?utm_source=email&utm_medium=voting&utm_campaign=${seria}&utm_content=seria_${seria}&utm_term=four-star#thanks"/>
                        </mj-column>
                        <mj-column>
                            <mj-image align="center" width="40px" padding="0" src="https://eurosvet.ru/images/email/01-blank-newsletter/star5.png" href="https://eurosvet.ru/?utm_source=email&utm_medium=voting&utm_campaign=${seria}&utm_content=seria_${seria}&utm_term=five-star#thanks"/>
                        </mj-column>
                        <mj-column> </mj-column>
                    </mj-group>
                </mj-section>
                `;
      return acc + code;
    }
  }, "");
  let header = creatHeader(),
    editor = ace.edit("editor");

  editor.setValue('');
  editor.setValue(header + result + footer);
  editor.setOption({
    "maxLines": Infinity,
    "useSoftTabs": true,
    "theme": "ace/theme/chrome",
    "mode": "ace/mode/html",
  });
}
$(document).ready(() => {
  $('.paste').on('click', function (e) {
    e.preventDefault()
    let target = $(this).data('target'),
      value = $(this).attr('href')
    $(target).val(value)
  })
  $(".addBlock-dropdown a").on("click", function (e) {
    e.preventDefault();
    let $this = $(this),
      blockType = $this.data("blocktype");
    addBlock(blockType);
  });
  $(".generatMJML").on("click", function (e) {
    e.preventDefault();
    generatMJML();
  });
  $(document).on('change', '.composite', function () { getDataFromDb(this) })
});

function getDataFromDb(input) {
  let composite = $(input).val()
  ident = $(input).attr('id').split('-')[0]

  $(`#${ident}-error`).hide()

  if (db.products[composite]) {
    let product = db.products[composite]
    if ($(`#${ident}-photo`).val() === '') {
      $(`#${ident}-photo`).val(`${composite}.jpg`)
    }
    if ($(`#${ident}-art`).val() === '') {
      $(`#${ident}-art`).val(`${product.s} ${product.a} ${product.tp['Цвет арматуры']}`)
    }
    if ($(`#${ident}-th`).val() === '') {
      $(`#${ident}-th`).val(`${product.tp['Цоколь']}, ${product.tp['Количество ламп (шт.)']}x${product.tp['Максимальная мощность ламп (Вт)']} Вт, ${product.tp['Длина (мм)']}x${product.tp['Ширина (мм)']}x${product.tp['Высота (мм)'] !== undefined ? product.tp['Высота (мм)'] : (product.tp['Высота минимальная (мм)'] + '-' + product.tp['Высота максимальная (мм)'])} мм`)

    }
  } else {
    $(`#${ident}-error`).text(`${composite} не найден в базе`)
    $(`#${ident}-error`).show()
  }
}

function creatHeader() {
  let headerText = ''
  if ($('#headerText').val() !== '') {
    headerText = `
            <mj-section padding="0" background-color="#333333">
                <mj-column width="100%">
                    <mj-text font-size="14px" padding="0px 15px" color="#ffffff">
                        <p>${$('#headerText').val()}</p>
                    </mj-text>
                </mj-column>
            </mj-section>
        `
  }
  let tpl = `
        <mjml>
        <mj-head>
            <mj-title>${$('#emailTitle').val()}</mj-title>
            <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto:100,400,600,800,900"/>
            <mj-attributes>
                <mj-all font-family="'Roboto', sans-serif"></mj-all>
                <mj-text font-weight="400" font-size="16px" color="#212529" line-height="22px" font-family="'Roboto', sans-serif" ></mj-text>
            </mj-attributes>
            <mj-style>
            .body-section { -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px
            11px 0px rgba(0, 0, 0, 0.15); } table{background: transparent;} .text-link
            {color: #b9933a; text-decoration:none;} .twoCol {max-width:50%!important}
            .threeCol {max-width:33%!important} @media screen and (max-width:300px){
            .twoCol {max-width:100%!important} .threeCol {max-width:100%!important} }
            @media screen and (max-width:576px){ .twoCol{max-width:50%!important}
            .threeCol {max-width:33%!important} } @media screen and (max-width:991px){
            .twoCol{max-width:50%!important} .threeCol {max-width:33%!important} }
            .box-shadow { box-shadow: 0px 8px 16px rgba(0,0,0,.16); } .like-txt {
            font-size:24px; font-weight:100; color:#ffffff; text-align: center; }
            .main-btn { width:200px; } .main-btn a { color#ffffff; padding: 10px 75px;
            align:center; text-align:center; display:block; } .cabinet-btn {
            padding:10px; } .button-wrap table { width:100%; } .button-wrap table td {
            padding:10px 0 !important; width:100%; } .button-wrap a { padding:0px 0;
            width:100%; display:block; } .wrap_icons1 { text-align: center !important;
            } .txtlist {
            padding:0px;color:#e12831;font-size:2rem;vertical-align:middle; }
            </mj-style>
        </mj-head>
        <mj-body background-color="#E7E7E7" width="650px" max-width="650px">
            <mj-wrapper padding-top="0" padding-bottom="0" background-color="#ffffff" css-class="box-shadow">
            ${headerText}
            <mj-section padding="0">
                <mj-column width="100%">
                    <mj-image src="https://eurosvet.ru/images/email/01-blank-newsletter/logo.jpg" href="https://eurosvet.ru" width="650px" alt="https://eurosvet.ru" padding="0"/>
                </mj-column>
            </mj-section>`
  return tpl
}

let footer = `
        <mj-section background-color="#ffffff" full-width="full-width" padding="30px 15px" border-top="1px solid #ccc">
            <mj-group width="75%">
            <mj-column vertical-align="middle" padding="0">
                <mj-image align="center" src="https://eurosvet.ru/images/email/01-blank-newsletter/insta-logo.png" href="https://www.instagram.com/eurosvet_official/" width="38px" alt="instagram" padding="0"/>
            </mj-column>
            <mj-column vertical-align="middle" padding="0">
                <mj-image align="center" src="https://eurosvet.ru/images/email/01-blank-newsletter/YouTube.png" href="https://www.youtube.com/channel/UCNs-_xQ6KY_bdBx1WPQ1eZw" width="93px" alt="YouTube" padding="0"/>
            </mj-column>
            <mj-column vertical-align="middle" padding="0">
                <mj-image align="center" src="https://eurosvet.ru/images/email/01-blank-newsletter/fb.png" href="https://www.facebook.com/eurosvet.official" width="39px" alt="Facebook" padding="0"/>
            </mj-column>
            <mj-column vertical-align="middle" padding="0">
                <mj-image align="center" src="https://eurosvet.ru/images/email/01-blank-newsletter/pinterest.png" href="https://www.pinterest.ru/eurosvetsvet/" width="40px" alt="Pinterest" padding="0"/>
            </mj-column>
            </mj-group>
        </mj-section>

        <mj-section background-color="#ffffff" full-width="full-width" padding="0 15px 30px 15px">
            <mj-column width="50%" vertical-align="middle" padding="0 0 0 0px">
            <mj-image align="center" src="https://eurosvet.ru/images/email/01-blank-newsletter/cabinet-btn.png" href="https://eurosvet.ru/office/authorization" width="270px" height="39px" alt="личный кабинет" padding="0"/>
            </mj-column>
        </mj-section>
    </mj-wrapper>

    <mj-wrapper padding-top="0" padding-bottom="0">
      <mj-section full-width="full-width" padding="30px 15px"></mj-section>
    </mj-wrapper>
  </mj-body>
</mjml>`
