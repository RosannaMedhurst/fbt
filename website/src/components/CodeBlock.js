/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @noflow
 * @oncall i18n_fbt_js
 */

import Highlight, {defaultProps} from 'prism-react-renderer';
import React from 'react';

const CodeBlock = ({code}) => (
  <Highlight {...defaultProps} code={code} language="jsx">
    {({className, getLineProps, getTokenProps, style, tokens}) => (
      <pre className={className} style={{...style, textAlign: 'left'}}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
