// ==UserScript==
// @name         Cardsense public build
// @namespace    http://tampermonkey.net/
// @version      1
// @description  shitcodeinc
// @match        *://*/*
// @run-at       document-end
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM_getValue
// @grant           GM_setValue
// ==/UserScript==
(function() {
    'use strict';



let guiVisible = GM_getValue('guiVisible', true);
let guiPosition = GM_getValue('guiPosition', { top: '50%', left: '50%' });
let guiSize = GM_getValue('guiSize', { width: '750px', height: '750px' })
let paymentGatewayFinder = GM_getValue('paymentGatewayFinder', false)
let alwaysinject = GM_getValue('alwaysinject', false)
let fillForm1 = GM_setValue('fillForm1', false);







    let scriptActive = false;

    const referrerDomain = document.referrer ? new URL(document.referrer).hostname : '';
    const currentDomain = window.location.hostname;

    const checkLastRunTime = () => {
        const lastRun = localStorage.getItem('scriptLastRunTime');
        if (lastRun) {
            const timeDifference = Date.now() - parseInt(lastRun);
            return timeDifference < 5000;
        }
        return false;
    };
    if(alwaysinject == true) {
        scriptActive = true;
        initScript();
    } else if (referrerDomain === currentDomain && checkLastRunTime()) {
        scriptActive = true;
        var isRef = true
        initScript();
    } else {
        let insertKeyPressed = false;

        const activateScript = () => {
            if (!scriptActive) {
                scriptActive = true;
                initScript();
            }
        };
        const keyListener = (e) => {
            if (e.key === 'Insert') {
                insertKeyPressed = true;
                activateScript();
                window.removeEventListener('keydown', keyListener);
            }
        };

        window.addEventListener('keydown', keyListener);
        setTimeout(() => {
            if (!insertKeyPressed) {
                window.removeEventListener('keydown', keyListener);
            }
        }, 60000);
    }

    function initScript() {




function toggleGUI() {
    guiVisible = !guiVisible;
    if (guiVisible) {
        shadowContainer.style.display = 'block';
        square2.style.display = 'block';
    } else {
        shadowContainer.style.display = 'none';
        square2.style.display = 'none';
    }
    GM_setValue('guiVisible', guiVisible);
}





    const version = "1.0 public"
        const updateLastRunTime = () => {
            localStorage.setItem('scriptLastRunTime', Date.now().toString());
        };

        const intervalId = setInterval(() => {
            if (!scriptActive) {
                clearInterval(intervalId);
            } else {
                updateLastRunTime();
            }
        }, 100);

    const shadowContainer = document.createElement('div');
    document.body.appendChild(shadowContainer);

    const shadowRoot = shadowContainer.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
        .square {
            width: ${guiSize.width};
            height: ${guiSize.height};
            position: fixed;
            top: ${guiPosition.top};
            left: ${guiPosition.left};
            transform: translate(-50%, -50%);
            z-index: 99999;
            border: 1.9px solid #2e2e2e;
            outline: 1.6px double #2e2e2e;
            outline-offset: 4px;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5) 1.5px, transparent 1.5px),
                              linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1.5px, transparent 1.5px);
            background-size: 4px 4px;
            background-position: -1px -1px;
            transition: opacity 0.5s ease, transform 0.5s ease, blur 1s ease;
        }
    `;

    shadowRoot.appendChild(style);
    const square1 = document.createElement('div');
        square1.classList.add('cardsenseignore');
        square1.style.width = guiSize.width;
        square1.style.height = guiSize.height;
        square1.style.background = '#121212';
        square1.style.position = 'fixed';
        square1.style.top = guiPosition.top;
        square1.style.left = guiPosition.left;
        square1.style.transform = 'translate(-50%, -50%)';
        square1.style.zIndex = '9999999';
        square1.style.border = '1.9px solid #2e2e2e';
        square1.style.outline = '1.6px double #2e2e2e';
        square1.style.outlineOffset = '4px';
        square1.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1.5px, transparent 1.5px)';
        square1.style.backgroundSize = '4px 4px';
        square1.style.lineHeight = '1.5';
        square1.style.verticalAlign = 'middle';
        square1.style.userSelect = 'none';
        square1.setAttribute('draggable', 'false');
        square1.style.transition = 'opacity 0.5s ease, transform 0.5s ease, blur 1s ease';

        square1.style.backgroundPosition = '-1px -1px';
square1.classList.add('square');
square1.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

    shadowRoot.appendChild(square1);

    shadowContainer.style.display = guiVisible ? 'block' : 'none';



        function setGridLineColor(color) {
            square1.style.backgroundImage = `linear-gradient(${color} 1.5px, transparent 1.5px), linear-gradient(90deg, ${color} 1.5px, transparent 1.5px)`;
        }
        setGridLineColor('rgba(25, 25, 25, 0.3)');
        var square2 = document.createElement('div');
        square2.style.width = parseInt(square1.style.width) + 14 + "px";
        square2.style.height = parseInt(square1.style.height) + 14 + "px";
        square2.style.background = '#262626';
        square2.style.position = 'fixed';
        square2.style.top = guiPosition.top;
        square2.style.left = guiPosition.left;
        square2.style.transform = 'translate(-50%, -50%)';
        square2.style.zIndex = '9999998';
        square2.style.border = '0.9px solid #141414';
        square2.style.transition = 'opacity 0.5s ease, transform 0.5s ease, blur 1s ease';
        square2.style.display = guiVisible ? 'block' : 'none';


        var resizeIcon = document.createElement('div');
        resizeIcon.style.width = '14px';
        resizeIcon.style.height = '14px';
        resizeIcon.style.background = '#808080';
        resizeIcon.style.opacity = '0.35';
        resizeIcon.style.position = 'absolute';
        resizeIcon.style.bottom = '0';
        resizeIcon.style.right = '0';
        resizeIcon.style.cursor = 'nwse-resize';
        resizeIcon.style.zIndex = '99999999';

        var gradientLine = document.createElement('div');
        gradientLine.style.width = '99.8%';
        gradientLine.style.height = '2.1px';
        gradientLine.style.background = 'rgb(100,150,200)';
        gradientLine.style.background = "linear-gradient(90deg, rgba(62,172,217,1) 0%, rgba(197,75,206,1) 50%, rgba(204,218,62,1) 100%)";
        gradientLine.style.position = 'absolute';
        gradientLine.style.top = '1.15px';
        gradientLine.style.left = '50%';
        gradientLine.style.zIndex = '4';
        gradientLine.style.transform = 'translate(-50%, -50%)';
        gradientLine.style.position = 'relative';
        gradientLine.style.zIndex = '4';
        gradientLine.style.border = 'none';




        document.body.appendChild(square2);
        square2.appendChild(resizeIcon);
        square1.appendChild(gradientLine);

        var isResizing = false;
        var startX, startY;
        var startWidth, startHeight;

        var isDragging = false;
        var startLeft1, startTop1;

        resizeIcon.addEventListener('mousedown', function (event) {
            if (event.button === 0) {
                isResizing = true;
                startX = event.clientX;
                startY = event.clientY;
                startWidth = parseInt(square1.style.width);
                startHeight = parseInt(square1.style.height);
                console.log(guiSize)
            }
        });

        document.addEventListener('mousemove', function (event) {
            if (isResizing) {
                var dX = event.clientX - startX;
                var dY = event.clientY - startY;

                var newWidth = startWidth + dX;
                var newHeight = startHeight + dY;

                newWidth = Math.min(Math.max(newWidth, 750), window.screen.width - 25);
                newHeight = Math.min(Math.max(newHeight, 750), window.screen.height - 25);

                square1.style.width = newWidth + 'px';
                square1.style.height = newHeight + 'px';
                square2.style.width = newWidth + 14 + 'px';
                square2.style.height = newHeight + 14 + 'px';
                resizeIcon.style.right = '-8px';
                resizeIcon.style.bottom = '-8px';
                resizeIcon.style.opacity = '0.15';
            }
        });

        document.addEventListener('mouseup', function (event) {
            if (isResizing) {
                isResizing = false;
                guiSize = { width: square1.style.width, height: square1.style.height };
                GM_setValue('guiSize', guiSize);
                resizeIcon.style.right = '0';
                resizeIcon.style.bottom = '0';
                resizeIcon.style.opacity = '0.35';
            }
        });

        square1.addEventListener('mousedown', function (event) {
            if (event.button === 2) {
                isDragging = true;
                startLeft1 = square1.offsetLeft;
                startTop1 = square1.offsetTop;
                startX = event.pageX;
                startY = event.pageY;

            }
        });

        document.addEventListener('mousemove', function (event) {
    if (isDragging) {
        var dX = event.pageX - startX;
        var dY = event.pageY - startY;

        var newLeft = startLeft1 + dX;
        var newTop = startTop1 + dY;
        var maxX = window.innerWidth - (parseInt(square1.style.width) * 0.4)
        var maxY = window.innerHeight - (parseInt(square1.style.height) * 0.4)

        newLeft = Math.max(Math.min(newLeft, maxX), 0);
        newTop = Math.max(Math.min(newTop, maxY), 0);

        square1.style.left = newLeft + 'px';
        square1.style.top = newTop + 'px';
        square2.style.left = newLeft + 'px';
        square2.style.top = newTop + 'px';
    }
});


window.addEventListener('keydown', (e) => {
    if (e.key === 'Insert') {
        toggleGUI();
    }
});

Object.defineProperty(document, 'cookie', {
    writable: false,
    value: ''
});

        document.addEventListener('mouseup', function (event) {
            if (isDragging) {
                guiPosition = { top: square1.style.top, left: square1.style.left };
                GM_setValue('guiPosition', guiPosition);
                isDragging = false;
            }
        });
var customFontStyle = document.createElement('style');
customFontStyle.innerHTML = `
@font-face {
    font-family: 'CustomFont';
    src: url('data:font/ttf;base64,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') format('truetype');
}
`;

document.head.appendChild(customFontStyle);

        var tabNames = ['D', 'F', "JS"];
        var tabcontain34er = document.createElement('div');
        tabcontain34er.style.width = '90px';
        tabcontain34er.style.height = '100%';
        tabcontain34er.style.position = 'absolute';
        tabcontain34er.style.top = '0';
        tabcontain34er.style.left = '0';
        tabcontain34er.style.flexDirection = 'column';
        tabcontain34er.style.display = 'flex';
        var emptyTab1 = document.createElement('div');
        emptyTab1.style.height = '15px';
        emptyTab1.style.borderRight = '1.5px solid #2E2E2E';
        emptyTab1.style.background = '#0d0d0d';
        emptyTab1.style.backgroundColor = '#0d0d0d';
        emptyTab1.style.width = '90px'
        emptyTab1.style.color = '#3b3b3b';
        emptyTab1.style.borderBottom = 'none';
        emptyTab1.style.borderTop = 'none';
        emptyTab1.style.borderRight = '1.5px solid #2E2E2E';
        tabcontain34er.appendChild(emptyTab1);
        for (var i = 0; i < tabNames.length; i++) {
            var tab = document.createElement('div');
            tab.style.width = '90px';
            tab.style.height = '90px';
            tab.style.background = '#0d0d0d';
            tab.style.color = '#3b3b3b';
            tab.style.fontSize = '65px';
            tab.style.fontFamily = 'CustomFont';
            if (tabNames[i] == "JS") {
                tab.style.fontFamily = 'Impact, Charcoal, sans-serif';
            }
            tab.style.display = 'flex';
            tab.style.alignItems = 'center';
            tab.style.justifyContent = 'center';
            tab.textContent = tabNames[i];
            tab.style.border = 'none';
            tab.style.borderRight = '1.5px solid #2E2E2E';
            tab.style.cursor = 'pointer';

            tab.addEventListener('click', function (event) {
                var tabs = tabcontain34er.children;
                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].style.backgroundColor = '#0d0d0d';
                    tabs[j].style.width = '90px'
                    tabs[j].style.color = '#3b3b3b';
                    tabs[j].style.borderBottom = 'none';
                    tabs[j].style.borderTop = 'none';
                    tabs[j].style.borderRight = '1.5px solid #2E2E2E';
                }

                var selectedTab = event.target;
                selectedTab.style.width = '91.5px';
                selectedTab.style.color = '#FFFFFF';
                selectedTab.style.backgroundColor = 'transparent';
                selectedTab.style.borderRight = 'none';
                selectedTab.style.borderLeft = 'none';
                selectedTab.style.borderBottom = '1.5px solid #2E2E2E';
                selectedTab.style.borderTop = '1.5px solid #2E2E2E';

                if (selectedTab.textContent == "A") ragetab[0].style.display = '';
                else ragetab[0].style.display = 'none';

                if (selectedTab.textContent == "B") legittab[0].style.display = '';
                else legittab[0].style.display = 'none';

                if (selectedTab.textContent == "G") aatab[0].style.display = '';
                else aatab[0].style.display = 'none';

                if (selectedTab.textContent == "C") visualtab[0].style.display = '';
                else visualtab[0].style.display = 'none';

                if (selectedTab.textContent == "D") settingstab[0].style.display = '';
                else settingstab[0].style.display = 'none';

                if (selectedTab.textContent == "E") skinstab[0].style.display = '';
                else skinstab[0].style.display = 'none';

                if (selectedTab.textContent == "F") profiletab[0].style.display = '';
                else profiletab[0].style.display = 'none';

                if (selectedTab.textContent == "JS") jstab[0].style.display = '';
                else jstab[0].style.display = 'none';
            });

            tabcontain34er.appendChild(tab);
        }

        var emptyTab = document.createElement('div');
        emptyTab.style.flexGrow = '1';
        emptyTab.style.background = '#0d0d0d';
        emptyTab.style.color = '#3b3b3b';
        emptyTab.style.fontSize = '40px';
        emptyTab.style.border = 'none';
        emptyTab.style.borderRight = '1.5px solid #2E2E2E';
        tabcontain34er.appendChild(emptyTab);
        square1.appendChild(tabcontain34er);



        function genTab() {
            var tab = document.createElement('div');
            tab.style.width = 'calc(100% - 90px)';
            tab.style.height = '99%';
            tab.style.position = 'relative';
            tab.style.top = '5px';
            tab.style.left = '90px';
            tab.style.opacity = '1';
            tab.style.overflowY = "hidden";
            tab.style.overflowX = 'hidden';
            square1.appendChild(tab);
            tab.style.scrollbarWidth = '8px';
            tab.style.display = 'none';
            var style = document.createElement('style');
            style.innerHTML = `
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: #262626;
    border-radius: 0px;
  }
