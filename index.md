# hello world

<button id="button">knopf</button> (works witn ui lang)

[tab 1](#tab1)   |   [tab 2](#tab2)   |   [close](#)  (work with :target)

<div id="tab1">

## Tab 1 content

</div>


<div id="tab2">

## Tab 2 content
</div>

<div class="hidden" id="hiddencontent">

hidden content!!

</div>

<style>
#tab1:not(:target), #tab2:not(:target), .hidden {
    display: none;
}

body {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    background-image: url(http://placekitten.com/g/800/500);
    max-width: 80ch;
    margin: auto;
    background-size: cover;
}

h1, h2, h3, h4, p, ul {
    background: white;
}
</style>

<script>
    document.addEventListener("DOMContentLoaded",function(){function n(a){var b=a.charAt(0);a=a.split(b);this.clickSelector=a[1];this.classBehavior=a[2].trim().split(" ")[0];this.classValue=a[3];this.targetSelector=a[5]}function f(a,b,c,d){this.clickSelector=a;this.classBehavior="s"==b.charAt(b.length-1)?b.substring(0,b.length-1):b;this.classValue="."==c.charAt(0)?c.substring(1,c.length):c;this.targetSelector=d;this.createEventListener()}for(var g=document.getElementsByTagName("code"),h=g.length,e,k;h--;){var l=g[h],m=l.textContent.trim();if(0===m.lastIndexOf("clicking on",0)){e=l;k=m;break}}e&&(e.parentNode.removeChild(e),f.prototype.createEventListener=function(){function a(a){switch(b.targetSelector){case "target":case "this":case "it":case "itself":case void 0:a.target.classList[b.classBehavior](b.classValue);break;default:for(var c=document.querySelectorAll(b.targetSelector),d=c.length;d--;)c.item(d).classList[b.classBehavior](b.classValue)}"a"==a.target.nodeName.toLowerCase()&&a.preventDefault()}var b=this,c=document.querySelectorAll(b.clickSelector),d=c.length;if(1>d)throw Error("There's no element matching your \""+b.clickSelector+'" CSS selector.');for(;d--;)c.item(d).addEventListener("click",a)},k.split("clicking on").forEach(function(a){a&&(a=new n(a.trim()),new f(a.clickSelector,a.classBehavior,a.classValue,a.targetSelector))}))});
</script>
<code>
    clicking on "#button" toggles class "hidden" on "#hiddencontent"

<code>
<body></body>