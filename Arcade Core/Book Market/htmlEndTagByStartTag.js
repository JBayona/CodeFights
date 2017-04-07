/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note.

Example

For startTag = "<button type='button' disabled>", the output should be
htmlEndTagByStartTag(startTag) = "</button>";
For startTag = "<i>", the output should be
htmlEndTagByStartTag(startTag) = "</i>".

https://codefights.com/arcade/code-arcade/book-market/MX94DWTrwQw2gLrTi/description
*/

function htmlEndTagByStartTag(startTag) {
    return `</${startTag.match(/\w+/)[0]}>`;
}

startTag = "<button type='button' disabled>";
console.log(htmlEndTagByStartTag(startTag));