`;
            document.head.appendChild(style);

            var left = document.createElement('div');
            left.style.width = '45%';
            left.style.left = '15px';
            left.style.position = 'absolute';

            var right = document.createElement('div');
            right.style.width = '45%';
            right.style.right = '15px';
            right.style.position = 'absolute';

            tab.appendChild(left);
            tab.appendChild(right);

            return [tab, left, right];
        }
        var ragetab = genTab();
        var legittab = genTab();
        var aatab = genTab();
        var visualtab = genTab();
        var settingstab = genTab();
        var skinstab = genTab();
        var profiletab = genTab();
        var jstab = genTab();
tabcontain34er.children[1].click();

        function createSection(element, text, height) {
            var wrapper = document.createElement('div');
            wrapper.style.position = 'relative';

            var section = document.createElement('div');
            section.style.width = '100%';
            section.style.height = height + 'px';
            section.style.position = 'relative';
            section.style.background = '#171717';
            section.style.boxShadow = "0px 0px 4px -0.5px rgba(0, 0, 0, 1)";
            section.style.border = '1.9px solid #2e2e2e';
            section.style.margin = '25px 0';
            section.style.overflowY = "auto";
            section.style.overflowX = "hidden";
            section.style.scrollbarWidth = '10px';
            section.style.scrollbarColor = 'rgba(33, 33, 33, 0.65) rgba(33, 33, 33, 0.0)';
            var sectionText = document.createElement('div');
            sectionText.textContent = text;
            sectionText.style.position = 'absolute';
            sectionText.style.top = '-11px';
            sectionText.style.left = '5%';
            sectionText.style.fontFamily = 'Verdana';
            sectionText.style.fontSize = '13px';
            sectionText.style.letterSpacing = '0.4px';
            sectionText.style.wordSpacing = '2px';
            sectionText.style.fontWeight = '550';
            sectionText.style.textDecoration = 'none';
            sectionText.style.fontStyle = 'normal';
            sectionText.style.fontVariant = 'normal';
            sectionText.style.textTransform = 'capitalize';
            sectionText.style.textAlign = 'left';
            sectionText.style.color = '#e3e3e3';
            wrapper.appendChild(section);
            wrapper.appendChild(sectionText);
            element.appendChild(wrapper);
    var style = document.createElement('style');
    style.textContent = `
        ${element.tagName.toLowerCase()} div::-webkit-scrollbar {
            width: 10px;
            background-color: #171717;
            opacity: 0.25;
        }

        ${element.tagName.toLowerCase()} div::-webkit-scrollbar-thumb {
            background-color: #444;
            border-radius: 1.5px;
            opacity: 0.25;
        }

        ${element.tagName.toLowerCase()} div::-webkit-scrollbar-track {
            background-color: #171717;
            opacity: 0.25;
        }
        ${element.tagName.toLowerCase()} div::-webkit-scrollbar-button {
            display: none;
        }
    `;
    document.head.appendChild(style)
            return section;
        }




        function AddMainInput(Section, Addcheckbox, AddBox, Addkeybind, AddColorpicker, TextForMain, DefaultColor, funcionforcheckbox, funcionforcolorpicker, InitialCheckboxState) {
            var contain34 = document.createElement('div');
            contain34.classList.add('contain34');
            contain34.style.width = '88.5%';
            contain34.style.height = '24px';
            contain34.style.position = 'relative';
            contain34.style.left = "15px";
            contain34.style.opacity = '1';


            var topPosition = 20;
            contain34.style.top = topPosition + 'px';


            if (AddBox == true) {
                contain34.style.background = '#171717';
                contain34.style.boxShadow = "0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset";
                contain34.style.border = '1.9px solid #2e2e2e';
            }

            Section.appendChild(contain34);

            if (Addcheckbox == true) {
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.style.position = 'absolute';
                checkbox.style.top = '15%';
                checkbox.style.left = '5px';
                checkbox.style.width = '12px';
                checkbox.style.height = '12px';
                checkbox.style.outline = 'none';
                checkbox.style.appearance = 'none';
                checkbox.style.boxShadow = '0px 2px 4px 1.5px rgba(178, 178, 178, 0.035) inset';
                checkbox.style.border = '0.25px solid rgba(0,0,0,0.65)';
                checkbox.style.background = 'linear-gradient(rgba(38, 38, 38, 1) 40%, rgba(30, 30, 30, 1) 100%)';
                checkbox.style.backgroundClip = 'content-box';
                checkbox.style.cursor = 'pointer';
                checkbox.style.margin = 'none';
        checkbox.checked = InitialCheckboxState;
        if (checkbox.checked) {
            checkbox.style.background = 'linear-gradient(rgba(184,255,0,1) 40%, rgba(142,191,16,1) 100%)';
            funcionforcheckbox(true);
        }

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                checkbox.style.background = 'linear-gradient(rgba(184,255,0,1) 40%, rgba(142,191,16,1) 100%)';
                funcionforcheckbox(true);
            } else {
                checkbox.style.background = 'linear-gradient(rgba(38, 38, 38, 1) 40%, rgba(30, 30, 30, 1) 100%)';
                funcionforcheckbox(false);
            }
        });
        contain34.appendChild(checkbox);
    }
            var text2 = document.createElement('div');
            text2.textContent = TextForMain;
            text2.style.position = 'absolute';
            text2.style.top = '20%';
            text2.style.left = '35px';
            text2.style.fontFamily = 'Verdana';
            text2.style.fontSize = '12px';
            text2.style.letterSpacing = '0.4px';
            text2.style.wordSpacing = '2px';
            text2.style.fontWeight = '329';
            text2.style.textDecoration = 'none';
            text2.style.opacity = "0.925";
            text2.style.fontStyle = 'normal';
            text2.style.fontVariant = 'normal';
            text2.style.textTransform = 'capitalize';
            text2.style.textAlign = 'left';
            text2.style.color = '#e3e3e3';
            if (Addkeybind == true) {
                var text3 = document.createElement('div');
                text3.textContent = '[-]';
                text3.style.position = 'absolute';
                text3.style.top = '20.5%';
                text3.style.right = '5px';
                text3.style.fontFamily = 'Verdana';
                text3.style.fontSize = '12px';
                text3.style.letterSpacing = '0.4px';
                text3.style.wordSpacing = '2px';
                text3.style.fontWeight = '449';
                text3.style.textDecoration = 'none';
                text3.style.fontStyle = 'normal';
                text3.style.fontVariant = 'normal';
                text3.style.textTransform = 'capitalize';
                text3.style.textAlign = 'right';
                text3.style.color = '#e3e3e3';
                text3.style.opacity = "0.325";
                if (AddColorpicker == true) {
                    text3.style.right = '40px';
                }

                text3.addEventListener('click', function () {
                    if (text3.style.color === 'rgb(169, 252, 3)') {
                        text3.style.color = '#e3e3e3';
                    } else {
                        text3.style.color = '#a9fc03';
                        text3.textContent = '[...]';
                    }
                });
                var hotkey
                document.addEventListener('keydown', function (event) {
                    if (text3.style.color === 'rgb(169, 252, 3)') {
                        text3.textContent = '[' + event.key + ']';
                        hotkey = event.key
                        text3.style.color = '#e3e3e3';
                    }
                });
                if (Addcheckbox == true) {
                    document.addEventListener('keydown', function (event) {
                        if (event.key === hotkey) {
                            checkbox.checked = !checkbox.checked;
                            if (checkbox.checked) {
                                checkbox.style.background = 'linear-gradient(rgba(184,255,0,1) 40%, rgba(142,191,16,1) 100%)';
                                funcionforcheckbox(true)
                            } else {
                                checkbox.style.background = 'linear-gradient(rgba(32, 32, 32, 1) 40%, rgba(24, 24, 24, 1) 100%)';
                                funcionforcheckbox(false)
                            }
                        }
                    });
                }
                if (Addcheckbox == false) {
                    text2.style.color = "#404040"
                    var checkboxstatus = false
                    document.addEventListener('keydown', function (event) {
                        if (event.key === hotkey) {
                            if (checkboxstatus == false) {
                                checkboxstatus = true
                                funcionforcheckbox(true)
                                text2.style.color = "#bfff00"
                            } else {
                                checkboxstatus = false
                                funcionforcheckbox(false)
                                text2.style.color = "#404040"
                            }
                        }
                    })
                }
                contain34.appendChild(text3);

            }
if (AddColorpicker == true) {
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.style.position = 'absolute';
    colorPicker.style.top = '5%';
    colorPicker.style.right = '5px';
    colorPicker.style.width = '30px';
    colorPicker.style.height = '15px';
    colorPicker.style.outline = 'none';
    colorPicker.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
    colorPicker.style.borderRadius = '0';
    colorPicker.style.borderColor = 'transparent';
    colorPicker.style.backgroundColor = 'transparent';
    colorPicker.style.appearance = 'none';
    colorPicker.style.webkitAppearance = 'none';
    colorPicker.style.mozAppearance = 'none';
    colorPicker.style.border = 'none';

    colorPicker.style.backgroundImage = 'none';
    colorPicker.style.padding = '0';

    colorPicker.value = DefaultColor;

    colorPicker.addEventListener('input', function () {
        var color = colorPicker.value;
        funcionforcolorpicker(color);
    });

    contain34.appendChild(colorPicker);
}
contain34.appendChild(text2);
        }
        function AddDropDownSelect(Section, Text, SelectList, AddBox, functionselect) {
            var contain34 = document.createElement('div');
            contain34.classList.add('contain34');
            contain34.style.width = '88.5%';
            contain34.style.height = '55px';
            contain34.style.position = 'relative';
            contain34.style.left = "15px";
            contain34.style.opacity = "1";

            var topPosition = 20;
            contain34.style.top = topPosition + 'px';


            if (AddBox == true) {
                contain34.style.background = '#171717';
                contain34.style.boxShadow = "0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset";
                contain34.style.border = '1.9px solid #2e2e2e';
            }
            Section.appendChild(contain34);
            var text2 = document.createElement('div');
            text2.textContent = Text;
            text2.style.position = 'absolute';
            text2.style.top = '6.5%';
            text2.style.left = '35px';
            text2.style.fontFamily = 'Verdana';
            text2.style.fontSize = '12px';
            text2.style.letterSpacing = '0.4px';
            text2.style.wordSpacing = '2px';
            text2.style.fontWeight = '349';
            text2.style.textDecoration = 'none';
            text2.style.fontStyle = 'normal';
            text2.style.fontVariant = 'normal';
            text2.style.textTransform = 'capitalize';
            text2.style.textAlign = 'left';
            text2.style.opacity = "0.925";
            text2.style.color = '#e3e3e3';
            contain34.appendChild(text2);
            var selectList = document.createElement('select');
            selectList.style.outline = 'none';
            selectList.style.boxShadow = "0px 0px 2px 1px rgba(0, 0, 0, 0.69)";
            selectList.style.border = '0.3px solid #2E2E2E';
            selectList.style.background = 'linear-gradient(rgba(42, 42, 42, 1) 40%, rgba(29, 29, 29, 1) 100%)';
            selectList.style.fontFamily = 'Verdana';
            selectList.style.color = '#e3e3e3';
            selectList.style.fontSize = '12px';
            selectList.style.textTransform = 'capitalize';
            selectList.style.opacity = "0.625";
            selectList.style.position = 'absolute';
            selectList.style.top = '23px';
            selectList.style.left = '35px';
            selectList.style.width = '65%';
            selectList.style.height = '25.5px';
            selectList.style.appearance = 'none';
            selectList.style.webkitAppearance = 'none';
            selectList.style.mozAppearance = 'none';
            selectList.style.msAppearance = 'none';
            selectList.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3E%3Cpath fill=\'%23e3e3e3\' d=\'M8 10.586L4.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L8 10.586z\'/%3E%3C/svg%3E")';
            selectList.style.backgroundRepeat = 'no-repeat';
            selectList.style.backgroundPosition = 'right center';
            selectList.style.paddingLeft = '12.5px';
            contain34.appendChild(selectList);


            selectList.addEventListener('change', function () {
                var selectedOption = selectList.options[selectList.selectedIndex].text;
                functionselect(selectedOption)
            });

            for (var i = 0; i < SelectList.length; i++) {
                var option = document.createElement('option');
                option.value = SelectList[i];
                option.text = SelectList[i];
                option.classList.add('custom-option');
                selectList.appendChild(option);
            }
            var customStyle = document.createElement('style');
            customStyle.innerHTML = `
            .custom-option {
                background-color: rgba(29, 29, 29, 1);
                border: 0.3px solid #2E2E2E;
                font-family: Verdana;
                color: #e3e3e3;
                font-size: 12px;
                box-shadow: 0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset;
                text-transform: capitalize;
            }
            `;
            document.head.appendChild(customStyle);
        }
        function AddSlider(Section, Text, defaultnum, max, min, textafternumber, AddBox, functionslider) {
            var contain34 = document.createElement('div');
            contain34.classList.add('contain34');
            contain34.style.width = '88.5%';
            contain34.style.height = '45px';
            contain34.style.position = 'relative';
            contain34.style.left = '15px';
            contain34.style.opacity = '1';

            var topPosition = 20;
            contain34.style.top = topPosition + 'px';


            if (AddBox == true) {
                contain34.style.background = '#171717';
                contain34.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
                contain34.style.border = '1.9px solid #2e2e2e';
            }

            var text2 = document.createElement('div');
            text2.textContent = Text;
            text2.style.position = 'absolute';
            text2.style.top = '6.5%';
            text2.style.left = '35px';
            text2.style.fontFamily = 'Verdana';
            text2.style.fontSize = '12px';
            text2.style.letterSpacing = '0.4px';
            text2.style.wordSpacing = '2px';
            text2.style.fontWeight = '349';
            text2.style.textDecoration = 'none';
            text2.style.fontStyle = 'normal';
            text2.style.fontVariant = 'normal';
            text2.style.textTransform = 'capitalize';
            text2.style.textAlign = 'left';
            text2.style.color = '#e3e3e3';
                        text2.style.opacity = "0.925";
            contain34.appendChild(text2);
            Section.appendChild(contain34);

            var slider = document.createElement('input');
            slider.type = 'range';
            slider.style.background = `linear-gradient(to right, #bfff00 0%, #bfff00 ${(defaultnum - min) / (max - min) * 100}%, #1f1f1f ${(defaultnum - min) / (max - min) * 100}%, #1f1f1f 100%)`;
            slider.style.color = `linear-gradient(to right, #bfff00 0%, #bfff00 ${(defaultnum - min) / (max - min) * 100}%, #1f1f1f ${(defaultnum - min) / (max - min) * 100}%, #1f1f1f 100%)`;
            slider.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
            slider.style.border = '0.3px solid #2E2E2E';
            slider.min = min;
            slider.max = max;
            slider.style.position = 'absolute';
            slider.value = defaultnum;
            slider.style.width = '65%';
            slider.style.left = '33px';
            slider.style.top = '20px';
            slider.style.height = '10px';
            var slidval = defaultnum;
            slider.style.outline = 'none';
            slider.style.appearance = 'none';

            var thumb = document.createElement('div');
            thumb.style.width = '1px';
            thumb.style.height = '12px';
            thumb.style.borderRadius = '50%';
            thumb.style.background = '#fff';
            thumb.style.position = 'relative';
            thumb.style.top = '-1px';
            thumb.style.boxShadow = '0px 0px 3px rgba(0, 0, 0, 0.3)';
            thumb.style.cursor = 'pointer';
            thumb.style.opacity = '0.2';

            slider.appendChild(thumb);
            contain34.appendChild(slider);

            var currentValue = document.createElement('div');
            currentValue.textContent = defaultnum + textafternumber;
            currentValue.style.position = 'absolute';
            currentValue.style.top = '60%';
            currentValue.style.left = 'calc(' + ((defaultnum - min) / (max - min) * 65) + '% - ' + (currentValue.textContent.length * 3.5 - 35) + 'px)';
            currentValue.style.fontFamily = 'Verdana';
            currentValue.style.fontSize = '12px';
            currentValue.style.letterSpacing = '0.4px';
            currentValue.style.wordSpacing = '2px';
            currentValue.style.fontWeight = '450';
            currentValue.style.textDecoration = 'none';
            currentValue.style.fontStyle = 'normal';
            currentValue.style.fontVariant = 'normal';
            currentValue.style.textTransform = 'capitalize';
            currentValue.style.textAlign = 'center';
            currentValue.style.color = '#e3e3e3';
            currentValue.style.textShadow = "0px 0px 5px rgba(25,25,25,1),0px 0px 5px rgba(25,25,25,1),0px 0px 5px rgba(25,25,25,1)";

            contain34.appendChild(currentValue);

            slider.addEventListener('input', function () {
                var value = parseInt(slider.value);
                var slidval = slider.value;
                currentValue.textContent = value + textafternumber;
                this.style.background = `linear-gradient(to right, #bfff00 0%, #bfff00 ${(this.value - this.min) / (this.max - this.min) * 100}%, #1f1f1f ${(this.value - this.min) / (this.max - this.min) * 100}%, #1f1f1f 100%)`;
                currentValue.style.left = 'calc(' + ((value - min) / (max - min) * 65) + '% - ' + (currentValue.textContent.length * 3.5 - 35) + 'px)';
            });

            if (typeof functionslider === 'function') {
                slider.addEventListener('input', function () {
                    var slidval = slider.value;
                    functionslider(slider.value);
                });
            }
        }
        function AddButton(Section, Text, functionbutton) {
            var contain34 = document.createElement('div');
            contain34.classList.add('contain34');
            contain34.style.width = '88.5%';
            contain34.style.height = '38.5px';
            contain34.style.position = 'relative';
            contain34.style.left = '15px';

            var topPosition = 20;
            contain34.style.top = topPosition + 'px';
            Section.appendChild(contain34);

            var button = document.createElement('button');
            button.style.height = '35px';
            button.style.left = '35px';
            button.style.width = '65%';
            button.textContent = Text;
            button.style.fontFamily = 'Verdana';
            button.style.fontSize = '14px';
            button.style.letterSpacing = '0.4px';
            button.style.wordSpacing = '2px';
            button.style.fontWeight = '549';
            button.style.textDecoration = 'none';
            button.style.fontStyle = 'normal';
            button.style.fontVariant = 'normal';
            button.style.textTransform = 'capitalize';
            button.style.textAlign = 'center';
            button.style.opacity = "0.925";
            button.style.color = '#e3e3e3';
            button.addEventListener('click', functionbutton);
            button.style.background = '#171717';
            button.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
            button.style.border = '1.9px solid #2e2e2e';
            button.style.position = 'absolute';
            button.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
            contain34.appendChild(button);
            button.style.transition = 'color 0.1s ease-in-out';
            button.addEventListener('click', function () {
                button.style.color = '#befc03';
            });

            button.addEventListener('transitionend', function () {
                button.style.color = '#e3e3e3';
            });
        }
        function AddTextInput(Section, Text, defaultext, AddBox, functiontextinput) {
            var contain34 = document.createElement('div');
            contain34.classList.add('contain34');
            contain34.style.width = '88.5%';
            contain34.style.height = '55px';
            contain34.style.position = 'relative';
            contain34.style.left = '15px';
            contain34.style.opacity = '1';

            var topPosition = 20;
            contain34.style.top = topPosition + 'px';


            if (AddBox == true) {
                contain34.style.background = '#171717';
                contain34.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
                contain34.style.border = '1.9px solid #2e2e2e';
            }

            var text2 = document.createElement('div');
            text2.textContent = Text;
            text2.style.position = 'absolute';
            text2.style.top = '6.5%';
            text2.style.left = '35px';
            text2.style.fontFamily = 'Verdana';
            text2.style.fontSize = '12px';
            text2.style.letterSpacing = '0.4px';
            text2.style.wordSpacing = '2px';
            text2.style.fontWeight = '349';
            text2.style.textDecoration = 'none';
            text2.style.fontStyle = 'normal';
            text2.style.fontVariant = 'normal';
            text2.style.textTransform = 'capitalize';
            text2.style.textAlign = 'left';
            text2.style.color = '#e3e3e3';
            text2.style.color = '#e3e3e3';
            contain34.appendChild(text2);
            Section.appendChild(contain34);
            var input = document.createElement('input');
            input.style.background = '#171717';
            input.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
            input.style.border = '1.9px solid #2e2e2e';
            input.type = 'text';
            input.value = defaultext;
            input.style.position = 'absolute';
            input.style.top = '23px';
            input.style.left = '35px';
            input.style.width = '65%';
            input.style.height = '25px';
            input.style.padding = '0 5px';
            input.style.boxSizing = 'border-box';
            input.style.fontFamily = 'Verdana';
            input.style.fontSize = '14px';
            input.style.letterSpacing = '0.4px';
            input.style.wordSpacing = '2px';
            input.style.fontWeight = '549';
            input.style.textDecoration = 'none';
            input.style.fontStyle = 'normal';
            input.style.fontVariant = 'normal';
            input.style.textAlign = 'left';
            input.style.color = '#e3e3e3';
            input.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
            contain34.appendChild(input);
            input.addEventListener('input', function () {
                var inputval = input.value;
                functiontextinput(inputval)
            });
        }
        function AddList(Section, Text, height, AddBox, selectfunction) {
    var contain34 = document.createElement('div');
    contain34.classList.add('contain34');
    contain34.style.width = '88.5%';
    contain34.style.height = height + 'px';
    contain34.style.position = 'relative';
    contain34.style.left = '15px';
    contain34.style.opacity = '1';

    var topPosition = 20;
    contain34.style.top = topPosition + 'px';



    if (AddBox == true) {
        contain34.style.background = '#171717';
        contain34.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
        contain34.style.border = '1.9px solid #2e2e2e';
    }

    var text2 = document.createElement('div');
    text2.textContent = Text;
    text2.style.position = 'absolute';
    text2.style.top = '10.5px';
    text2.style.left = '10px';
    text2.style.fontFamily = 'Verdana';
    text2.style.fontSize = '12px';
    text2.style.letterSpacing = '0.4px';
    text2.style.wordSpacing = '2px';
    text2.style.fontWeight = '349';
    text2.style.textDecoration = 'none';
    text2.style.fontStyle = 'normal';
    text2.style.fontVariant = 'normal';
    text2.style.textTransform = 'capitalize';
    text2.style.textAlign = 'left';
    text2.style.color = '#e3e3e3';
    text2.style.opacity = '0.925';
    contain34.appendChild(text2);

    var dabox = document.createElement('div');
    dabox.style.overflowY = 'auto';
    dabox.style.overflowY = 'visible';
    dabox.style.overflowX = 'hidden';
    dabox.style.width = '85%';
    dabox.style.height = '75%';
    dabox.style.top = '27.5px';
    dabox.style.position = 'absolute';
    dabox.style.left = '10px';
    dabox.style.background = '#171717';
    dabox.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
    dabox.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
    dabox.style.border = '1.9px solid #2e2e2e';
    contain34.appendChild(dabox);
    var list = document.createElement('ul');
    list.style.listStyleType = 'none';
    list.style.padding = '0';
    list.style.marginTop = '5px';
    dabox.appendChild(list);

    function addItemToList(name, data) {
        var listItem = document.createElement('li');
        listItem.style.position = 'relative';
        listItem.setAttribute('data', data);
        listItem.textContent = name;
        listItem.style.fontFamily = 'Verdana';
        listItem.style.fontSize = '12px';
        listItem.style.letterSpacing = '0.4px';
        listItem.style.wordSpacing = '2px';
        listItem.style.fontWeight = '349';
        listItem.style.left = '2.5%';
        listItem.style.textDecoration = 'none';
        listItem.style.fontStyle = 'normal';
        listItem.style.fontVariant = 'normal';
        listItem.style.textTransform = 'capitalize';
        listItem.style.textAlign = 'left';
        listItem.style.color = '#e3e3e3';
        listItem.style.opacity = '0.925';
        list.appendChild(listItem);
    }

    function removeItemFromList(index) {
        if (index >= 0 && index < list.children.length) {
            list.removeChild(list.children[index]);
        }
    }

    function clearList() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

    contain34.addItemToList = addItemToList;
    contain34.removeItemFromList = removeItemFromList;
    contain34.clearList = clearList;

    list.addEventListener('click', function(event) {
        var index = Array.from(list.children).indexOf(event.target);
        selectfunction(index);

        var selectedDate = '';
        var selectedName = '';
        if (index >= 0 && index < list.children.length) {
            var selectedElement = list.children[index];
            selectedName = selectedElement.textContent;
            selectedDate = selectedElement.getAttribute('data');
        }

        console.log('Selected item index:', index);
        console.log('Selected item name:', selectedName);
        console.log('Selected item date:', selectedDate);

        var previousSelectedItem = list.querySelector('.selected');
        if (previousSelectedItem) {
            previousSelectedItem.style.color = '#e3e3e3';
            previousSelectedItem.fontWeight = '349';
            previousSelectedItem.classList.remove('selected');
        }
        event.target.style.color = '#a6ff00';
        event.target.style.fontWeight = '450';
        event.target.classList.add('selected');
    });

    Section.appendChild(contain34);
    return contain34;
}
        var section1 = createSection(ragetab[1], '', 400);
        var section17 = createSection(ragetab[1], '', 200);
        var section2 = createSection(ragetab[2], '', 500);
        var section3 = createSection(aatab[1], '', 500);
        var section4 = createSection(aatab[2], '', 500);
        var section5 = createSection(legittab[1], '', 500);
        var section6 = createSection(legittab[2], '', 500);
        var section7 = createSection(visualtab[1], '', 500);
        var section8 = createSection(visualtab[2], '', 500);
        var section9 = createSection(settingstab[1], 'Main', 500);
        var section10 = createSection(settingstab[2], 'Inject settings', 65);
        var section11 = createSection(profiletab[1], 'Profile main', 500);
        var section12 = createSection(profiletab[2], 'Other section', 500);
        var section13 = createSection(jstab[1], 'Remote-access tool main', 500);
        var section14 = createSection(jstab[2], '', 500);
        var section15 = createSection(skinstab[1], '', 500);
        var section16 = createSection(skinstab[2], '', 500);







     function Asscolor1(value) {
         console.log("OMG OMG COLORPICKER RN IS:" + value)
     }




