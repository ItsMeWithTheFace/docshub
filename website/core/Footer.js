/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('cscc24/c24_w19w3', this.props.language)}>
              Principles of Programming Languages (C24)
            </a>
            <a href={this.docUrl('cscc43/c43_f18w3', this.props.language)}>
              Introduction to Databases (C43)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://piazza.com/"
              target="_blank"
              rel="noreferrer noopener">
              Piazza
            </a>
            <a
              href="https://q.utoronto.ca"
              target="_blank"
              rel="noreferrer noopener">
              Quercus  
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/ItsMeWithTheFace/til/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/ItsMeWithTheFace/til/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
