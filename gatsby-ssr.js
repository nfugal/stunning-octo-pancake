import React from 'react'

export function onRenderBody( { setPostBodyComponents } ) {
    setPostBodyComponents([
      <script
        defer
        src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "1d36c719f19a4aa280bd9caa364d9d0a"}'
      />,
    ])
}