let foundElements = new Set();
let isActive = false;
let elementCount = {};

function gatewayfinder(value) {
    paymentGatewayFinder = value;
    GM_setValue('paymentGatewayFinder', paymentGatewayFinder);

    if (paymentGatewayFinder) {
        console.log(1);
        isActive = true;
        const foundElements = new Set();
        const elementCount = new Map();

        const gateways = [
            { name: 'braintree', keywords: ['assets.braintreegateway.com'] },
            { name: 'braintree element', keywords: ['braintree'] },
            { name: 'shopify', keywords: ['cdn.shopify.com', 'shopifycdn.com', 'shop.app'] },
            { name: 'revolut', keywords: ['revolut', 'payments-revolut-pay-button-iframe', 'merchant.revolut.com', 'revolut-pay'] },
            { name: 'stripe', keywords: ['stripe_token', 'stripe_public_key', 'stripe-payment', 'StripeElement'] },
            { name: 'stripe_v1', keywords: ['js.stripe.com/v1'] },
            { name: 'stripe_v2', keywords: ['js.stripe.com/v2'] },
            { name: 'stripe_v3', keywords: ['js.stripe.com/v3'] },
            { name: 'recurly', keywords: ['js.recurly.com'] },
            { name: 'chargebee', keywords: ['chargebee.com'] },
            { name: 'authorizenet', keywords: ['authorize.net', 'verify.authorize.net'] },
            { name: 'paddle', keywords: ['paddle.com', 'paddle_checkout'] },
            { name: 'adyen', keywords: ['checkoutshopper-live.adyen.com', 'adyen.com', 'adyen-checkout'] },
            { name: 'bigcommerce', keywords: ['bigcommerce', 'bigcommerce.com', 'payment.bigcommerce.com'] },
            { name: 'cybersource', keywords: ['cybersource'] }
        ];

        const checkElements = () => {
            const elements = document.querySelectorAll('*:not(.cardsenseignore)');
            const scripts = document.querySelectorAll('script');

            const checkContent = (content, el, key, notificationMessage) => {
                if (!foundElements.has(el) && content) {
                    createNotification(notificationMessage, 3000);
                    foundElements.add(el);

                    if (!elementCount.has(key)) {
                        elementCount.set(key, 0);
                    }
                    elementCount.set(key, elementCount.get(key) + 1);
                }
            };

            for (const el of elements) {
                for (const gateway of gateways) {
                    for (const keyword of gateway.keywords) {
                        const textContent = el.textContent.toLowerCase().includes(keyword.toLowerCase());
                        const attrContent = Array.from(el.attributes).some(attr => attr.value.toLowerCase().includes(keyword.toLowerCase()));
                        checkContent(textContent || attrContent, el, gateway.name, `${gateway.name} detected`);
                    }
                }
            }

            for (const script of scripts) {
                for (const gateway of gateways) {
                    for (const keyword of gateway.keywords) {
                        const scriptContent = script.src?.toLowerCase().includes(keyword.toLowerCase()) || script.textContent.toLowerCase().includes(keyword.toLowerCase());
                        checkContent(scriptContent, script, `${gateway.name}_script`, `${gateway.name} script detected`);
                    }
                }
            }
        };

        const checkInterval = setInterval(() => {
            if (!isActive) {
                clearInterval(checkInterval);
                return;
            }
            checkElements();
        }, 4999);

        const updateListInterval = setInterval(() => {
            if (!isActive) {
                clearInterval(updateListInterval);
                return;
            }

            elementCount.forEach((count, key) => {
                if (count > 0) {
                    detectslist.addItemToList(`${key} detected ${count} times`);
                    elementCount.set(key, 0);
                }
            });
        }, 5000);

    } else {
        isActive = false;
        foundElements.clear();
        elementCount.clear();
    }
}


     function buttbutton() {
         createNotification('1DS ДАВАЛКА НАЙДЕНА 1DS ДАВАЛКА НАЙДЕНА 1DS ДАВАЛКА НАЙДЕНА 1DS ДАВАЛКА НАЙДЕНА', 3000);
     }


