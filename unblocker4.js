
//uses https://unblock.endinternetcensorship.repl.co/main/ as a proxy and unblocks websites.
javascript: 
if (confirm("innerturtle unblocker?")) {
var loc = prompt("URL? (no HTTPS://)",window.getSelection()); loc = ~loc; window.location = "https://websiteunblocker.username-pass.repl.co/go/"+loc;
}