import Student from "./constructor.js";

(() => {
  const students = [
    new Student('Дача', 'Алена', 'Евгеньевна', new Date(1983, 11, 7), new Date(2022, 7, 13), 'Ботаники',),
    new Student('Викторов', 'Виктор', 'Викторович', new Date(1997, 6, 22), new Date(2009, 9, 11), 'Экономики',),
    new Student('Попов', 'Георгий', 'Сергеевич', new Date(1992, 4, 21), new Date(2018, 3, 3), 'Естественных наук',),
    new Student('Смирнова', 'Яна', 'Игоревна', new Date(1995, 2, 23), new Date(2000, 8, 13), 'Экологии',),
  ]

  function createContainer() {
    const $container = document.createElement('div');
    $container.classList.add('container');
    document.body.append($container);
    return $container;
  }
  createContainer();

  const $wrap = document.querySelector('.container');
  let column = 'name';
  let directionColumn = true;

  function createHeader() {
    const $head = document.createElement('h1');
    $head.classList.add('head');
    $head.textContent = 'Список студентов';
    $wrap.append($head);
    $head.style.textAlign = 'center';
    return $head;
  }

  createHeader();

  function createForm() {
    const $form = document.createElement('form');
    $form.style.display = 'flex';
    $form.style.justifyContent = 'center';
    $form.style.marginBottom = '20px';

    const $divRow = document.createElement('div');
    const $divCol = document.createElement('div');
    const $divColSurname = document.createElement('div');
    const $divColLastName = document.createElement('div');
    const $divColBirthdate = document.createElement('div');
    const $divColStarStudy = document.createElement('div');
    const $divColFaculty = document.createElement('div');
    const $divColBtn = document.createElement('div');

    const $labelName = document.createElement('label');
    const $labelSurname = document.createElement('label');
    const $labelLastName = document.createElement('label');
    const $labelBirthdate = document.createElement('label');
    const $labeStartStudy = document.createElement('label');
    const $labelFaculty = document.createElement('label');

    $labelName.classList.add('label', 'label-name', 'error-hidden');
    $labelSurname.classList.add('label', 'label-surname', 'error-hidden');
    $labelLastName.classList.add('label', 'label-lastname', 'error-hidden');
    $labelBirthdate.classList.add('label', 'label-birthdate', 'error-hidden');
    $labeStartStudy.classList.add('label', 'label-startstudy', 'error-hidden');
    $labelFaculty.classList.add('label', 'label-faculty', 'error-hidden');

    $labelName.style.color = 'red';
    $labelSurname.style.color = 'red';
    $labelLastName.style.color = 'red';
    $labelBirthdate.style.color = 'red';
    $labeStartStudy.style.color = 'red';
    $labelFaculty.style.color = 'red';

    const $inputName = document.createElement('input');
    const $inputSurname = document.createElement('input');
    const $inputLastName = document.createElement('input');
    const $inputBirthDate = document.createElement('input');
    const $inputStartStudy = document.createElement('input');
    const $inputFaculty = document.createElement('input');

    $inputName.classList.add('name', 'form-control', 'input-form');
    $inputSurname.classList.add('surname', 'form-control', 'input-form');
    $inputLastName.classList.add('lastname', 'form-control', 'input-form');
    $inputBirthDate.classList.add('birthdate', 'form-control', 'input-form');
    $inputStartStudy.classList.add('startstudy', 'form-control', 'input-form');
    $inputFaculty.classList.add('faculty', 'form-control', 'input-form');

    const $btnAdd = document.createElement('button');

    $inputName.placeholder = 'Введите имя';
    $inputSurname.placeholder = 'Введите фамилию';
    $inputLastName.placeholder = 'Введите отчество';
    $inputFaculty.placeholder = 'Название факультета';
    $btnAdd.textContent = 'Добавить';

    $inputBirthDate.setAttribute('min', '1900-01-01');
    $inputBirthDate.setAttribute('max', '2022-12-31');

    $inputStartStudy.setAttribute('min', '2000-01-01');
    $inputStartStudy.setAttribute('max', '2022-12-31');

    $form.classList.add('form');
    $divRow.classList.add('row');
    $btnAdd.classList.add('btn', 'btn-dark');

    $btnAdd.style.width = '100%';

    $divCol.classList.add('col');
    $divColSurname.classList.add('col');
    $divColLastName.classList.add('col');
    $divColBirthdate.classList.add('col');
    $divColStarStudy.classList.add('col');
    $divColFaculty.classList.add('col');
    $divColBtn.classList.add('col');

    $divCol.textContent = 'Имя';
    $divColSurname.textContent = 'Фамилия';
    $divColLastName.textContent = 'Отчество';
    $divColBirthdate.textContent = 'Дата рождения';
    $divColStarStudy.textContent = 'Начало обучения';
    $divColFaculty.textContent = 'Факультет';

    $inputName.type = 'text';
    $inputSurname.type = 'text';
    $inputLastName.type = 'text';
    $inputBirthDate.type = 'date';
    $inputStartStudy.type = 'date';
    $inputFaculty.type = 'text';

    $wrap.append($form);
    $form.append($divRow, $btnAdd);
    $divRow.append($divCol, $divColSurname, $divColLastName, $divColBirthdate, $divColStarStudy, $divColFaculty, $divColBtn);

    $divCol.append($inputName, $labelName);
    $divColSurname.append($inputSurname, $labelSurname);
    $divColLastName.append($inputLastName, $labelLastName);
    $divColBirthdate.append($inputBirthDate, $labelBirthdate);
    $divColStarStudy.append($inputStartStudy, $labeStartStudy);
    $divColFaculty.append($inputFaculty, $labelFaculty);
    $divColBtn.append($btnAdd);

    return $form;
  }
  createForm();

  function createHeaderFilter() {
    const $headFilter = document.createElement('h2');
    $headFilter.textContent = 'Фильтр';
    $headFilter.style.textAlign = 'center';
    $wrap.append($headFilter);
  }
  createHeaderFilter();

  function createFilter() {
    const $filterForm = document.createElement('form');
    $filterForm.style.marginBottom = '20px';
    $filterForm.classList.add('form');

    const $divRow = document.createElement('div');
    const $divColFio = document.createElement('div');
    const $divColFac = document.createElement('div');
    const $divColStart = document.createElement('div');
    const $divColFinish = document.createElement('div');

    $divRow.classList.add('row');
    $divColFio.classList.add('col');
    $divColFac.classList.add('col');
    $divColStart.classList.add('col');
    $divColFinish.classList.add('col');

    const $filterFio = document.createElement('input');
    const $filterStartStudy = document.createElement('input');
    const $filterFinish = document.createElement('input');
    const $filterFac = document.createElement('input');

    $filterFac.setAttribute('type', 'text');
    $filterFio.setAttribute('type', 'text');
    $filterStartStudy.setAttribute('type', 'text');
    $filterFinish.setAttribute('type', 'text');

    $filterFio.placeholder = 'ФИО';
    $filterStartStudy.placeholder = 'День рождения';
    $filterFinish.placeholder = 'Период обучения';
    $filterFac.placeholder = 'Факультет';

    $filterFio.classList.add('form-control', 'fio');
    $filterStartStudy.classList.add('form-control', 'startstudy-filter');
    $filterFinish.classList.add('form-control', 'finish-filter');
    $filterFac.classList.add('form-control', 'faculty-filter');

    $wrap.append($filterForm);
    $filterForm.append($divRow);
    $divRow.append($divColFio, $divColStart, $divColFinish, $divColFac);

    $divColFio.append($filterFio);
    $divColStart.append($filterStartStudy);
    $divColFinish.append($filterFinish);
    $divColFac.append($filterFac);
  }

  createFilter();

  function createTable() {
    const $table = document.createElement('table'),
      $thead = document.createElement('thead'),
      $tr = document.createElement('tr'),
      $fullName = document.createElement('th'),
      $birthdate = document.createElement('th'),
      $startStudy = document.createElement('th'),
      $faculty = document.createElement('th');

    $fullName.textContent = 'ФИО';
    $birthdate.textContent = 'День рождения';
    $startStudy.textContent = 'Начало обучения';
    $faculty.textContent = 'Факультет';

    $fullName.setAttribute('data-column', 'name');
    $birthdate.setAttribute('data-column', 'birthDate');
    $startStudy.setAttribute('data-column', 'startStudy');
    $faculty.setAttribute('data-column', 'faculty');

    $table.classList.add('table', 'table-dark', 'table-striped');
    $thead.classList.add('table-head');
    $tr.classList.add('tr');
    $fullName.classList.add('name', 'th');
    $birthdate.classList.add('birthdate', 'th');
    $startStudy.classList.add('startstudy', 'th');
    $faculty.classList.add('faculty', 'th');

    $table.append($thead);
    $thead.append($tr);
    $tr.append($fullName, $birthdate, $startStudy, $faculty);

    $wrap.append($table);

    return $table;
  }
  createTable();

  const $table = document.querySelector('.table');

  function createBodyTable() {
    const $tbody = document.createElement('tbody');
    $tbody.classList.add('tbody');
    $table.append($tbody);
    return $tbody;
  }
  createBodyTable();

 // function lowArr(arr) {
 //   let copyArray = [...arr];
 //   let mappedArr = copyArray.map((student) => {
   //   student.name.toLowerCase();
   //   student.faculty.toLowerCase();
  //  })
  //  return mappedArr;
 // }


  function filter(array, property, value) {
    let filterItem = [];
    let copyArray = [...array];
    for (let item of copyArray) {
      console.log(copyArray[item])
      if (String(item[property].toLowerCase()).includes(value) === true) {
        filterItem.push(item);
      }
    }
    return filterItem;
  }

  function getStudentsInfo() {
    let cloneStudents = [...students];
    let copyArray = cloneStudents.map((cloneStudent) => {
      const obj = {};
      obj.name = cloneStudent.firstname + ' ' + cloneStudent.lastname + ' ' + cloneStudent.surname;
      obj.birthDate = cloneStudent.getBirthDateString() + ' ' + cloneStudent.getAge();
      obj.startStudy = cloneStudent.getStudyPeriod();
      obj.faculty = cloneStudent.faculty;
      return obj;
    })
    return copyArray;
  }

  getStudentsInfo()

  let $tBody = document.querySelector('tbody');

  function renderStudents() {
    let cloneStudents = getStudentsInfo()
    cloneStudents = sortStudents(column, directionColumn, cloneStudents);
    $tBody.textContent = '';

    const fioValue = document.querySelector('.fio').value,
      facultyValue = document.querySelector('.faculty-filter').value,
      startStudyValue = document.querySelector('.startstudy-filter').value,
      finishStudyValue = document.querySelector('.finish-filter').value;
      console.log(fioValue.toLowerCase())

    if (fioValue.toLowerCase() !== '') {
      cloneStudents = filter(cloneStudents, 'name', fioValue);
    }
    if (facultyValue !== '') {
      cloneStudents = filter(cloneStudents, 'faculty', facultyValue);
    }
    if (startStudyValue !== '') {
      cloneStudents = filter(cloneStudents, 'birthDate', startStudyValue);
    }
    if (finishStudyValue !== '') {
      cloneStudents = filter(cloneStudents, 'startStudy', finishStudyValue);
    }

    for (let cloneStudent of cloneStudents) {
      createTBody(cloneStudent);
    }
  }
  renderStudents();


  function createTBody(cloneStudent) {
    const $tbody = document.querySelector('.tbody'),
      $bodyTr = document.createElement('tr'),
      $stuFullName = document.createElement('td'),
      $studBirthdate = document.createElement('td'),
      $stuStudy = document.createElement('td'),
      $stuFaculty = document.createElement('td');

    $stuFullName.classList.add('name-td');
    $studBirthdate.classList.add('birthdate-td');
    $stuStudy.classList.add('stu-study-td');
    $stuFaculty.classList.add('fac-td');

    $bodyTr.classList.add('body-tr');

    $stuFullName.textContent = cloneStudent.name;
    $studBirthdate.textContent = cloneStudent.birthDate;
    $stuStudy.textContent = cloneStudent.startStudy;
    $stuFaculty.textContent = cloneStudent.faculty;

    $tbody.append($bodyTr);
    $bodyTr.append($stuFullName);
    $bodyTr.append($studBirthdate);
    $bodyTr.append($stuStudy);
    $bodyTr.append($stuFaculty);

    return $bodyTr;
  }

  function columnButtonSort() {
    const buttonSort = document.querySelectorAll('.th');
    buttonSort.forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function () {
        column = this.dataset.column;
        directionColumn = !directionColumn;
        renderStudents();
      })
    })
  }
  columnButtonSort()

  function sortStudents(value, direction, array) {
    //let cloneStudents = [...students];
    array.sort(function (a, b) {
      let directionUp = a[value] < b[value];
      if (direction === true) {
        directionUp = a[value] > b[value];
      }
      if (directionUp === true) {
        return -1;
      }
    })
    return array;
  }

  const $inputName = document.querySelector('.name'),
    $inputSurname = document.querySelector('.surname'),
    $inputLastName = document.querySelector('.lastname'),
    $inputBirthDate = document.querySelector('.birthdate'),
    $inputStartStudy = document.querySelector('.startstudy'),
    $inputFaculty = document.querySelector('.faculty');

  const $labelName = document.querySelector('.label-name'),
    $labeSurname = document.querySelector('.label-surname'),
    $labelLastName = document.querySelector('.label-lastname'),
    $labelBirthdate = document.querySelector('.label-birthdate'),
    $labeStartStudy = document.querySelector('.label-startstudy'),
    $labelFaculty = document.querySelector('.label-faculty');

  const $form = document.querySelector('.form');

  function checkName() {
    const nameValue = $inputName.value.trim();
    if (nameValue.length < 2) {
      return false;
    } else {
      let stringArr = nameValue.split(/\s+/);
      let readyArr = stringArr.map(function (word) {
        let lowerCaseString = word.toLowerCase();
        return lowerCaseString[0].toUpperCase() + lowerCaseString.substring(1);
      })
      return readyArr.join(' ');
    }
  }

  $inputName.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    errorMessage($inputName, $labelName, 'Минимум 2 символа');
    if ($inputName.value.length > 1) {
      successMessage($inputName, $labelName, 'Порядок!');
    }
    if ($inputName.value.length === 0 || $inputName.value.length > 30) {
      $inputName.value = '';
    }
  })

  function checkSurname() {
    const surnameValue = $inputSurname.value.trim();
    if (surnameValue.length < 2) {
      return false;
    } else {
      let stringArr = surnameValue.split(/\s+/);
      let readyArr = stringArr.map(function (word) {
        let lowerCaseString = word.toLowerCase();
        return lowerCaseString[0].toUpperCase() + lowerCaseString.substring(1);
      })
      return readyArr.join(' ');
    }
  }

  $inputSurname.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    errorMessage($inputSurname, $labeSurname, 'Ваша фамилия!');
    if ($inputSurname.value.length > 1) {
      successMessage($inputSurname, $labeSurname, 'Порядок!');
    }
    if ($inputSurname.value.length > 30) {
      errorMessage($inputSurname, $labeSurname, 'Фамилия!');
      $inputSurname.value = '';
    }
  })

  function checkLastName() {
    const lastNameValue = $inputLastName.value.trim();
    if (lastNameValue.length < 2) {
      return false;
    } else {
      let stringArr = lastNameValue.split(/\s+/);
      let readyArr = stringArr.map(function (word) {
        let lowerCaseString = word.toLowerCase();
        return lowerCaseString[0].toUpperCase() + lowerCaseString.substring(1);
      })
      return readyArr.join(' ');
    }
  }

  $inputLastName.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    errorMessage($inputLastName, $labelLastName, 'Ваше отчество!');
    if ($inputLastName.value.length > 1) {
      successMessage($inputLastName, $labelLastName, 'Порядок!');
    }
    if ($inputLastName.value.length > 30) {
      $inputLastName.value = '';
    }
  })

  function checkFaculty() {
    const facultyValue = $inputFaculty.value.trim();
    if (facultyValue.length < 2) {
      return false;
    } else {
      let stringArr = facultyValue.split(/\s+/);
      let readyArr = stringArr.map(function (word) {
        let lowerCaseString = word.toLowerCase();
        return lowerCaseString[0].toUpperCase() + lowerCaseString.substring(1);
      })
      return readyArr.join(' ');
    }
  }

  $inputFaculty.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    errorMessage($inputFaculty, $labelFaculty, 'Факультет!');
    if ($inputFaculty.value.length > 1) {
      successMessage($inputFaculty, $labelFaculty, 'Порядок!');
    }
    if ($inputFaculty.value.length > 30) {
      errorMessage($inputFaculty, $labelFaculty, 'Много!');
      $inputFaculty.value = '';
    }
  })

  function checkBirthdate() {
    const birthDateValue = $inputBirthDate.value;
    const date = new Date(birthDateValue);
    return date;
  }

  $inputBirthDate.addEventListener('input', function () {
    errorMessage($inputBirthDate, $labelBirthdate, 'Дата рождения!');
    if ($inputBirthDate.value.length === 10) {
      successMessage($inputBirthDate, $labelBirthdate, 'Порядок!');
    }
  })

  function checkStartStudy() {
    const startStudy = $inputStartStudy.value;
    const date = new Date(startStudy);
    return date;
  }

  $inputStartStudy.addEventListener('input', function () {
    errorMessage($inputStartStudy, $labeStartStudy, 'Начало учебы!');
    if ($inputStartStudy.value.length === 10) {
      successMessage($inputStartStudy, $labeStartStudy, 'Порядок!');
    }
  })

  function errorMessage(input, label, mesagge) {
    input.style.borderColor = 'red';
    label.classList.remove('error-hidden');
    label.style.color = 'red';
    label.textContent = mesagge;
  }

  function successMessage(input, label, mesagge) {
    input.style.borderColor = 'green';
    label.classList.remove('error-hidden');
    label.style.color = 'green';
    label.textContent = mesagge;
  }

  $form.addEventListener('submit', function (e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll('.input-form');
    let arrInputs = Array.from(allInputs).filter(input => input.value === '');

    allInputs.forEach(input => {
      if (input.value === '') {
        input.style.borderColor = 'red';
      }
    })

    if (arrInputs.length !== 0) {
      return false;
    }

    if (!checkName() && !checkSurname() && !checkFaculty()) {
      return false
    }
    students.push(new Student(
      checkName(),
      checkSurname(),
      checkLastName(),
      checkBirthdate(),
      checkStartStudy(),
      checkFaculty()
    ))
    renderStudents();
    $form.reset();
    setTimeout(() => { hiddenError() }, 1000)
  })

  function hiddenError() {
    let allLabels = document.querySelectorAll('.label');
    allLabels.forEach(label => {
      label.textContent = '';
    })
  }

  const $filterFio = document.querySelector('.fio');
  const $filterFaculty = document.querySelector('.faculty-filter');
  const $filterFinish = document.querySelector('.finish-filter');
  const $filterStartStudy = document.querySelector('.startstudy-filter');

  $filterFio.addEventListener('input', function () {
    renderStudents();
  })

  $filterFaculty.addEventListener('input', function () {
    renderStudents();
  })

  $filterFinish.addEventListener('input', function () {
    renderStudents();
  })

  $filterStartStudy.addEventListener('input', function () {
    renderStudents();
  })

})();

