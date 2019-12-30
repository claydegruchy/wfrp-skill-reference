window.addEventListener("load", e => {


    var Isotope = require('isotope-layout')
    // var M = require('materialize-css')





    var attributes = document.getElementById('attributes')
    var basicSkills = document.getElementById('basicSkills')
    var advancedSkills = document.getElementById('advancedSkills')
    var talents = document.getElementById('talents')

    var dataPoints = {
        attributes: { element: attributes },
        basicSkills: { element: basicSkills },
        advancedSkills: { element: advancedSkills },
        talents: { element: talents },
    }

    function updateFilters(filter = { filter: "*" }) {
        return Object.keys(dataPoints).map(item => dataPoints[item].iso.arrange(filter))
    }


    function clearSearch() {
        updateFilters()
        return document.querySelector('#search').value = ""
    }


    // ########################



    fetch('./data.json')
        .then(r => r.json())
        .then(data => {

            var statTemplate = `
    {{#each data}}
    <div class="item hover {{this.tags}}">{{this.title}}
        <div class="expand-body hidden description"> {{this.description}}</div>
    </div>
    {{/each}}

    `

            statTemplate = Handlebars.compile(statTemplate);


            Object.keys(dataPoints).forEach(item => {
                dataPoints[item].element.innerHTML = statTemplate({ data: data[item] })
            })

        })
        .then(r => {

            Object.keys(dataPoints).forEach(item => {
                dataPoints[item].iso = new Isotope(dataPoints[item].element, {
                    // options
                    isHorizontal: true,
                    itemSelector: '.item',
                    layoutMode: 'vertical',
                });

            })

            document.querySelector('#search').addEventListener('keyup', e => {
                var qsRegex = new RegExp(e.target.value, 'gmi')
                updateFilters({
                    filter: (itemElem) => {
                        return qsRegex ? itemElem.textContent.match(qsRegex) : true;
                    }
                })
            })


            document.querySelector("#searchclear").onclick = (e) => clearSearch()




        })
        .then(r => {


            tippy('.hover', {
                // content: 'Tooltip',
                trigger: 'click', // or 'focus'
                onTrigger(instance, event) {
                    clearSearch()

                    event.target.querySelector('.expand-body').classList.remove('hidden')

                    var classList = [...instance.reference.classList]
                    if (!classList) return;
                    classList
                        .filter(c => c && c.includes("tag-"))
                        .forEach(c => {
                                var t = updateFilters({ filter: `.${c}` });
                                console.log(t);

                                [...document.querySelectorAll(`.${c}`)]
                                .filter(dom => dom != instance.reference)
                                    .forEach(dom => dom.classList.add("semi-highlight"))
                            }

                        )

                    instance.reference.classList.add("highlight")
                    event.target.parentNode.scrollTop = 0;
                },

                onHide(instance, event) {
                    document.querySelectorAll('.expand-body:not(.hidden)').forEach(elem => elem.classList.add('hidden'))
                    // event.target.querySelector('.expand-body').classList.add('hidden')
                    var classList = [...instance.reference.classList]
                    if (!classList) return;
                    classList
                        .filter(c => c && c.includes("tag-"))
                        .forEach(c => {
                            updateFilters({ filter: `*` });

                            [...document.querySelectorAll(`.${c}`)]
                            .filter(dom => dom != instance.reference)
                                .forEach(dom => dom.classList.remove("semi-highlight"))
                        })

                    instance.reference.classList.remove("highlight")

                }

            });

        })
        .then(r => {


            // M.Collapsible.init(document.querySelector('.collapsible'));



        })












    // .then(r=>console.log())
})