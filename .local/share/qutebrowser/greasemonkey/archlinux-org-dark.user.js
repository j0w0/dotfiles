// ==UserScript==
// @name          ArchLinux.org Dark
// @namespace     http://userstyles.org
// @description	  A dark theme for ArchLinux.org, with inspiration from Solarized Dark.
// @author        nakh
// @homepage      https://userstyles.org/styles/176307
// @include       https://*.archlinux.org/*
// @run-at        document-start
// @version       0.20200202014033
// ==/UserScript==
(function() {var css = [
	"/** ArchLinux.org Dark",
	" * ",
	" * v0.22",
	" * By nakh",
	" */",
	"",
	"/*** Custom Colors ***/",
	":root {",
	"    --light: #ccc;",
	"    --lighter: #e8e8e8;",
	"    --dark: #03344d;",
	"    --darker: brown;",
	"    --code-highlight: #103740;",
	"    ",
	"    --dark-bg: #2b2b2b;",
	"}",
	"",
	"/*** General Styles ***/",
	"body {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"a:link,",
	"a:visited {",
	"    color: #4ca6d3 !important;",
	"}",
	"",
	"select {",
	"    color: var(--lighter) !important;",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"/*** Main Page ***/",
	"#nav-sidebar > h4 {",
	"    color: var(--lighter) !important;",
	"}",
	"",
	"#news h3 a {",
	"    color: var(--lighter) !important;",
	"}",
	"",
	"/* Change the color of the padding around certain code blocks */",
	"pre {",
	"    background: var(--code-highlight) !important;",
	"}",
	"",
	"dl dt {",
	"    color: var(--light) !important;",
	"}",
	"",
	"/*** Packages List ***/",
	"#pkglist-search {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#pkglist-results {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#pkglist-results-form th,",
	"#pkglist-results-form tr {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#pkglist-results-form tr:hover {",
	"    background-color: var(--dark) !important;",
	"}",
	"",
	"#pkglist-about {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"table.results {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"/* Exact Matches box */",
	"#exact-matches {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#exact-matches tr, #exact-matches th {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"/*** Package Page ***/",
	"#pkgdetails {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#actionlist {",
	"    background-color: var(--dark) !important;",
	"}",
	"",
	"#actionlist h4 {",
	"    color: var(--light);",
	"}",
	"",
	"/*** AUR ***/",
	"#intro {",
	"    background-color: #1a1a1a !important;",
	"}",
	"",
	"#news {",
	"    color: var(--light) !important;",
	"}",
	"",
	"div.box {",
	"    color: var(--lighter) !important;",
	"}",
	"",
	"#pkgsearch {",
	"    background: var(--dark) !important;",
	"}",
	"",
	"#pkg-updates {",
	"    background: #1a1a1a !important",
	"}",
	"",
	"#pkg-stats {",
	"    background: var(--dark) !important;",
	"}",
	"",
	"#footer  {",
	"    color: #f4f4f4 !important;",
	"}",
	"",
	"code {",
	"    background: var(--code-highlight) !important;",
	"}",
	"",
	".package-comments {",
	"    color: var(--light) !important;",
	"}",
	"",
	"/*** TODO Pages. No, not things I will finish later. These are the actual WIPs in /todo/ ***/",
	"#dev-todo-details {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	".filter-criteria {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#dev-todo-pkglist tr,",
	"#dev-todo-pkglist th {",
	"    background-color: var(--dark-bg) !important;",
	"}",
	"",
	"#dev-todo-pkglist tr:hover {",
	"    background-color: var(--dark) !important;",
	"}",
	"",
	"/* color: var(--light) !important */"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
