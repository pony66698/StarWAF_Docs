/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const Playgrounds = [
  {
    name: <><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" class="icon-inline" /> 查阅文档</>,
    url: '/docs',
    description: (
        "尝试通过查阅文档解决问题"
    ),
  },
  {
    name: <><img src="https://www.zoho.com/flow/assets/app_logos/canny_logo.jpeg" class="icon-inline" />联系我们</>,
    url: 'https://notes.nayanpatel.net/feature-requests/',
    description: (
        "查阅文档无法解决问题？对我们有更好的建议？联系我们！"
    ),
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function PlaygroundCard({name, image, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
          </Link>
        </div>
        <div className="card__body">
          <center><h3>{name}</h3></center>
          <center><p>{description}</p></center>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="playground.tryItButton">Go</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
