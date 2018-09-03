import React from 'react'
import styled from 'styled-components'

import emailsIcon from './icons/email.svg'
import githubIcon from './icons/github.svg'
import linkedinIcon from './icons/linkedin.svg'
import twitterIcon from './icons/twitter.svg'

const SocialBoxOuter = styled.nav`
  img {
    margin: 8px;
  }
`

const SocialBox = () => (
  <SocialBoxOuter id="sub-nav">
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/karl-run"
      id="nav-github-link"
      class="nav-icon"
      title="Github"
    >
      <img src={githubIcon} alt="github icon link" />
    </a>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/karloveraa/"
      id="nav-linkedin-link"
      class="nav-icon"
      title="LinkedIn"
    >
      <img src={linkedinIcon} alt="linkedin icon link" />
    </a>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://twitter.com/karl_run"
      id="nav-twitter-link"
      class="nav-icon"
      title="Twitter"
    >
      <img src={twitterIcon} alt="twitter icon link" />
    </a>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="mailto:k@rl.run"
      id="nav-email-link"
      class="nav-icon"
      title="E-mail"
    >
      <img src={emailsIcon} alt="emails icon link" />
    </a>
  </SocialBoxOuter>
)

export default SocialBox