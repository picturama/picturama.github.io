const languageNameByKey = {
    de: 'German',
    en: 'English',
    es: 'Spanish',
    fr: 'French'
}

fetch('https://raw.githubusercontent.com/picturama/picturama/master/src/common/i18n/i18n-stats.json')
    .then(res => res.json())
    .then(stats => {
        const entries = []
        for (const language of Object.keys(stats.missing)) {
            const missing = stats.missing[language]
            if (missing) {
                entries.push(`<li>${languageNameByKey[language] || language} needs ${missing} messages &nbsp; <a class="button button-mini" href="https://github.com/picturama/picturama/edit/master/src/common/i18n/text_${language}.ts">Translate now</a></li>`)
            }
        }

        if (entries.length) {
            document.getElementById('i18n-help').innerHTML =
                '<h2>Missing translations</h2>' +
                'Picturama needs your help! There are translations missing:' +
                '<ul>' + entries.join('') + '</ul>'
        }
    })
    .catch(error => console.error(error))
