import React from 'react'
import url from 'url'
import get from 'lodash.get'
import srcPplLogoPurple from './assets/images/organisms/logo-purple.png'
import srcSocialShare from './assets/images/social-share.jpg'
import appleTouchIcon57 from './assets/meta/apple-touch-icon-57x57.png'
import appleTouchIcon60 from './assets/meta/apple-touch-icon-60x60.png'
import appleTouchIcon72 from './assets/meta/apple-touch-icon-72x72.png'
import appleTouchIcon76 from './assets/meta/apple-touch-icon-76x76.png'
import appleTouchIcon114 from './assets/meta/apple-touch-icon-114x114.png'
import appleTouchIcon120 from './assets/meta/apple-touch-icon-120x120.png'
import appleTouchIcon144 from './assets/meta/apple-touch-icon-144x144.png'
import appleTouchIcon152 from './assets/meta/apple-touch-icon-152x152.png'
import appleTouchIcon180 from './assets/meta/apple-touch-icon-180x180.png'
import favicon32 from './assets/meta/favicon-32x32.png'
import androidChrome192 from './assets/meta/android-chrome-192x192.png'
import favicon96 from './assets/meta/favicon-96x96.png'
import favicon16 from './assets/meta/favicon-16x16.png'
import safariPinnedTab from './assets/meta/safari-pinned-tab.svg'
import msTile144 from './assets/meta/mstile-144x144.png'

const Html = (props) => {
  const noTouchStart = { __html: "document.addEventListener('touchstart', function(){}, true)" }
  const title = get(props, 'title', 'Pledge Parental Leave: Four simple requirements. One monumental statement.')
  const ogLogo = url.resolve(props.canonicalUrl, srcPplLogoPurple)
  const ogImage = url.resolve(props.canonicalUrl, srcSocialShare)
  const ogUrl = url.resolve(props.canonicalUrl, props.path)
  const canonicalUrl = url.resolve(props.canonicalUrl, props.path)
  const metaRobots = canonicalUrl.includes('www.pledgepl.org') ? 'all' : 'noindex'

  const jsonLD = {
    __html: `{
              "@context" : "http://schema.org",
              "@type" : "Organization",
              "name" : "Pledge Parental Leave",
              "url" : "http://www.pledgepl.org",
              "logo" : "${ogLogo}",
              "sameAs" : [
                "http://twitter.com/pledgepl"
              ]
            }`
  }


  return (

    <html lang="en" className="no-js">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleTouchIcon114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleTouchIcon120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleTouchIcon144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180} />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={androidChrome192} sizes="192x192" />
        <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
        <link rel="mask-icon" href={safariPinnedTab} />
        <link rel="canonical" href={canonicalUrl} />
        <title>{title}</title>
        <meta name="description"               content={title} />
        <meta name="keywords"                  content="parental, leave, states, benefit, pledge, employees" />
        <meta name="robots"                    content={metaRobots} />
        <meta name="twitter:card"              content="summary_large_image" />
        <meta name="twitter:site"              content="@pledgepl" />
        <meta name="twitter:creator"           content="@pledgepl" />
        <meta name="twitter:title"             content={title} />
        <meta name="twitter:description"       content="A coalition of creative firms making a public commitment to improve parental leave policies. Pledge Parental Leave draws a line in the sand and sets a standard for minimum acceptable benefits. Join #PledgePL today." />
        <meta property="og:url"                content={ogUrl} />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content={title} />
        <meta property="og:description"        content="A coalition of creative firms making a public commitment to improve parental leave policies. Pledge Parental Leave draws a line in the sand and sets a standard for minimum acceptable benefits. Join #PledgePL today." />
        <meta property="og:image"              content={ogImage} />
        <meta name="msapplication-TileColor"   content="#da532c" />
        <meta name="msapplication-TileImage"   content={msTile144} />
        <meta name="theme-color"               content="#ffffff" />
        <base href="/" />
        {props.inlinestyles && <style type="text/css" dangerouslySetInnerHTML={props.inlinestyles} />}
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400" rel="stylesheet" />
        <script type="text/javascript" dangerouslySetInnerHTML={noTouchStart}></script>
        <script type="text/javascript" dangerouslySetInnerHTML={props.script}></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLD}></script>
      </head>

      <body>
        <div id="content" dangerouslySetInnerHTML={props.app} />
        {props.postinlinestyles &&
          <script type="text/javascript" dangerouslySetInnerHTML={ { __html: `(function(){
            var css = '${props.postinlinestyles.__html}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet){
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
          })();`}} />
        }
        {[...props.assets.js].map((src, i) =>
          <script type="text/javascript" src={src} charSet="utf-8" key={src}></script>
        )}
        <script type="text/javascript" dangerouslySetInnerHTML={props.postscript}></script>
        {[...props.assets.css].map(src => <link rel="stylesheet" type="text/css" href={src} key={src} />)}
      </body>
    </html>
  )
}

export default Html
