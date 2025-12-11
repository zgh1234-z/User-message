const Username = Symbol(prompt("نام کاربر "));
const text = prompt("متن پیام را وارد کنید ");

let M = [];

function* Id(n) {
  let id = 1;
  while (true) {
    yield i++;
  }
}

function message(Name, Text, Time) {
  this.Name = Name;
  this.Text = Text;
}

const NewText = new message(Username, text);
const Newid = Id(id);
const Time = new message(Date);
M.push(NewText);
M.push(Newid);

consol.log(M);
