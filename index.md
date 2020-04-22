# STRØM Industries

<button id="button">knopf</button> (works witn ui lang)

<div class="hidden" id="hiddencontent">

<form>
<label>email<label>
<input>
<button>ok</button>
</form>

</div>



- Delivery Dingens (coming soon)
- Discovery, Prototyping and Valiodation (coming soon)
- [Customer Develpment](#customer-development)

<div id="customer-development">

## Customer Development

Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

[Close](#)

</div>




<style>
#customer-development:not(:target), .hidden {
    display: none;
}

body {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    background-image: url(http://placekitten.com/g/800/500);
    max-width: 80ch;
    margin: auto;
    background-size: cover;
    background-position: top center;
}

h1, h2, h3, h4, p, ul, form {
    background: rgba(255, 255, 255, 0.6);
    padding: 0.2em;
}

form {
    text-align: center;
    width: 62vw;
    position: absolute;
    top: 0;
    top: 20vh;
    left: 19vw;
    margin: auto;
    padding: 1em;
    border: 2px dashed black;
    background: rgba(255, 255, 255, 0.9);
}
</style>

<script>
    document.addEventListener("DOMContentLoaded",function(){function n(a){var b=a.charAt(0);a=a.split(b);this.clickSelector=a[1];this.classBehavior=a[2].trim().split(" ")[0];this.classValue=a[3];this.targetSelector=a[5]}function f(a,b,c,d){this.clickSelector=a;this.classBehavior="s"==b.charAt(b.length-1)?b.substring(0,b.length-1):b;this.classValue="."==c.charAt(0)?c.substring(1,c.length):c;this.targetSelector=d;this.createEventListener()}for(var g=document.getElementsByTagName("code"),h=g.length,e,k;h--;){var l=g[h],m=l.textContent.trim();if(0===m.lastIndexOf("clicking on",0)){e=l;k=m;break}}e&&(e.parentNode.removeChild(e),f.prototype.createEventListener=function(){function a(a){switch(b.targetSelector){case "target":case "this":case "it":case "itself":case void 0:a.target.classList[b.classBehavior](b.classValue);break;default:for(var c=document.querySelectorAll(b.targetSelector),d=c.length;d--;)c.item(d).classList[b.classBehavior](b.classValue)}"a"==a.target.nodeName.toLowerCase()&&a.preventDefault()}var b=this,c=document.querySelectorAll(b.clickSelector),d=c.length;if(1>d)throw Error("There's no element matching your \""+b.clickSelector+'" CSS selector.');for(;d--;)c.item(d).addEventListener("click",a)},k.split("clicking on").forEach(function(a){a&&(a=new n(a.trim()),new f(a.clickSelector,a.classBehavior,a.classValue,a.targetSelector))}))});
</script>
<code>
    clicking on "#button" toggles class "hidden" on "#hiddencontent"

<code>
<body></body>