// ==UserScript==
// @name         Linear App Tab Auto-Close
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-close tabs containing "The link was opened in the Linear app."
// @author       Thomas Roberts
// @match        *://linear.app/*
// @grant        window.close
// @run-at       document-idle
// ==/UserScript==

( function() {
    'use strict';

    window.addEventListener( 'load', function() {
        // Short delay to ensure all content is rendered, otherwise this might run too fast and miss the text.
        setTimeout( function() {
            const pageText = document.body.innerText;

            if (pageText.includes( "The link was opened in the Linear app." ) ) {
                window.close();
            }
        }, 500 );
    } );
} )();