function alwinj(value) {
    alwaysinject = value;
    GM_setValue('alwaysinject', alwaysinject);
}

function assbutton() {
      window.open("https://t.me/shitcodeincorporated", '_blank').focus();
}


AddMainInput(section9, true, false, false, false, "Payment gateway finder", '#FFFFFF', gatewayfinder, Asscolor1, paymentGatewayFinder)
 var detectslist = AddList(section9, 'Detects list', 325, false, function(index) {
    console.log(index)
});
AddButton(section9, "Join telegramm", assbutton)
AddMainInput(section9, false, false, false, false, "CardSense version - " + version, '#FFFFFF', assbutton, Asscolor1, assbutton)
AddMainInput(section9, false, false, false, false, "↑ Telegramm channel ↑", '#FFFFFF', assbutton, Asscolor1, assbutton)
AddMainInput(section9, false, false, false, false, "Author - petiuka", '#FFFFFF', assbutton, Asscolor1, assbutton)
AddMainInput(section10, true, false, false, false, "Always inject", '#FFFFFF', alwinj, Asscolor1, alwaysinject)









    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '1.5%';
    container.style.right = '1.5%';
    container.style.zIndex = '99999999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'flex-end';
    container.style.transition = 'all 0.5s ease';
    document.body.appendChild(container);

    function createNotification(message, duration) {
        const notification = document.createElement('div');
        notification.classList.add('cardsenseignore');
        notification.style.backgroundColor = '#333';
        notification.style.height = 'auto';
        notification.style.overflow = 'hidden';
        notification.style.color = '#fff';
        notification.style.padding = '10px';
        notification.style.marginBottom = '5%';
        notification.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        notification.style.position = 'relative';
        notification.style.opacity = '0';
        notification.style.fontFamily = 'Verdana';
        notification.style.fontSize = '14px';
        notification.style.letterSpacing = '0.4px';
        notification.style.wordSpacing = '2px';
        notification.style.fontWeight = '549';
        notification.style.textDecoration = 'none';
        notification.style.zIndex = '99999999';
        notification.style.fontStyle = 'normal';
        notification.style.fontVariant = 'normal';
        notification.style.textTransform = 'capitalize';
        notification.style.textAlign = 'center';
        notification.style.color = '#e3e3e3';
        notification.style.background = '#171717';
        notification.style.boxShadow = '0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset';
        notification.style.border = '1.9px solid #2e2e2e';
        notification.style.boxShadow = '0px 0px 2px 1px rgba(0, 0, 0, 0.69)';
        notification.style.transition = 'opacity 0.5s ease, transform 0.5s ease, blur 1s ease';
        notification.style.transform = 'translateY(-20px)';
        notification.textContent = message;

        container.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            notification.style.filter = 'blur(3px)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, duration);
    }




if(isRef == true) {
        createNotification('Cardsense ' + version + ' ReInjected', 3000);
} else {
    createNotification('Cardsense ' + version + ' Injected!', 3000);
}
}})();
