var fs = require('fs');
var contents = fs.readFileSync('ruby.txt', 'utf8');
split();
function split(){
    const operators={
         "==":true,
 "!=":true,
 ">=":true,
 "<=":true,
 "»":true,
 "«":true,
 "&&":true,
 "||":true,
 "+=":true,
 "-=":true,
 "*=":true,
 "/=":true,
 "&=":true,
 "|=":true,
 "+":true,
 "-":true,
 "=":true,
 "!":true,
 ">":true,
 "<":true,
 "&":true,
 "|":true,
 "*":true,
"/":true,
"%":true,
 "for":true,
 "do":true,
 "while":true,
 "return":true,
 "case":true,
 "if":true,
 "def":true,
 "end":true,
 "when":true,
 "unless":true,
 "then":true
    };
var CL=0;
var max=0;
var maximum=0;
var count=0;
var stack=[];
contents=contents.replace(/\r\n/g,"");
contents=contents.split(' ');
for (var i=0;i<contents.length;i++){
    if (operators[contents[i]]==true){
count++;
    }
}
for (var i=0;i<contents.length;i++){
if (contents[i]==="if" || contents[i]==="unless" || contents[i]==="case" || contents[i]==="while" || contents[i]==="for"){
CL++;
maximum++;
stack.push(contents[i]);
var j=i+1;
while (stack.length!=0){
    if (contents[j]==="elsif"  || contents[j]==="if" || contents[j]==="when" || contents[j]==="while" || contents[j]==="for"){
        maximum++;
        stack.push(contents[j]);
}
if (contents[j]==="end"){
    stack.pop();
    if (maximum>=max){
        max=maximum;
    }
    maximum--;
}
j++;
}
}
}
console.log("CL программы: "+CL);
console.log("Количество операторов программы: "+count);
console.log("cl программы: "+((CL/count).toFixed(2)));
console.log("Максимальная вложенность программы: "+ max);
}