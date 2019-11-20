$(document).ready(function() {
  $('.autocomplete').autocomplete({
    data: {
      'IMT 501 - e-Commerce Application': null,
      'IMT 502 - Software Engineering': null,
      'IMT 503 - Artificial Intelligence': null,
      'IMT 504 - Telecommunications': null,
      'IMT 505 - Web Publishing and Programming': null,
      'IMT 506 - Object Oriented Systems': null,
      'IMT 507 - Multimedia Application Development': null,
      'IMT 508 - The IT Profession': null,
      'IMT 509 - Wireless and Mobile System Application': null,
      'IMT 510 - IT Project Management': null,
      'IMT 511 - Management Communication': null,
      'IMT 514 - Cyberpreneurship and Media Law': null,
      'IMT 597 - Project I': null,
      'IMT 598 - Project II': null
    }
  });
});

$(document).ready(function() {
  $('select').formSelect();
});

let mainGPA1 = document.getElementById('main-gpa1');
let mainGPA2 = document.getElementById('main-gpa2');

function GPA() {
  //method to get element value by id
  let element = element => {
    return document.getElementById(element).value;
  };

  let studentName = element('studentName');
  let idNumber = element('idNumber');
  let semester = element('semester');

  // getting courses
  let course1 = element('course1');
  let course2 = element('course2');
  let course3 = element('course3');
  let course4 = element('course4');
  let course5 = element('course5');
  let course6 = element('course6');
  let course7 = element('course7');
  let course8 = element('course8');

  // getting course unit
  let course1Unit = element('course1Unit');
  let course2Unit = element('course2Unit');
  let course3Unit = element('course3Unit');
  let course4Unit = element('course4Unit');
  let course5Unit = element('course5Unit');
  let course6Unit = element('course6Unit');
  let course7Unit = element('course7Unit');
  let course8Unit = element('course8Unit');

  // getting course grade
  let course1Grade = element('course1Grade');
  let course2Grade = element('course2Grade');
  let course3Grade = element('course3Grade');
  let course4Grade = element('course4Grade');
  let course5Grade = element('course5Grade');
  let course6Grade = element('course6Grade');
  let course7Grade = element('course7Grade');
  let course8Grade = element('course8Grade');

  let totalUnits, totalGrades, gpa;

  totalUnits =
    parseInt(course1Unit) +
    parseInt(course2Unit) +
    parseInt(course3Unit) +
    parseInt(course4Unit) +
    parseInt(course5Unit) +
    parseInt(course6Unit) +
    parseInt(course7Unit) +
    parseInt(course8Unit);

  let course1Total = parseInt(course1Unit) * parseInt(course1Grade);
  let course2Total = parseInt(course2Unit) * parseInt(course2Grade);
  let course3Total = parseInt(course3Unit) * parseInt(course3Grade);
  let course4Total = parseInt(course4Unit) * parseInt(course4Grade);
  let course5Total = parseInt(course5Unit) * parseInt(course5Grade);
  let course6Total = parseInt(course6Unit) * parseInt(course6Grade);
  let course7Total = parseInt(course7Unit) * parseInt(course7Grade);
  let course8Total = parseInt(course8Unit) * parseInt(course8Grade);

  mainGPA1.style.display = 'none';
  mainGPA2.style.display = 'block';

  totalGrades =
    parseFloat(course1Total) +
    parseFloat(course2Total) +
    parseFloat(course3Total) +
    parseFloat(course4Total) +
    parseFloat(course5Total) +
    parseFloat(course6Total) +
    parseFloat(course7Total) +
    parseFloat(course8Total);

  gpa = parseFloat(totalGrades) / parseFloat(totalUnits);

  gpa = gpa.toFixed(2);

  let elementId = element => {
    return document.getElementById(element);
  };

  let gpaResult = elementId('gpaResult');

  gpaResult.innerText = `Your ${semester} GPA : ${gpa}`;

  let viewStudentName = document.getElementById('viewStudentName');
  let viewIdNumber = document.getElementById('viewIdNumber');
  let viewSemester = document.getElementById('viewSemester');

  viewStudentName.innerText = `Name: ${studentName}`;
  viewIdNumber.innerText = `ID: ${idNumber}`;
  viewSemester.innerText = semester;

  let viewCourse1, viewCourse2, viewCourse3, viewCourse4, viewCourse5, viewCourse6, viewCourse7, viewCourse8;

  //getting course view
  viewCourse1 = elementId('viewCourse1').innerText = course1;
  viewCourse2 = elementId('viewCourse2').innerText = course2;
  viewCourse3 = elementId('viewCourse3').innerText = course3;
  viewCourse4 = elementId('viewCourse4').innerText = course4;
  viewCourse5 = elementId('viewCourse5').innerText = course5;
  viewCourse6 = elementId('viewCourse6').innerText = course6;
  viewCourse7 = elementId('viewCourse7').innerText = course7;
  viewCourse8 = elementId('viewCourse8').innerText = course8;

  let viewCourse1Unit,
    viewCourse2Unit,
    viewCourse3Unit,
    viewCourse4Unit,
    viewCourse5Unit,
    viewCourse6Unit,
    viewCourse7Unit,
    viewCourse8Unit;

  //getting course unit view
  viewCourse1Unit = elementId('viewCourse1Unit').innerText = course1Unit;
  viewCourse2Unit = elementId('viewCourse2Unit').innerText = course2Unit;
  viewCourse3Unit = elementId('viewCourse3Unit').innerText = course3Unit;
  viewCourse4Unit = elementId('viewCourse4Unit').innerText = course4Unit;
  viewCourse5Unit = elementId('viewCourse5Unit').innerText = course5Unit;
  viewCourse6Unit = elementId('viewCourse6Unit').innerText = course6Unit;
  viewCourse7Unit = elementId('viewCourse7Unit').innerText = course7Unit;
  viewCourse8Unit = elementId('viewCourse8Unit').innerText = course8Unit;

  //getting course grade view

  // let course1GradeLetter = document.getElementById('course1Grade').innerText;

  if (course1Grade == 5) {
    let viewCourse1Grade = (elementId('viewCourse1Grade').innerText = 'A');
  } else if (course1Grade == 4) {
    let viewCourse1Grade = (elementId('viewCourse1Grade').innerText = 'B');
  } else if (course1Grade == 3) {
    let viewCourse1Grade = (elementId('viewCourse1Grade').innerText = 'C');
  } else if (course1Grade == 2) {
    let viewCourse1Grade = (elementId('viewCourse1Grade').innerText = 'D');
  } else if (course1Grade == 0) {
    let viewCourse1Grade = (elementId('viewCourse1Grade').innerText = 'F');
  }

  if (course2Grade == 5) {
    let viewCourse2Grade = (elementId('viewCourse2Grade').innerText = 'A');
  } else if (course2Grade == 4) {
    let viewCourse2Grade = (elementId('viewCourse2Grade').innerText = 'B');
  } else if (course2Grade == 3) {
    let viewCourse2Grade = (elementId('viewCourse2Grade').innerText = 'C');
  } else if (course2Grade == 2) {
    let viewCourse2Grade = (elementId('viewCourse2Grade').innerText = 'D');
  } else if (course2Grade == 0) {
    let viewCourse2Grade = (elementId('viewCourse2Grade').innerText = 'F');
  }

  if (course3Grade == 5) {
    let viewCourse3Grade = (elementId('viewCourse3Grade').innerText = 'A');
  } else if (course3Grade == 4) {
    let viewCourse3Grade = (elementId('viewCourse3Grade').innerText = 'B');
  } else if (course3Grade == 3) {
    let viewCourse3Grade = (elementId('viewCourse3Grade').innerText = 'C');
  } else if (course3Grade == 2) {
    let viewCourse3Grade = (elementId('viewCourse3Grade').innerText = 'D');
  } else if (course3Grade == 0) {
    let viewCourse3Grade = (elementId('viewCourse3Grade').innerText = 'F');
  }

  if (course4Grade == 5) {
    let viewCourse4Grade = (elementId('viewCourse4Grade').innerText = 'A');
  } else if (course4Grade == 4) {
    let viewCourse4Grade = (elementId('viewCourse4Grade').innerText = 'B');
  } else if (course4Grade == 3) {
    let viewCourse4Grade = (elementId('viewCourse4Grade').innerText = 'C');
  } else if (course4Grade == 2) {
    let viewCourse4Grade = (elementId('viewCourse4Grade').innerText = 'D');
  } else if (course4Grade == 0) {
    let viewCourse4Grade = (elementId('viewCourse4Grade').innerText = 'F');
  }

  if (course5Grade == 5) {
    let viewCourse5Grade = (elementId('viewCourse5Grade').innerText = 'A');
  } else if (course5Grade == 4) {
    let viewCourse5Grade = (elementId('viewCourse5Grade').innerText = 'B');
  } else if (course5Grade == 3) {
    let viewCourse5Grade = (elementId('viewCourse5Grade').innerText = 'C');
  } else if (course5Grade == 2) {
    let viewCourse5Grade = (elementId('viewCourse5Grade').innerText = 'D');
  } else if (course5Grade == 0) {
    let viewCourse5Grade = (elementId('viewCourse5Grade').innerText = 'F');
  }

  if (course6Grade == 5) {
    let viewCourse6Grade = (elementId('viewCourse6Grade').innerText = 'A');
  } else if (course6Grade == 4) {
    let viewCourse6Grade = (elementId('viewCourse6Grade').innerText = 'B');
  } else if (course6Grade == 3) {
    let viewCourse6Grade = (elementId('viewCourse6Grade').innerText = 'C');
  } else if (course6Grade == 2) {
    let viewCourse6Grade = (elementId('viewCourse6Grade').innerText = 'D');
  } else if (course6Grade == 0) {
    let viewCourse6Grade = (elementId('viewCourse6Grade').innerText = 'F');
  }

  if (course7Grade == 5) {
    let viewCourse7Grade = (elementId('viewCourse7Grade').innerText = 'A');
  } else if (course7Grade == 4) {
    let viewCourse7Grade = (elementId('viewCourse7Grade').innerText = 'B');
  } else if (course7Grade == 3) {
    let viewCourse7Grade = (elementId('viewCourse7Grade').innerText = 'C');
  } else if (course7Grade == 2) {
    let viewCourse7Grade = (elementId('viewCourse7Grade').innerText = 'D');
  } else if (course7Grade == 0) {
    let viewCourse7Grade = (elementId('viewCourse7Grade').innerText = 'F');
  }

  if (course8Grade == 5) {
    let viewCourse8Grade = (elementId('viewCourse8Grade').innerText = 'A');
  } else if (course8Grade == 4) {
    let viewCourse8Grade = (elementId('viewCourse8Grade').innerText = 'B');
  } else if (course8Grade == 3) {
    let viewCourse8Grade = (elementId('viewCourse8Grade').innerText = 'C');
  } else if (course8Grade == 2) {
    let viewCourse8Grade = (elementId('viewCourse8Grade').innerText = 'D');
  } else if (course8Grade == 0) {
    let viewCourse8Grade = (elementId('viewCourse8Grade').innerText = 'F');
  }
}
function closeGPA() {
  mainGPA2.style.display = 'none';
  mainGPA1.style.display = 'block';
  window.location.reload();
}
