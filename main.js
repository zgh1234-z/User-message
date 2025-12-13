let i = 1;
while (i != 10) {
  const Username = prompt("نام کاربر ");
  const text = prompt("متن پیام را وارد کنید ");
  break;
  i++;
}

let M = [];
let S = JSON.stringify(M);
let P = JSON.parse(S);

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
M.push(NewText);
M.push(Newid);
