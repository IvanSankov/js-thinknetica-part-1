'use strict';

function httpRequest() {
    let controller;
    let cache = {};

    return async function(url) {
        if (controller) {
            controller.abort();
            controller = null;
        }

        if (url in cache) {
            return cache[url];
        }

        controller = new AbortController();

        const response = await fetch(url, {
            signal: controller.signal,
        });

        if (!response.ok) {
            return Promise.reject(new Error(`Error: ${response.status}`));
        }

        cache[url] = response.json();
        return cache[url];
    }
}