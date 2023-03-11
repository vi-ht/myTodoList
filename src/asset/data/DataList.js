// import * as fs from 'fs';
const taskList = [
  {
    id: "1",
    title: "Yub",
    reference: "https://www.npmjs.com/package/yup",
    refName: "Yub docs",
    state: "2",
    type: "1",
  },
  {
    id: "2",
    title: "Fokmil",
    reference: "https://formik.org/",
    refName: "Fokmil docs",
    state: "2",
    type: "1",
  },
  {
    id: "3",
    title: "React component lifecycle",
    reference:
      "https://viblo.asia/p/vong-doi-cua-component-trong-react-gGJ59XaJlX2",
    refName: "Lifecycle docs",
    state: "2",
    type: "1",
  },
  {
    id: "4",
    title: "Replace change theme function with DOM",
    state: "2",
    type: "2",
  },
  {
    id: "5",
    title: "React-form-hook",
    reference: "https://react-hook-form.com/",
    refName: "React-form-hook docs",
    state: "1",
    type: "1",
  },
];
function s() {
  console.log(require("./data.json"));
  return require("./data.json").dataList;
}
function setTaskList() {
  let user = {
    name: "Anonystick",
    emai: "anonystick@gmail.com",
    age: 37,
    gender: "Male",
    profession: "Software Developer",
  };

  try {
    // convert JSON object to a string
    const data = JSON.stringify(user, null, 4);

    // write file to disk
    eval('require("fs")').writeFileSync("./data.json", data, "utf8");

    console.log(`File is written successfully!`);
  } catch (err) {
    console.log(`Error writing file: ${err}`);
  }
}
setTaskList();
export { taskList, setTaskList, s };

// const taskList = [
//   {
//     id: "1",
//     title: "Yub",
//     reference: "https://www.npmjs.com/package/yup",
//     refName: "Yub docs",
//     state: "2",
//     type: '1'
//   },
//   {
//     id: "2",
//     title: "Fokmil",
//     reference: "https://formik.org/",
//     refName: "Fokmil docs",
//     state: "2",
//     type: '1'
//   },
//   {
//     id: "3",
//     title: "React component lifecycle",
//     reference: "https://viblo.asia/p/vong-doi-cua-component-trong-react-gGJ59XaJlX2",
//     refName: "Lifecycle docs",
//     state: "2",
//     type: '1'
//   },
//   { id: "4", title: "Replace change theme function with DOM", state: "2", type: '2' },
//   {
//     id: "5",
//     title: "React-form-hook",
//     reference: "https://react-hook-form.com/",
//     refName: "React-form-hook docs",
//     state: "1",
//     type: '1'
//   },
// ];
