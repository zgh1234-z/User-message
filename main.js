let i = 1;

const Username = document.getElementById("username").value;
const text = document.getElementById("message").value;

let M = [];
// let S = JSON.stringify(M);
// let P = JSON.parse(S);

function* Id() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

function Message(Name, Text, Time) {
  this.Name = Name;
  this.Text = Text;
  this.Time = Time;
}

const NewText = new Message(Username, text, new Date());
const generator = Id();
const Newid = generator.next().value;

let regex = /بد/gi;
console.log(regex.test(text));
console.log(text.replace(regex, "#"));

function push() {
  M = [];
  M.push(NewText);
  M.push(Newid);
  M.push(generator);
  return M;
}
console.log(M);
