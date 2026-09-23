// Återställer sökvägen efter omdirigeringen från 404.html (GitHub Pages har
// ingen server-side rewrite för SPA-rutter). Ligger i egen fil i stället för
// inline i index.html, så att CSP:n kan förbjuda inline-skript helt.
;(function (l) {
  if (l.search[1] === '/') {
    var decoded = l.search
      .slice(1)
      .split('&')
      .map(function (s) {
        return s.replace(/~and~/g, '&')
      })
    window.history.replaceState(
      null,
      null,
      l.pathname.slice(0, -1) + decoded[0] + (decoded[1] ? '&' + decoded[1].slice(1) : '') + l.hash,
    )
  }
})(window.location)
